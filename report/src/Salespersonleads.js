import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const SalespersonLeads = () => {
  const data = [
    { name: "Suku", all: 2, miss: 1, unscheduled: 0, closed: 1 },
    { name: "Test", all: 1, miss: 1, unscheduled: 0, closed: 0 },
    { name: "Tester_salesman", all: 0, miss: 0, unscheduled: 0, closed: 0 },
    { name: "Test", all: 0, miss: 0, unscheduled: 0, closed: 0 },
  ];

  const handlePrint = () => window.print();
  const yTicks = [0, 1, 2, 3, 4];

  return (
    <div className="print-section">
      <div className="chart-container min-h-screen bg-gray-100 flex items-start justify-center p-6">

        <div className="bg-white border border-gray-300 rounded-md shadow-md w-full max-w-6xl">
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-gray-50">
            <h2 className="text-gray-700 text-sm font-semibold">
              Salesperson <span className="font-bold">Leads</span>
            </h2>
            <button
              onClick={handlePrint}
              className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900 print-btn"
            >
              Print
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 px-6 py-2 ml- mt-6">
            <Legend color="#34d399" label="Todays added Leads" />
            <Legend color="#FF8A80" label="All Leads" />
            <Legend color="#007bff" label="Miss lead" />
            <Legend color="#94a3b8" label="Unscheduled" />
            <Legend color="#6ee7b7" label="Closed Leads" />
          </div>

          <div className="p-6 pt-4">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barCategoryGap="35%"
              >
                <CartesianGrid stroke="#d1d5db" vertical={false} />
                <ReferenceLine y={0.5} stroke="#d1d5db" />
                <ReferenceLine y={1.5} stroke="#d1d5db" />
                <ReferenceLine y={2.5} stroke="#d1d5db" />
                <ReferenceLine y={3.5} stroke="#d1d5db" />
                <ReferenceLine y={0} stroke="#444" strokeWidth={1.5} />

                <XAxis dataKey="name" tick={{ fontSize: 13, fill: "#333" }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 4]} ticks={yTicks} tick={{ fontSize: 13, fill: "#333" }} axisLine={false} tickLine={false} />

                <Tooltip
                  cursor={false}
                  contentStyle={{
                    fontSize: "13px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                  }}
                />

                <Bar dataKey="all" stackId="a" fill="#FF8A80" barSize={80} />
                <Bar dataKey="miss" stackId="a" fill="#007bff" barSize={80} />
                <Bar dataKey="unscheduled" stackId="a" fill="#94a3b8" barSize={80} />
                <Bar dataKey="closed" stackId="a" fill="#6ee7b7" barSize={80} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center">
    <div
      className="rounded-sm mr-2"
      style={{ width: 24, height: 12, backgroundColor: color }}
    ></div>
    <span className="text-[13px] text-gray-700">{label}</span>
  </div>
);

export default SalespersonLeads;