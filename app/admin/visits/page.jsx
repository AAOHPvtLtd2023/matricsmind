"use client";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { Globe, Users, MapPin, TrendingUp, Clock, Activity } from "lucide-react";

export default function AdminVisits() {
  const [visits, setVisits] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Function to fetch and process visit data
  const fetchVisits = async () => {
    try {
      setIsLoading(true);
      
      const res = await fetch("/api/admin/visits");
      const data = await res.json();
      
      setVisits(data);
      setTotalVisitors(data.length);
      setLastUpdate(new Date());

      // Count visits per country
      const counts = {};
      data.forEach((v) => {
        counts[v.country] = (counts[v.country] || 0) + 1;
      });

      const formatted = Object.entries(counts)
        .map(([country, visits]) => ({ country, visits }))
        .sort((a, b) => b.visits - a.visits)
        .slice(0, 6);

      setCountryData(formatted);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching visits:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVisits();
    const interval = setInterval(fetchVisits, 5000); // Update every 5 seconds as in original
    return () => clearInterval(interval);
  }, []);

  // Generate hourly data from actual visits
  const getHourlyData = () => {
    const hours = {};
    const now = new Date();
    
    // Initialize last 24 hours with 0 visits
    for (let i = 23; i >= 0; i--) {
      const hour = new Date(now.getTime() - i * 60 * 60 * 1000).getHours();
      hours[`${hour}:00`] = 0;
    }
    
    // Count actual visits per hour
    visits.forEach(visit => {
      const visitDate = new Date(visit.visitedAt);
      const visitHour = visitDate.getHours();
      const key = `${visitHour}:00`;
      if (hours.hasOwnProperty(key)) {
        hours[key]++;
      }
    });
    
    return Object.entries(hours).map(([hour, visitors]) => ({ hour, visitors }));
  };

  const hourlyData = getHourlyData();
  const COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"];

  const StatCard = ({ icon: Icon, title, value, subtitle, color = "indigo" }) => (
    <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-3 rounded-xl bg-gradient-to-r from-${color}-500/20 to-${color}-600/20 border border-${color}-500/30`}>
              <Icon className={`w-6 h-6 text-${color}-400`} />
            </div>
            <span className="text-gray-400 text-sm font-medium">{title}</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {value}
            </div>
            {subtitle && (
              <div className="text-gray-500 text-sm">{subtitle}</div>
            )}
          </div>
        </div>
        <div className="w-2 h-16 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full opacity-60"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white">
      {/* Animated background elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <main className="relative z-10 p-6 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-300 bg-clip-text text-transparent mb-2">
              Visitor Analytics
            </h1>
            <p className="text-gray-400 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Real-time visitor tracking and insights
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Live</span>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            title="Total Visitors"
            value={totalVisitors.toLocaleString()}
            color="indigo"
          />
          <StatCard
            icon={Globe}
            title="Top Country"
            value={countryData[0]?.country || "-"}
            subtitle={`${countryData[0]?.visits || 0} visits`}
            color="purple"
          />
          <StatCard
            icon={MapPin}
            title="Countries"
            value={countryData.length}
            subtitle="Unique locations"
            color="cyan"
          />
          <StatCard
            icon={TrendingUp}
            title="Recent Activity"
            value={visits.filter(v => {
              const visitTime = new Date(v.visitedAt);
              const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
              return visitTime > hourAgo;
            }).length}
            subtitle="Last hour"
            color="green"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 p-6 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold text-white">Top Countries</h2>
            </div>
            <div className="h-80">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400"></div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={countryData}
                      dataKey="visits"
                      nameKey="country"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={40}
                      paddingAngle={5}
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {countryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "12px",
                        color: "white"
                      }}
                    />
                    <Legend 
                      wrapperStyle={{ color: "white", paddingTop: "20px" }}
                      iconType="circle"
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Hourly Trend */}
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 p-6 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">24h Visitor Trend</h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourlyData}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="hour" 
                    stroke="#9ca3af"
                    fontSize={12}
                  />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "12px",
                      color: "white"
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="visitors"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorVisitors)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Visitors Table */}
        <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Recent Visitors</h2>
              <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                {visits.length} total
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">IP Address</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Country</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">City</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Code</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Visited At</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12">
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-400"></div>
                        <span className="text-gray-400">Loading visitors...</span>
                      </div>
                    </td>
                  </tr>
                ) : visits.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12">
                      <div className="text-gray-500">
                        <Globe className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p className="text-lg font-medium">No visitors yet</p>
                        <p className="text-sm">Waiting for the first visitor to arrive...</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  visits.map((visitor, index) => (
                    <tr
                      key={visitor.id || index}
                      className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors group"
                    >
                      <td className="py-4 px-6">
                        <code className="px-2 py-1 bg-gray-800 rounded text-sm text-blue-300 font-mono">
                          {visitor.ip}
                        </code>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center text-xs font-bold">
                            {visitor.countryCode}
                          </div>
                          <span className="text-white group-hover:text-indigo-300 transition-colors">
                            {visitor.country}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300">{visitor.city || "-"}</td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-sm font-medium">
                          {visitor.countryCode}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-400 font-mono text-sm">
                        {new Date(visitor.visitedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}