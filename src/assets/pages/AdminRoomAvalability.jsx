import React, { useState } from "react";
import Header from "../layouts/Header";
import Breadcrumb from "../components/Breadcrumbs";
import Sidemenu from "../layouts/Sidemenu";

const AdminRoomAvailability = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const rooms = [
    { id: 1, name: "Luxury Single", roomNumber: "101", category: "Room", capacity: 1, price: 100 },
    { id: 2, name: "Cozy Double", roomNumber: "102", category: "Room", capacity: 2, price: 150 },
    { id: 3, name: "Executive Suite", roomNumber: "103", category: "Room", capacity: 4, price: 300 },
    { id: 4, name: "Economy Single", roomNumber: "104", category: "Room", capacity: 1, price: 110 },
    { id: 5, name: "Deluxe Double", roomNumber: "105", category: "Room", capacity: 2, price: 160 },
    { id: 6, name: "Presidential Suite", roomNumber: "106", category: "Room", capacity: 4, price: 310 },
    { id: 7, name: "Budget Single", roomNumber: "107", category: "Room", capacity: 1, price: 120 },
    { id: 8, name: "Family Double", roomNumber: "108", category: "Room", capacity: 2, price: 170 },
    { id: 9, name: "Honeymoon Suite", roomNumber: "109", category: "Room", capacity: 4, price: 320 },
    { id: 10, name: "Forest Cottage", roomNumber: "110", category: "Cottage", capacity: 6, price: 400 },
    { id: 11, name: "Lakeside Cottage", roomNumber: "111", category: "Cottage", capacity: 8, price: 450 },
    { id: 12, name: "Mountain View Cottage", roomNumber: "112", category: "Cottage", capacity: 10, price: 500 },
    { id: 13, name: "Garden Cottage", roomNumber: "113", category: "Cottage", capacity: 12, price: 550 },
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

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md">
      <Header />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Sidemenu />
        </div>
        <div className="col-span-9">
            <Breadcrumb title="" links={breadcrumbLinks} />
            <h2 className="text-xl font-semibold mb-4">Room Availability</h2>
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
                    <td className="p-2 border">Php {room.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRoomAvailability;
