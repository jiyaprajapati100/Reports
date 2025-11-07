import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

// Hardcoded data matching the Leads By Status image content
const leadsStatusData = [
  { srNo: 1, status: 'Pending', leads: 0 },
  { srNo: 2, status: 'Closed', leads: 1 },
  { srNo: 3, status: 'Open', leads: 2 },
  { srNo: 4, status: 'Special', leads: 0 },
];

export default function LeadsByStatusList() {
  // Initial state is null, as the template used "From Date" placeholders
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const handleSearch = () => {
    const formattedFromDate = fromDate
      ? moment(fromDate).format("YYYY-MM-DD")
      : "N/A";
    const formattedToDate = toDate
      ? moment(toDate).format("YYYY-MM-DD")
      : "N/A";
    console.log("Searching Leads By Status from", formattedFromDate, "to", formattedToDate);
    // Add API call logic here
  };

  // Note: CustomDateInput from the template is not needed here as we are styling the DatePicker input directly.

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-8">
      <div className="w-[95%] md:w-[90%] max-w-[1100px] mx-auto bg-white mt-4 border border-gray-300 rounded-sm shadow-md">
        
        {/* Header */}
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Leads By <span className="font-bold">Status List</span>
          </h2>
        </div>

        {/* --- Filters (Matching the template's style) --- */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-5 border-gray-200">
          
          {/* From Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="From Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromDatePickerRef}
              />
              <button
                type="button"
                onClick={() => fromDatePickerRef.current.setOpen(true)}
                className="bg-blue-500 rounded-r-md px-3 py-[10px] flex items-center justify-center hover:bg-blue-600"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toDatePickerRef}
              />
              <button
                type="button"
                onClick={() => toDatePickerRef.current.setOpen(true)}
                className="bg-blue-500 rounded-r-md px-3 py-[10px] flex items-center justify-center hover:bg-blue-600"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search Button & Red Text */}
          <div className="flex flex-col items-end">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white font-semibold px-11 py-1.5 rounded text-sm shadow-sm hover:bg-blue-600 transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-600 text-xs font-medium mt-1 text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>
                
        {/* --- Data Table --- */}
        <div className="overflow-x-auto px-6 pb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f2f5f7] text-gray-700 border-b border-gray-300">
                <th className="px-3 py-2 w-[10%] text-left font-semibold">
                  SR. NO.
                </th>
                <th className="px-3 py-2 text-left font-semibold">LEADS STATUS</th>
                <th className="px-3 py-2 text-left font-semibold">
                  LEADS
                </th>
                {/* Note: Removed 'Follow Up Leads' column as it's not in the status list image */}
              </tr>
            </thead>
            <tbody>
              {leadsStatusData.map((lead, index) => (
                <tr
                  key={lead.srNo}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.status}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.leads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}