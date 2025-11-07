import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

// Original Product Data
const leadsData = [
  { srNo: 1, product: 'Galaxy S1', leadsAdded: 0, followUpLeads: 0 },
  { srNo: 2, product: 'Galaxy S2', leadsAdded: 0, followUpLeads: 0 },
  { srNo: 3, product: 'Bandhani', leadsAdded: 0, followUpLeads: 0 },
  { srNo: 4, product: 'Lenovo Ideapad', leadsAdded: 0, followUpLeads: 0 },
  { srNo: 5, product: 'hi', leadsAdded: 0, followUpLeads: 0 },
];

export default function LeadsByProductList() {
  // Set initial dates, converting the string dates to Date objects for react-datepicker
  const initialFromDate = moment('2026-02-05', 'YYYY-MM-DD').toDate();
  const initialToDate = moment('2025-11-05', 'YYYY-MM-DD').toDate();
  
  const [fromDate, setFromDate] = useState(initialFromDate);
  const [toDate, setToDate] = useState(initialToDate);

  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const handleSearch = () => {
    const formattedFromDate = fromDate
      ? moment(fromDate).format("YYYY-MM-DD")
      : "N/A";
    const formattedToDate = toDate
      ? moment(toDate).format("YYYY-MM-DD")
      : "N/A";
    // This is where you'd typically dispatch an action or fetch new data
    console.log("Searching Leads By Product from", formattedFromDate, "to", formattedToDate);
  };

  // NOTE: CustomDateInput is not strictly needed since we apply classes directly, 
  // but keeping the logic for opening the calendar via button click.

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-8">
      <div className="w-[95%] md:w-[90%] max-w-[1100px] mx-auto bg-white mt-4 border border-gray-300 rounded-sm shadow-md">
        
        {/* Header */}
        <div className="border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800 text-left">
            Leads By <span className="font-bold">Product List</span>
          </h2>
        </div>

        {/* Filters */}
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
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={fromDatePickerRef}
              />
              <button
                type="button"
                onClick={() => fromDatePickerRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
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
                className="border border-gray-300 rounded-l-md p-2 w-40 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                ref={toDatePickerRef}
              />
              <button
                type="button"
                onClick={() => toDatePickerRef.current.setOpen(true)}
                className="bg-[#00AEEF] rounded-r-md px-3 py-[10px] flex items-center justify-center"
              >
                <FaCalendarAlt className="text-white text-base" />
              </button>
            </div>
          </div>

          {/* Search and Red Text */}
          <div className="flex flex-col items-end">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-11 py-1.5 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
            <p className="text-red-500 text-xs font-medium mt-1 text-right">
              Leads Count Contain (Custom Leads + Deals)
            </p>
          </div>
        </div>
                
        {/* Table */}
        <div className="overflow-x-auto px-6 pb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f2f5f7] text-gray-700 border-b border-gray-300">
                <th className="px-3 py-2 w-[10%] text-left font-semibold">
                  SR. NO.
                </th>
                <th className="px-3 py-2 text-left font-semibold">PRODUCT</th>
                <th className="px-3 py-2 text-left font-semibold">
                  LEADS ADDED
                </th>
                <th className="px-3 py-2 text-left font-semibold">
                  FOLLOW UP LEADS
                </th>
              </tr>
            </thead>
            <tbody>
              {leadsData.map((lead) => (
                <tr
                  key={lead.srNo}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.srNo}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.product}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.leadsAdded}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-left">
                    {lead.followUpLeads}
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