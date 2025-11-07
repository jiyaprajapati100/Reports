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

const SalespersonLeadsChart = () => {
  // ✅ Example stacked data
  const data = [
    {
      name: "suku",
      todaysAdded: 1,
      allLeads: 2,
      missLead: 1,
      unscheduled: 0,
      closedLeads: 1,
    },
    {
      name: "Test",
      todaysAdded: 0,
      allLeads: 1,
      missLead: 1,
      unscheduled: 0,
      closedLeads: 0,
    },
    {
      name: "Tester_salesman",
      todaysAdded: 0,
      allLeads: 0,
      missLead: 0,
      unscheduled: 0,
      closedLeads: 0,
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white border border-gray-300 rounded-md shadow-sm w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-3">
          <h2 className="text-gray-700 text-sm font-semibold">
            Salesperson <span className="font-bold">Leads</span>
          </h2>
          <button
            onClick={handlePrint}
            className="bg-purple-800 text-white text-sm px-4 py-1.5 rounded hover:bg-purple-900"
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
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />

              {/* ✅ Legend at top-left */}
              <Legend
                verticalAlign="top"
                align="left"
                wrapperStyle={{ marginLeft: 60, marginBottom: 20 }}
              />

              {/* ✅ Stacked Bars */}
              <Bar
                dataKey="todaysAdded"
                stackId="a"
                fill="#009688" // Teal
                name="Todays added Leads"
                barSize={60}
              />
              <Bar
                dataKey="allLeads"
                stackId="a"
                fill="#FFA07A" // Light Salmon
                name="All Leads"
              />
              <Bar
                dataKey="missLead"
                stackId="a"
                fill="#007BFF" // Blue
                name="Miss lead"
              />
              <Bar
                dataKey="unscheduled"
                stackId="a"
                fill="#6A5ACD" // Slate Blue
                name="Unscheduled"
              />
              <Bar
                dataKey="closedLeads"
                stackId="a"
                fill="#20B2AA" // Light Sea Green
                name="Closed Leads"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalespersonLeadsChart;
