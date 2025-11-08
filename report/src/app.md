// File: App.js (Final Reduction)
import React from "react";
import "./App.css";
import LeadsStatusChart from "./Leadstatusgraph";
import LeadStatusTable from "./Leadstatustable";

function App() {
  return (
    <div
      className="App min-h-screen" 
      style={{ backgroundColor: "#e5e9ec" }}
    >
      
      <div className="max-w-7xl mx-auto "> 
        
        {/* Chart Section */}
        
        <div className="rounded-md px-4"> 
          <LeadsStatusChart />
        </div>

        {/* Table Section */}
        
        <div className="rounded-md px-4"> 
          <LeadStatusTable />
        </div>
      </div>
    </div>
  );
}

export default App;