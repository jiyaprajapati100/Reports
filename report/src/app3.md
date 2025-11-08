import React from "react";
import "./App.css";   // <-- IMPORTANT for print CSS
import LeadsByProductChart from "./Leadproductgraph";
import SalespersonLeads from "./Salespersonleads";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-10">

      {/* First Chart */}
      <LeadsByProductChart />

      {/* Second Chart */}
      <SalespersonLeads />

    </div>
  );
}

export default App;