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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA47BC"];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">🌍 Visitor Analytics</h1>

      {/* Pie Chart */}
      <div className="w-full h-80 mb-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={countryData}
              dataKey="visits"
              nameKey="country"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
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

      {/* Table */}
      <h2 className="text-xl font-semibold mb-2">📋 Visitor Log</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">IP</th>
            <th className="p-2 border">Country</th>
            <th className="p-2 border">Code</th>
            <th className="p-2 border">Visited At</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((v, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{v.ip}</td>
              <td className="border p-2">{v.country}</td>
              <td className="border p-2">{v.countryCode}</td>
              <td className="border p-2">
                {new Date(v.visitedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
