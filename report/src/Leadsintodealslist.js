import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// You can replace the native input implementation with a library like react-datepicker 
// (as suggested in our previous conversation) for a better UX, but this 
// example sticks to basic HTML/Tailwind to match the look precisely.

export default function LeadsIntoDealsList() {
  // State for date inputs (optional, but good practice)
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = () => {
    console.log(`Searching deals from: ${fromDate} to: ${toDate}`);
    // Add your actual search logic here (e.g., API call)
  };

  // Mock data for the table rows
  const mockData = [
    { srNo: 1, totalLeads: 150, totalDeals: 45 },
    { srNo: 2, totalLeads: 80, totalDeals: 22 },
    // Add more data rows as needed
  ];
  
  // NOTE: For a real application, you would still use a ref and a hidden 
  // <input type="date"> alongside the calendar button for actual date selection, 
  // similar to the previous component's design logic. 
  // For this simplified appearance-focused example, we just show the structure.

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-sm shadow-sm">
        
        {/* Header Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-normal text-gray-700 text-left">
            Leads Into <span className="font-bold">Deals List</span>
          </h2>
        </div>

        {/* --- */}

        {/* Filter/Search Row */}
        <div className="px-6 py-4 flex flex-wrap items-center gap-4 bg-white">
          
          {/* From Date Input */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 text-sm font-medium whitespace-nowrap">From</label>
            <div className="flex">
              <input
                type="text"
                placeholder="From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border border-gray-300 rounded-l-sm p-2 w-32 md:w-40 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                // For a functional component, you'd add a hidden <input type="date" /> here
              />
              <button
                type="button"
                className="bg-blue-500 rounded-r-sm px-3 flex items-center justify-center hover:bg-blue-600 transition"
                aria-label="Select from date"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* To Date Input */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 text-sm font-medium whitespace-nowrap">To</label>
            <div className="flex">
              <input
                type="text"
                placeholder="To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border border-gray-300 rounded-l-sm p-2 w-32 md:w-40 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                // For a functional component, you'd add a hidden <input type="date" /> here
              />
              <button
                type="button"
                className="bg-blue-500 rounded-r-sm px-3 flex items-center justify-center hover:bg-blue-600 transition"
                aria-label="Select to date"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-sm text-sm shadow-md hover:bg-teal-600 transition duration-200 ease-in-out h-10"
            // The height 'h-10' is used to align it with the date inputs
          >
            Search
          </button>
        </div>

        {/* --- */}
        
        {/* Table Structure */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border-t border-b border-gray-300">
                <th className="px-6 py-3 w-[15%] text-left font-semibold border-r border-gray-300">
                  SR. NO.
                </th>
                <th className="px-6 py-3 w-[40%] text-left font-semibold">
                  TOTAL LEADS
                </th>
                <th className="px-6 py-3 w-[45%] text-left font-semibold">
                  TOTAL DEALS
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table Data Rows */}
              {mockData.map((row) => (
                <tr key={row.srNo} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-3 text-left border-r border-gray-200">
                    {row.srNo}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {row.totalLeads}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {row.totalDeals}
                  </td>
                </tr>
              ))}
              {/* Optional: Total Row */}
              <tr className="bg-gray-50 font-bold border-t border-gray-300">
                 <td className="px-6 py-3 text-right" colSpan="2">
                    GRAND TOTAL:
                 </td>
                 <td className="px-6 py-3 text-left">
                    {mockData.reduce((sum, row) => sum + row.totalDeals, 0)}
                 </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}