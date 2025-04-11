import React, { useState } from 'react';

const StaffDashboard = () => {
  const [activeLink, setActiveLink] = useState('Overview');
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150'); // Default profile picture
  const [reservations, setReservations] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', checkIn: '2023-10-01', checkOut: '2023-10-05', status: 'Pending', paymentMethod: 'Gcash' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', checkIn: '2023-10-02', checkOut: '2023-10-06', status: 'Pending', paymentMethod: 'Gcash' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555', checkIn: '2023-10-03', checkOut: '2023-10-07', status: 'Accepted', paymentMethod: 'Cash' },
    { id: 4, name: 'Sosas Jhonvelle', email: 'sosas@gmail.com', phone: '123-456-7890', checkIn: '2023-10-01', checkOut: '2023-10-05', status: 'Pending', paymentMethod: 'Gcash' },
    { id: 5, name: 'Kent Dinlay', email: 'kent@gmail.com', phone: '987-654-3210', checkIn: '2023-10-02', checkOut: '2023-10-06', status: 'Accepted', paymentMethod: 'Cash' },
    { id: 6, name: 'Philip Elbambo', email: 'elbambo@gmail.com', phone: '555-555-5555', checkIn: '2023-10-03', checkOut: '2023-10-07', status: 'Pending', paymentMethod: 'Gcash' },
    { id: 7, name: 'Emily Davis', email: 'emily@example.com', phone: '123-456-7890', checkIn: '2023-10-04', checkOut: '2023-10-08', status: 'Pending', paymentMethod: 'Gcash' },
  ]);

  const handleLinkClick = (link) => {
    if (link === 'Log Out') {
      handleLogout();
    } else {
      setActiveLink(link);
    }
  };

  const handleLogout = () => {
    setIsLoading(true);
    // Simulate logout process
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };

  const handleReservationAction = (id, action) => {
    setReservations(prevReservations =>
      prevReservations.map(reservation =>
        reservation.id === id ? { ...reservation, status: action } : reservation
      )
    );
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'Overview':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pending Reservations */}
              <div className="p-4 rounded-lg shadow-lg bg-white">
                <h4 className="text-lg font-semibold mb-4">Pending Reservations</h4>
                {reservations.filter(res => res.status === 'Pending').length > 0 ? (
                  reservations
                    .filter(res => res.status === 'Pending')
                    .map(reservation => (
                      <div key={reservation.id} className="mb-4">
                        <p className="text-sm font-semibold">{reservation.name}</p>
                        <p className="text-sm text-gray-500">{reservation.email}</p>
                        <p className="text-sm text-gray-500">{reservation.phone}</p>
                        <p className="text-sm">
                          <span className="font-semibold">Check-in:</span> {reservation.checkIn}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Check-out:</span> {reservation.checkOut}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-sm text-gray-500">No pending reservations.</p>
                )}
              </div>

              {/* Accepted Reservations */}
              <div className="p-4 rounded-lg shadow-lg bg-white">
                <h4 className="text-lg font-semibold mb-4">Accepted Reservations</h4>
                {reservations.filter(res => res.status === 'Accepted').length > 0 ? (
                  reservations
                    .filter(res => res.status === 'Accepted')
                    .map(reservation => (
                      <div key={reservation.id} className="mb-4">
                        <p className="text-sm font-semibold flex items-center">
                          <span className="mr-2">{reservation.name}</span>
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </p>
                        <p className="text-sm text-gray-500">{reservation.email}</p>
                        <p className="text-sm text-gray-500">{reservation.phone}</p>
                        <p className="text-sm">
                          <span className="font-semibold">Check-in:</span> {reservation.checkIn}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Check-out:</span> {reservation.checkOut}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-sm text-gray-500">No accepted reservations.</p>
                )}
              </div>
            </div>
          </div>
        );
      case 'Reservations':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Reservations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="p-4 rounded-lg shadow-lg bg-white"
                >
                  <h4 className="text-lg font-semibold flex items-center">
                    {reservation.name}
                    {reservation.status === 'Accepted' && (
                      <svg className="w-4 h-4 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500">{reservation.email}</p>
                  <p className="text-sm text-gray-500">{reservation.phone}</p>
                  <div className="mt-4">
                    <p className="text-sm">
                      <span className="font-semibold">Check-in:</span> {reservation.checkIn}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Check-out:</span> {reservation.checkOut}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Status:</span> {reservation.status}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Payment Method:</span> {reservation.paymentMethod}
                    </p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    {reservation.status === 'Pending' && (
                      <>
                        <button
                          className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                          onClick={() => handleReservationAction(reservation.id, 'Accepted')}
                        >
                          Accept
                        </button>
                        <button
                          className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                          onClick={() => handleReservationAction(reservation.id, 'Pending')}
                        >
                          Set as Pending
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Customer Payment':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Payment</h3>
            <div className="overflow-x-auto mb-6">
              <h4 className="text-lg font-semibold mb-4">Gcash Payments</h4>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Phone</th>
                    <th className="py-2 px-4 border-b">Check-in</th>
                    <th className="py-2 px-4 border-b">Check-out</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.filter(res => res.paymentMethod === 'Gcash').map(reservation => (
                    <tr key={reservation.id} className={`${reservation.status === 'Pending' ? 'bg-yellow-100' : ''}`}>
                      <td className="py-2 px-4 border-b">{reservation.name}</td>
                      <td className="py-2 px-4 border-b">{reservation.email}</td>
                      <td className="py-2 px-4 border-b">{reservation.phone}</td>
                      <td className="py-2 px-4 border-b">{reservation.checkIn}</td>
                      <td className="py-2 px-4 border-b">{reservation.checkOut}</td>
                      <td className="py-2 px-4 border-b">{reservation.status}</td>
                      <td className="py-2 px-4 border-b">
                        {reservation.status === 'Pending' && (
                          <button
                            className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                            onClick={() => handleReservationAction(reservation.id, 'Accepted')}
                          >
                            Confirm
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <h4 className="text-lg font-semibold mb-4">Confirmed Reservations</h4>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Phone</th>
                    <th className="py-2 px-4 border-b">Check-in</th>
                    <th className="py-2 px-4 border-b">Check-out</th>
                    <th className="py-2 px-4 border-b">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.filter(res => res.status === 'Accepted').map(reservation => (
                    <tr key={reservation.id}>
                      <td className="py-2 px-4 border-b flex items-center">
                        <span className="mr-2">{reservation.name}</span>
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </td>
                      <td className="py-2 px-4 border-b">{reservation.email}</td>
                      <td className="py-2 px-4 border-b">{reservation.phone}</td>
                      <td className="py-2 px-4 border-b">{reservation.checkIn}</td>
                      <td className="py-2 px-4 border-b">{reservation.checkOut}</td>
                      <td className="py-2 px-4 border-b">{reservation.paymentMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <p>Welcome to the Staff Dashboard</p>;
    }
  };

  return (
    <div className="flex h-full rounded-lg bg-pink-200 text-gray-900">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
            <p className="text-lg font-semibold">Logging out...</p>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className=" rounded-lg bg-pink-300 p-4  shadow-lg flex flex-col items-center">
        {/* Profile Picture */}
        <div className="mb-6 flex items-center justify-center border-b-2 border-black pb-3 relative">
          <img
            src="https://cdn.dribbble.com/userupload/11076335/file/original-991912ab2ec877a6ca29ed851a2c2088.jpg?resize=400x0"
            alt="Profile"
            className="h-30 w-30 rounded-full cursor-pointer"
            onClick={() => document.getElementById('profileInput').click()}
          />
          <input
            id="profileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
          <div className="absolute bottom-0 left-0 bg-black rounded-full p-1 shadow-md cursor-pointer">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold m-6 flex items-center justify-center">Staff Only</h2>

        {/* Sidebar Links */}
        <ul>
          {['Overview', 'Reservations', 'Customer Payment', 'Log Out'].map((link) => (
            <li key={link} className="mb-3">
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg transition-all ${
                  activeLink === link
                    ? 'bg-blue-100 text-blue-900'
                    : 'hover:bg-gray-200'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                <span className="mr-5">
                  {link === 'Overview' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  )}
                  {link === 'Reservations' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  )}
                  {link === 'Customer Payment' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M7 18h10a2 2 0 002-2V8a2 2 0 00-2-2H7m6 12v-4m0 0v4m0-4h4m-4 0H7"></path>
                    </svg>
                  )}
                  {link === 'Log Out' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                  )}
                </span>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-semibold">Total Reservations</h3>
            <p className="text-2xl font-bold">{reservations.length}</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-semibold">Active Guests</h3>
            <p className="text-2xl font-bold">{reservations.filter(res => res.status === 'Accepted').length}</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
            <p className="text-2xl font-bold">{reservations.filter(res => res.status === 'Pending').length}</p>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4">{activeLink}</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
