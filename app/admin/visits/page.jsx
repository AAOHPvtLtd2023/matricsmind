"use client";
import { useEffect, useState, useMemo } from "react";
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
} from "recharts";
import {
  Globe,
  Users,
  MapPin,
  TrendingUp,
  Clock,
  Activity,
  LogOut,
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../.././../@/components/ui/tabs";

export default function AdminVisits() {
  const [visits, setVisits] = useState([]);
  // const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [formResponses, setFormResponses] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔑 Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const correctUser = "admin";
  const correctPass = "password123";

  // 🔎 Filters
  const [countryFilter, setCountryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [timeRange, setTimeRange] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const resetFilters = () => {
    setCountryFilter("");
    setCityFilter("");
    setTimeRange("all");
    setStartDate(null);
    setEndDate(null);
  };

  // Check if logged in already
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn === "true") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUser && password === correctPass) {
      setIsAuthenticated(true);
      localStorage.setItem("adminLoggedIn", "true");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminLoggedIn");
  };

  // Fetch visit data
  const fetchVisits = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/admin/visits");
      const data = await res.json();

      setVisits(data);
      setLastUpdate(new Date());
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching visits:", err);
      setIsLoading(false);
    }
  };
  // Fetch Form Responses
  const fetchForms = async () => {
    const res = await fetch("/api/admin/form/list");
    const data = await res.json();
    setFormResponses(data);
  };

  useEffect(() => {
    fetchVisits();
    fetchForms();
    const interval = setInterval(fetchVisits, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  // Apply filters
  const filteredVisits = visits.filter((v) => {
    const visitTime = new Date(v.visitedAt);
    const now = new Date();
    let withinTime = true;

    if (timeRange === "1h")
      withinTime = visitTime >= new Date(now - 60 * 60 * 1000);
    if (timeRange === "12h")
      withinTime = visitTime >= new Date(now - 12 * 60 * 60 * 1000);
    if (timeRange === "1d")
      withinTime = visitTime >= new Date(now - 24 * 60 * 60 * 1000);
    if (timeRange === "1w")
      withinTime = visitTime >= new Date(now - 7 * 24 * 60 * 60 * 1000);
    if (timeRange === "custom" && startDate && endDate) {
      withinTime =
        visitTime >= new Date(startDate) && visitTime <= new Date(endDate);
    }

    const matchesCountry = !countryFilter || v.country === countryFilter;
    const matchesCity = !cityFilter || v.city === cityFilter;

    return withinTime && matchesCountry && matchesCity;
  });

  // Update country data for charts
  const countryData = useMemo(() => {
    const counts = {};
    filteredVisits.forEach((v) => {
      counts[v.country] = (counts[v.country] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([country, visits]) => ({ country, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 6);
  }, [filteredVisits]);

  // Generate hourly data
  const getHourlyData = () => {
    const hours = {};
    const now = new Date();
    for (let i = 23; i >= 0; i--) {
      const hour = new Date(now.getTime() - i * 60 * 60 * 1000).getHours();
      hours[`${hour}:00`] = 0;
    }
    filteredVisits.forEach((visit) => {
      const visitDate = new Date(visit.visitedAt);
      const visitHour = visitDate.getHours();
      const key = `${visitHour}:00`;
      if (hours.hasOwnProperty(key)) {
        hours[key]++;
      }
    });
    return Object.entries(hours).map(([hour, visitors]) => ({
      hour,
      visitors,
    }));
  };
  const hourlyData = getHourlyData();

  const COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  // Export Handlers
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(filteredVisits, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "visitors.json";
    link.click();
  };

  const downloadCSV = () => {
    const headers = ["IP", "Country", "City", "Code", "Visited At"];
    const rows = filteredVisits.map((v) => [
      v.ip,
      v.country,
      v.city || "-",
      v.countryCode,
      new Date(v.visitedAt).toLocaleString(),
    ]);
    const csvContent = [headers, ...rows]
      .map((r) => r.map((x) => `"${x}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "visitors.csv";
    link.click();
  };

  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    color = "indigo",
  }) => (
    <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-xl border border-[#f9fafb] backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`p-3 rounded-xl bg-[#b5b5b6] border border-${color}-500/30`}
            >
              <Icon className={`w-6 h-6 text-[#000000]`} />
            </div>
            <span className="text-[#111827] text-sm font-medium">{title}</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-[#111827]">{value}</div>
            {subtitle && (
              <div className="text-[#22c55e] text-xs font-bold">{subtitle}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // how many rows per page

  const totalPages = Math.ceil(filteredVisits.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filteredVisits.slice(startIndex, startIndex + pageSize);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl w-96 space-y-6"
        >
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>
          <div>
            <label className="block text-sm text-gray-400">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-[#F6F6ED]">
      <header className="relative flex items-center justify-between p-4 md:p-6 border-b border-gray-700/50 bg-[#F6F6ED] backdrop-blur-md z-50">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold bg-[#111827] bg-clip-text text-transparent">
          Dashboard
        </h1>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold"
          >
            <Download className="w-4 h-4" /> JSON
          </button>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-semibold"
          >
            <Download className="w-4 h-4" /> CSV
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-semibold"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-50 animate-fadeIn">
              <button
                onClick={downloadJSON}
                className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4 text-blue-500" /> JSON
              </button>
              <button
                onClick={downloadCSV}
                className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4 text-green-500" /> CSV
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4 text-red-500" /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="relative z-10 p-6 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-[#111827] bg-clip-text text-transparent mb-0">
              Visitor Analytics
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Real-time visitor tracking and
              insights
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> Last updated:{" "}
              {lastUpdate.toLocaleTimeString()}
            </div>
            <button
              onClick={fetchVisits}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-xs font-medium"
            >
              Refresh Now
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-3 py-2 bg-[#e5e7eb] rounded-sm text-black font-bold"
          >
            <option value="">All Countries</option>
            {[...new Set(visits.map((v) => v.country))].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="px-3 py-2 bg-[#e5e7eb] rounded-sm text-black font-bold"
          >
            <option value="">All Cities</option>
            {[...new Set(visits.map((v) => v.city))].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 bg-[#e5e7eb] rounded-sm text-black font-bold"
          >
            <option value="all">All Time</option>
            <option value="1h">Last 1 Hour</option>
            <option value="12h">Last 12 Hours</option>
            <option value="1d">Last 1 Day</option>
            <option value="1w">Last 1 Week</option>
            <option value="custom">Custom</option>
          </select>

          {timeRange === "custom" && (
            <div className="flex gap-2">
              <input
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                className="px-2 py-1 bg-gray-800 border border-gray-600 rounded"
              />
              <input
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                className="px-2 py-1 bg-gray-800 border border-gray-600 rounded"
              />
            </div>
          )}

          {/* Reset Filters Button */}
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            title="Total Visitors"
            value={filteredVisits.length.toLocaleString()}
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
            value={
              filteredVisits.filter((v) => {
                const visitTime = new Date(v.visitedAt);
                return visitTime >= new Date(Date.now() - 60 * 60 * 1000);
              }).length
            }
            subtitle="Last hour"
            color="green"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold text-[#111827]">
                Top Countries
              </h2>
            </div>
            <div className="h-100">
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
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f9fafb",
                        border: "1px solid #f9fafb",
                        borderRadius: "12px",
                        color: "white",
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
          <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-[#111827]">
                24h Visitor Trend
              </h2>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourlyData}>
                  <defs>
                    <linearGradient
                      id="colorVisitors"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "12px",
                      color: "white",
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

        <Tabs defaultValue="visitors" className="w-full">
          <TabsList className="bg-[#2563eb] p-2 rounded-xl space-x-2">
            <TabsTrigger
              value="visitors"
              className="data-[state=active]:bg-white data-[state=active]:text-[#2563eb] 
               text-white rounded-lg px-4 py-2 transition-colors"
            >
              Visitors
            </TabsTrigger>

            {/* Uncomment if needed */}

            <TabsTrigger
              value="forms"
              className="data-[state=active]:bg-white data-[state=active]:text-[#2563eb] 
               text-white rounded-lg px-4 py-2 transition-colors"
            >
              Form Submissions
            </TabsTrigger>
          </TabsList>

          {/* Visitors Table */}
          <TabsContent value="visitors" className="mt-6">
            <div className="bg-[#f9fafb] rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="p-4 md:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  <h2 className="text-lg md:text-xl font-semibold text-[#111827]">
                    Recent Visitors
                  </h2>
                  <span className="px-2 md:px-3 py-1 text-xs bg-gray-200 rounded-full text-[#111827]">
                    {filteredVisits.length} total
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-3 px-4 md:px-6 text-gray-600 font-medium">
                        IP
                      </th>
                      <th className="text-left py-3 px-4 md:px-6 text-gray-600 font-medium">
                        Country
                      </th>
                      <th className="table-cell text-left py-3 px-6 text-gray-600 font-medium">
                        City
                      </th>
                      <th className="text-left py-3 px-4 md:px-6 text-gray-600 font-medium">
                        Code
                      </th>
                      <th className="table-cell text-left py-3 px-6 text-gray-600 font-medium">
                        Visited At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12">
                          <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-400"></div>
                            <span className="text-gray-500">
                              Loading visitors...
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : currentData.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12">
                          <div className="text-gray-500">
                            <Globe className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 opacity-50" />
                            <p className="text-base md:text-lg font-medium">
                              No visitors found
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      currentData.map((visitor, index) => (
                        <tr
                          key={visitor.id || index}
                          className="border-t hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 px-4 md:px-6">
                            <code className="px-2 py-1 rounded text-xs md:text-sm text-[#111827] font-mono">
                              {visitor.ip}
                            </code>
                          </td>
                          <td className="py-3 px-4 md:px-6">
                            <span className="text-[#111827]">
                              {visitor.country}
                            </span>
                          </td>
                          <td className="table-cell py-3 px-6 text-[#2563eb]">
                            {visitor.city || "-"}
                          </td>
                          <td className="py-3 px-4 md:px-6">
                            <span className="px-2 py-1 bg-[#22c55e]/20 text-[#22c55e] rounded text-xs md:text-sm font-medium">
                              {visitor.countryCode}
                            </span>
                          </td>
                          <td className="table-cell py-3 px-6 text-[#111827] font-mono text-xs md:text-sm">
                            {new Date(visitor.visitedAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {!isLoading && filteredVisits.length > 0 && (
                <div className="flex items-center justify-between flex-wrap gap-2 p-3 md:p-4 border-t bg-white">
                  {/* Previous */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {/* Page numbers (hidden on small screens) */}
                  <div className="hidden md:flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 text-sm rounded ${
                          currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="forms" className="mt-6">
            <div className="bg-white rounded-lg p-4 overflow-x-auto">
              <h2 className="text-xl text-[#111827] mb-4">Form Submissions</h2>
              <table className="w-full border text-sm">
                <thead>
                  <tr className="bg-gray-300 text-gray-800">
                    <th className="p-2">Interest</th>
                    <th className="p-2">Business Name</th>
                    <th className="p-2">Contact Person</th>
                    <th className="p-2">Designation</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Website</th>
                    <th className="p-2">Address</th>
                    <th className="p-2">Industry</th>
                    <th className="p-2">Years</th>
                    <th className="p-2">Audience</th>
                    <th className="p-2">Competitors</th>
                    <th className="p-2">Online Website</th>
                    <th className="p-2">Social Handles</th>
                    <th className="p-2">Running Ads</th>
                    <th className="p-2">Ad Platforms</th>
                    <th className="p-2">Goals</th>
                    <th className="p-2">Budget</th>
                    <th className="p-2">Timeline</th>
                    <th className="p-2">Notes</th>
                    <th className="p-2">Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {formResponses.map((r, i) => (
                    <tr key={i} className="border-b border-gray-700">
                      <td className="p-2 text-green-500">{r.interest}</td>
                      <td className="p-2 text-black font-bold">
                        {r.businessName}
                      </td>
                      <td className="p-2 text-black font-bold">
                        {r.contactPerson}
                      </td>
                      <td className="p-2 text-black">{r.designation}</td>
                      <td className="p-2 text-red-500">{r.phone}</td>
                      <td className="p-2 text-blue-500">{r.email}</td>
                      <td className="p-2 text-black">
                        <p>{r.website}</p>
                      </td>
                      <td className="p-2 text-black">{r.address}</td>
                      <td className="p-2 text-black">{r.industry}</td>
                      <td className="p-2 text-black">{r.years}</td>
                      <td className="p-2 text-black">{r.audience}</td>
                      <td className="p-2 text-black">{r.competitors}</td>
                      <td className="p-2 text-black">{r.onlineWebsite}</td>
                      <td className="p-2 text-black">{r.socialHandles}</td>
                      <td className="p-2 text-black">{r.runningAds}</td>
                      <td className="p-2 text-black">{r.adPlatforms}</td>
                      <td className="p-2 text-black">
                        {Array.isArray(r.goals) ? r.goals.join(", ") : r.goals}
                      </td>
                      <td className="p-2 text-black">{r.budget}</td>
                      <td className="p-2 text-black">{r.timeline}</td>
                      <td className="p-2 text-black">{r.notes}</td>
                      <td className="p-2 text-black">
                        {new Date(r.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
