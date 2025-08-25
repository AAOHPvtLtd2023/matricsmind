"use client";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AdminVisits() {
  const [visits, setVisits] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    async function fetchVisits() {
      try {
        const res = await fetch("/api/admin/visits");
        const data = await res.json();
        setVisits(data);
        setTotalVisitors(data.length);

        // Count per country
        const counts = {};
        data.forEach((v) => {
          counts[v.country] = (counts[v.country] || 0) + 1;
        });

        const formatted = Object.entries(counts)
          .map(([country, visits]) => ({ country, visits }))
          .sort((a, b) => b.visits - a.visits) // top countries first
          .slice(0, 5); // top 5 countries

        setCountryData(formatted);
      } catch (err) {
        console.error("Error fetching visits:", err);
      }
    }

    fetchVisits();
  }, []);

  const COLORS = ["#1c3784", "#00C49F", "#FFBB28", "#FF8042", "#AA47BC"];

  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-white">🌍 Visitor Analytics</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-white flex flex-col justify-center items-center">
          <span className="text-gray-400">Total Visitors</span>
          <span className="text-3xl font-bold mt-2">{totalVisitors}</span>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-white flex flex-col justify-center items-center">
          <span className="text-gray-400">Top Country</span>
          <span className="text-2xl font-semibold mt-2">
            {countryData[0]?.country || "-"}
          </span>
          <span className="text-gray-400 mt-1">
            {countryData[0]?.visits || 0} visits
          </span>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-white flex flex-col justify-center items-center">
          <span className="text-gray-400">Countries Tracked</span>
          <span className="text-2xl font-semibold mt-2">{countryData.length}</span>
        </div>
      </div>

      {/* Pie chart */}
      <div className="w-full h-96 bg-gray-900 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Top 5 Countries</h2>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={countryData}
              dataKey="visits"
              nameKey="country"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={{ fill: "white", fontWeight: "bold" }}
            >
              {countryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#111827", borderRadius: 6 }}
            />
            <Legend wrapperStyle={{ color: "white", fontWeight: "bold" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-white rounded-xl overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border-b text-left">IP</th>
              <th className="p-3 border-b text-left">Country</th>
              <th className="p-3 border-b text-left">City</th>
              <th className="p-3 border-b text-left">Code</th>
              <th className="p-3 border-b text-left">Visited At</th>
            </tr>
          </thead>
          <tbody>
            {visits.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-400 font-medium"
                >
                  No visits yet.
                </td>
              </tr>
            ) : (
              visits.map((v, i) => (
                <tr
                  key={i}
                  className={`text-left ${
                    i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                  } hover:bg-gray-700 transition-colors`}
                >
                  <td className="border-b p-2">{v.ip}</td>
                  <td className="border-b p-2">{v.country}</td>
                  <td className="border-b p-2">{v.city || "-"}</td>
                  <td className="border-b p-2">{v.countryCode}</td>
                  <td className="border-b p-2">
                    {new Date(v.visitedAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
