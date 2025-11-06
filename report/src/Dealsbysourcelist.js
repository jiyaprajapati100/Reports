import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const DealsBySourceList = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const handleSearch = () => {
    console.log('Searching from', fromDate, 'to', toDate);
  };

  return (
    // Background color added here 👇
    <div className="min-h-screen bg-[#e5e9ec] py-8">
      <div className="w-[70%] mx-auto bg-white mt-4 border border-gray-300 rounded-sm shadow-md">
        {/* Header */}
        <div className="border-b px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-800 text-left">
            Deals By <span className="font-bold">Source List</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-end gap-16 px-8 py-3 border-gray-200">
          {/* From Date */}
          <div className="flex items-center gap-10 mt-3">
            <label className="text-gray-700 font-medium text-sm">From</label>
            <div className="flex relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="From Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-48 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
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
          <div className="flex items-center gap-10 mt-3">
            <label className="text-gray-700 font-medium text-sm">To</label>
            <div className="flex relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To Date"
                calendarClassName="tailwind-datepicker"
                className="border border-gray-300 rounded-l-md p-2 w-48 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
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

          {/* Search */}
          <div className="flex flex-col items-end mt-3">
            <button
              onClick={handleSearch}
              className="bg-[#00AEEF] text-white font-semibold px-11 py-1.5 rounded text-sm shadow-sm hover:bg-[#0095D9] transition duration-200 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>

        {/* Table (Added pb-10 for bottom spacing inside box) */}
        <div className="overflow-x-auto px-6 pb-10">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  SR. NO.
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  SOURCE
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  LEADS ADDED
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  DEALS
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DealsBySourceList;
