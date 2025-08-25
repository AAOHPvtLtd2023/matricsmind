"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminVisits() {
  const [visits, setVisits] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("/api/admin/visits")
      .then(res => res.json())
      .then(data => {
        setVisits(data);

        // Count per country
        const counts = {};
        data.forEach(v => {
          counts[v.country] = (counts[v.country] || 0) + 1;
        });

        const formatted = Object.keys(counts).map(c => ({
          country: c,
          visits: counts[c],
        }));
        setCountryData(formatted);
      });
  }, []);

  const COLORS = ["#1c3784", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA47BC"];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🌍 Visitor Analytics</h1>

      {/* Pie Chart Card */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Visits by Country</h2>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={countryData}
                dataKey="visits"
                nameKey="country"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {countryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Visitor Table Card */}
      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-black">📋 Visitor Log</h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-600">
              <th className="p-3 text-left border-b">IP</th>
              <th className="p-3 text-left border-b">Country</th>
              <th className="p-3 text-left border-b">Code</th>
              <th className="p-3 text-left border-b">Visited At</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v, i) => (
              <tr
                key={i}
                className={`text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${
                  i % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="p-3 border-b">{v.ip}</td>
                <td className="p-3 border-b">{v.country}</td>
                <td className="p-3 border-b">{v.countryCode}</td>
                <td className="p-3 border-b">
                  {new Date(v.visitedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
