import React, { useState } from 'react';
import Header from '../layouts/Header';
import Sidemenu from '../layouts/Sidemenu';
import Breadcrumb from '../components/Breadcrumbs';

const ManageReservations = () => {
  const [reservations, setReservations] = useState([
    { id: 1, guestName: 'Jhonvelle Sosas', roomNumber: '101', cottageNumber: '', checkInDate: '2024-01-01', checkOutDate: '2024-01-05', status: 'pending', type: 'room' },
    { id: 2, guestName: 'Jane Revira', roomNumber: '', cottageNumber: 'C01', checkInDate: '2024-01-02', checkOutDate: '2024-01-06', status: 'accepted', type: 'cottage' },
    { id: 3, guestName: 'John Doe', roomNumber: '102', cottageNumber: '', checkInDate: '2024-01-03', checkOutDate: '2024-01-07', status: 'pending', type: 'room' },
    { id: 4, guestName: 'Jane Smith', roomNumber: '', cottageNumber: 'C02', checkInDate: '2024-01-04', checkOutDate: '2024-01-08', status: 'accepted', type: 'cottage' },
    { id: 5, guestName: 'Alice Johnson', roomNumber: '103', cottageNumber: '', checkInDate: '2024-01-05', checkOutDate: '2024-01-09', status: 'pending', type: 'room' },
    { id: 6, guestName: 'Bob Brown', roomNumber: '104', cottageNumber: '', checkInDate: '2024-01-06', checkOutDate: '2024-01-10', status: 'accepted', type: 'room' },
    { id: 7, guestName: 'Charlie Green', roomNumber: '', cottageNumber: 'C03', checkInDate: '2024-01-07', checkOutDate: '2024-01-11', status: 'pending', type: 'cottage' },
    { id: 8, guestName: 'David White', roomNumber: '105', cottageNumber: '', checkInDate: '2024-01-08', checkOutDate: '2024-01-12', status: 'accepted', type: 'room' },
  ]);
  
  const [editReservation, setEditReservation] = useState(null);
  const [viewReservation, setViewReservation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewPending, setViewPending] = useState(false);

  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Manage Reservations', path: '/manage-reservations' },
  ];

  const handleEditReservation = (reservation) => {
    setEditReservation(reservation);
  };

  const handleUpdateReservation = () => {
    if (editReservation) {
      setReservations((prevReservations) =>
        prevReservations.map((res) =>
          res.id === editReservation.id ? editReservation : res
        )
      );
      setEditReservation(null);
    }
  };

  const handleDeleteReservation = (id) => {
    setReservations((prevReservations) =>
      prevReservations.filter((reservation) => reservation.id !== id)
    );
  };

  const handleAcceptReservation = (id) => {
    setReservations((prevReservations) =>
      prevReservations.map((res) =>
        res.id === id ? { ...res, status: 'accepted' } : res
      )
    );
  };

  const handleViewReservation = (reservation) => {
    setViewReservation(reservation);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.roomNumber.includes(searchTerm) ||
      reservation.cottageNumber.includes(searchTerm)
  );

  const pendingReservations = reservations.filter((reservation) => reservation.status === 'pending');

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Header />  
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Sidemenu />
        </div>
        <div className="col-span-9">
          <Breadcrumb title="" links={breadcrumbLinks} />
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Reservations List</h3>
            <button
              onClick={() => setViewPending(!viewPending)}
              className="w-full sm:w-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
            >
              {viewPending ? 'Hide Pending Reservations' : 'View Pending Reservations'}
            </button>
            <input
              type="text"
              placeholder="Search by Guest Name, Room Number, or Cottage Number"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border rounded w-full mb-4"
            />
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Guest Name</th>
                  <th className="py-2 px-4 border-b">Room/Cottage Number</th>
                  <th className="py-2 px-4 border-b">Check-In Date</th>
                  <th className="py-2 px-4 border-b">Check-Out Date</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(viewPending ? pendingReservations : filteredReservations).map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-center">{reservation.id}</td>
                    <td className="py-2 px-4 border-b text-center">{reservation.guestName}</td>
                    <td className="py-2 px-4 border-b text-center">
                      {reservation.type === 'room' ? reservation.roomNumber : reservation.cottageNumber}
                    </td>
                    <td className="py-2 px-4 border-b text-center">{reservation.checkInDate}</td>
                    <td className="py-2 px-4 border-b text-center">{reservation.checkOutDate}</td>
                    <td className="py-2 px-4 border-b text-center">{reservation.status}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          onClick={() => handleViewReservation(reservation)}
                          className="flex-1 p-2 bg-cyan-600 text-black rounded-2xl hover:bg-blue-300"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEditReservation(reservation)}
                          className="flex-1 p-2 bg-amber-700 text-black rounded-2xl hover:bg-yellow-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReservation(reservation.id)}
                          className="flex-1 p-2 bg-red-800 text-black rounded-2xl hover:bg-red-300"
                        >
                          Cancel
                        </button>
                        {reservation.status === 'pending' && (
                          <button
                            onClick={() => handleAcceptReservation(reservation.id)}
                            className="flex-1 p-2 bg-green-700 text-black rounded-2xl hover:bg-green-300"
                          >
                            Accept
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {viewReservation && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Reservation Details</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p><strong>ID:</strong> {viewReservation.id}</p>
                <p><strong>Guest Name:</strong> {viewReservation.guestName}</p>
                <p><strong>Type:</strong> {viewReservation.type === 'room' ? 'Room' : 'Cottage'}</p>
                <p><strong>Number:</strong> {viewReservation.type === 'room' ? viewReservation.roomNumber : viewReservation.cottageNumber}</p>
                <p><strong>Check-In Date:</strong> {viewReservation.checkInDate}</p>
                <p><strong>Check-Out Date:</strong> {viewReservation.checkOutDate}</p>
                <p><strong>Status:</strong> {viewReservation.status}</p>
                <button
                  onClick={() => setViewReservation(null)}
                  className="mt-4 w-full sm:w-auto p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {editReservation && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Edit Reservation</h3>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Guest Name"
                  value={editReservation.guestName}
                  onChange={(e) =>
                    setEditReservation({ ...editReservation, guestName: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <select
                  value={editReservation.type}
                  onChange={(e) =>
                    setEditReservation({ ...editReservation, type: e.target.value })
                  }
                  className="p-2 border rounded"
                >
                  <option value="room">Room</option>
                  <option value="cottage">Cottage</option>
                </select>
                {editReservation.type === 'room' ? (
                  <input
                    type="text"
                    placeholder="Room Number"
                    value={editReservation.roomNumber}
                    onChange={(e) =>
                      setEditReservation({ ...editReservation, roomNumber: e.target.value })
                    }
                    className="p-2 border rounded"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Cottage Number"
                    value={editReservation.cottageNumber}
                    onChange={(e) =>
                      setEditReservation({ ...editReservation, cottageNumber: e.target.value })
                    }
                    className="p-2 border rounded"
                  />
                )}
                <input
                  type="date"
                  placeholder="Check-In Date"
                  value={editReservation.checkInDate}
                  onChange={(e) =>
                    setEditReservation({ ...editReservation, checkInDate: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  placeholder="Check-Out Date"
                  value={editReservation.checkOutDate}
                  onChange={(e) =>
                    setEditReservation({ ...editReservation, checkOutDate: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={handleUpdateReservation}
                    className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Update Reservation
                  </button>
                  <button
                    onClick={() => setEditReservation(null)}
                    className="flex-1 p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageReservations;
