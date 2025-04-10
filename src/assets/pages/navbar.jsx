import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resort Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
            <li><a href="/manage-reservations" className="hover:text-gray-300">Reservations</a></li>
            <li><a href="/admin-payment-dashboard" className="hover:text-gray-300">Payments</a></li>
            <li><a href="/admin-room-availability" className="hover:text-gray-300">Rooms</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
