import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LeadsStatusChart = () => {
  // ✅ Example data
  const data = [
    { name: "Pending", leads: 0 },
    { name: "Closed", leads: 1 },
    { name: "Open", leads: 2 },
    { name: "Special", leads: 0 },
  ];

  // ✅ Print function
  const handlePrint = () => {
    window.print();
  };

  // ✅ Custom Legend
  const CustomLegend = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: 60,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          width: 20,
          height: 10,
          backgroundColor: "#3d60d2", // Using color from bar
          marginRight: 8,
          borderRadius: 2,
        }}
      ></div>
      <span className="text-gray-800 font-medium text-sm">No of leads</span>
    </div>
  );

  return (
    // FINAL SIMPLIFICATION: Removed all external layout/background styles (flex, min-h-screen, p-4)
    <div className="w-full"> 
      {/* This is the main white card container */}
      <div className="bg-white border border-gray-300 rounded-md shadow-sm w-full max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-3">
          <h2 className="text-gray-700 text-sm font-semibold">
            Leads <span className="font-bold">Status</span>
          </h2>
          <button
            onClick={handlePrint}
            // Add a class for print CSS to hide the button
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900 print-btn" 
          >
            Print
          </button>
        </div>

        {/* Chart */}
        <div className="p-6 bg-white rounded-b-md">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              barCategoryGap="25%"
            >
              {/* ✅ Horizontal grid lines only */}
              <CartesianGrid stroke="#e0e0e0" vertical={false} />

              <XAxis
                dataKey="name"
                tick={{ fill: "#333", fontSize: 13 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                domain={[0, 4]}
                ticks={[0, 1, 2, 3, 4]}
                allowDecimals={false}
                tick={{ fill: "#333", fontSize: 13 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip cursor={{ fill: "rgba(255, 247, 247, 0.05)" }} />

              <Legend verticalAlign="top" align="left" content={<CustomLegend />} />

              <Bar
                dataKey="leads"
                fill="#3779bfff"
                barSize={80}
                radius={[4, 4, 0, 0]}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default LeadsStatusChart;