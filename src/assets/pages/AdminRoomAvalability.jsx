import React, { useState } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumbs";
import Sidemenu from "../layouts/Sidemenu";

const AdminRoomAvailability = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const rooms = [
    { id: 1, name: "Deluxe", roomNumber: "101", category: "Room", capacity: 1, price: 100, available: 5 },
    { id: 2, name: "Beach front", roomNumber: "102", category: "Room", capacity: 2, price: 150, available: 3 },
    { id: 3, name: "Family standard", roomNumber: "103", category: "Room", capacity: 4, price: 300, available: 2 },
    { id: 4, name: "villa", roomNumber: "104", category: "Room", capacity: 1, price: 110, available: 4 },
    { id: 5, name: "Group villa", roomNumber: "105", category: "Room", capacity: 2, price: 160, available: 6 },
    { id: 6, name: "Private villa", roomNumber: "106", category: "Room", capacity: 4, price: 310, available: 1 },
    { id: 7, name: "Standard suite", roomNumber: "107", category: "Room", capacity: 1, price: 120, available: 3 },
    { id: 8, name: "Family Double", roomNumber: "108", category: "Room", capacity: 2, price: 170, available: 2 },
    { id: 9, name: "Beach house", roomNumber: "109", category: "Room", capacity: 4, price: 320, available: 4 },
    { id: 10, name: "Serene haven Cottage", roomNumber: "110", category: "Cottage", capacity: 6, price: 400, available: 5 },
    { id: 11, name: "willow Cottage", roomNumber: "111", category: "Cottage", capacity: 8, price: 450, available: 3 },
    { id: 12, name: "River breeze cottage Cottage", roomNumber: "112", category: "Cottage", capacity: 10, price: 500, available: 2 },
    { id: 13, name: "Ocean bliss villa Cottage", roomNumber: "113", category: "Cottage", capacity: 12, price: 550, available: 1 },
  ];

  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Manage Reservations', path: '/manage-reservations' },
  ];

  const filteredRooms = rooms.filter(
    (room) =>
      (filter === "all" || room.category === filter) &&
      room.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate room and cottage counts
  const totalRooms = rooms.filter(room => room.category === "Room").length;
  const totalCottages = rooms.filter(room => room.category === "Cottage").length;

  // Calculate filtered counts
  const filteredRoomCount = filteredRooms.filter(room => room.category === "Room").length;
  const filteredCottageCount = filteredRooms.filter(room => room.category === "Cottage").length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Header />
      <div className="flex h-full w-full gap-7">
        <div className="">
          <Sidemenu />
        </div>
        <div className="w-full">
            <Breadcrumb title="" links={breadcrumbLinks} />
            <h2 className="text-xl font-semibold mb-4">Room Availability</h2>

            {/* Stats cards for room and cottage counts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow border border-blue-100">
                <h3 className="text-sm text-blue-800 font-medium">Total Rooms</h3>
                <p className="text-2xl font-bold text-blue-600">{totalRooms}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow border border-green-100">
                <h3 className="text-sm text-green-800 font-medium">Total Cottages</h3>
                <p className="text-2xl font-bold text-green-600">{totalCottages}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow border border-blue-100">
                <h3 className="text-sm text-blue-800 font-medium">Filtered Rooms</h3>
                <p className="text-2xl font-bold text-blue-600">{filteredRoomCount}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow border border-green-100">
                <h3 className="text-sm text-green-800 font-medium">Filtered Cottages</h3>
                <p className="text-2xl font-bold text-green-600">{filteredCottageCount}</p>
              </div>
            </div>

            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="Search Room..."
                className="p-2 border rounded-md w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="p-2 border rounded-md"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Room">Room</option>
                <option value="Cottage">Cottage</option>
              </select>
            </div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Room Name</th>
                  <th className="p-2 border">Room Number</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Capacity</th>
                  <th className="p-2 border">Available</th>
                  <th className="p-2 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredRooms.map((room) => (
                  <tr key={room.id} className="text-center border">
                    <td className="p-2 border">{room.name}</td>
                    <td className="p-2 border">{room.roomNumber}</td>
                    <td className="p-2 border">{room.category}</td>
                    <td className="p-2 border">{room.capacity}</td>
                    <td className="p-2 border">{room.available}</td>
                    <td className="p-2 border">Php {room.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Show message when no rooms match filter criteria */}
            {filteredRooms.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No rooms found matching your criteria
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AdminRoomAvailability;
