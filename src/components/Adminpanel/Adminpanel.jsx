import React, { useState } from "react";

export default function AdminPanel({ bookings, onDelete, onLogout }) {
  console.log("AdminPanel bookings:", bookings);  // Debug log

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const uniqueStyles = [...new Set(bookings.map((b) => b.style || "No Style").filter(Boolean))];

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = Object.values(booking)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesStyle = selectedStyle ? (booking.style || "No Style") === selectedStyle : true;

    const bookingDate = new Date(booking.date);
    const from = startDate ? new Date(startDate) : null;
    const to = endDate ? new Date(endDate) : null;
    const matchesDate = (!from || bookingDate >= from) && (!to || bookingDate <= to);

    return matchesSearch && matchesStyle && matchesDate;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Panel - All Bookings</h2>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name, date, style, ref..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border px-3 py-2 mb-4 rounded-md dark:bg-gray-800 dark:border-gray-700"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
        >
          <option value="">All Styles</option>
          {uniqueStyles.map((style, idx) => (
            <option key={idx} value={style}>
              {style}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border px-3 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      {filteredBookings.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredBookings.map((booking, index) => (
            <li
              key={booking.id || index}
              className="p-4 border rounded-md shadow-sm dark:border-gray-700"
            >
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Style:</strong> {booking.style || "N/A"}</p>
              <p><strong>Bank Ref:</strong> {booking.bankTransfer}</p>
              <button
                onClick={() => onDelete(booking.id)}
                className="mt-2 text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
