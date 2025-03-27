import React, { useState } from 'react';

const StaffDashboard = () => {
  const [activeLink, setActiveLink] = useState('Overview');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', checkIn: '2023-10-01', checkOut: '2023-10-05', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', checkIn: '2023-10-02', checkOut: '2023-10-06', status: 'Pending' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555', checkIn: '2023-10-03', checkOut: '2023-10-07', status: 'Accepted' },
    { id: 4, name: 'Sosas Jhonvelle', email: 'sosas@gmail.com', phone: '123-456-7890', checkIn: '2023-10-01', checkOut: '2023-10-05', status: 'Pending' },
    { id: 5, name: 'Kent Dinlay', email: 'kent@gmail.com', phone: '987-654-3210', checkIn: '2023-10-02', checkOut: '2023-10-06', status: 'Accepted' },
    { id: 6, name: 'Philip Elbambo', email: 'elbambo@gmail.com', phone: '555-555-5555', checkIn: '2023-10-03', checkOut: '2023-10-07', status: 'Rejected' },
  ]);

  const handleLinkClick = (link) => {
    if (link === 'Log Out') {
      handleLogout();
    } else {
      setActiveLink(link);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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

  const renderContent = () => {
    switch (activeLink) {
      case 'Overview':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pending Reservations */}
              <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
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
              <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <h4 className="text-lg font-semibold mb-4">Accepted Reservations</h4>
                {reservations.filter(res => res.status === 'Accepted').length > 0 ? (
                  reservations
                    .filter(res => res.status === 'Accepted')
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
                  className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}
                >
                  <h4 className="text-lg font-semibold">{reservation.name}</h4>
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
                          onClick={() => handleReservationAction(reservation.id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Dark Mode':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Dark Mode</h3>
            <p>Toggle dark mode on or off.</p>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4"
            >
              {darkMode ? 'Turn Off Dark Mode' : 'Turn On Dark Mode'}
            </button>
          </div>
        );
      default:
        return <p>Welcome to the Staff Dashboard</p>;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
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
      <div className={`w-1/5 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 shadow-lg`}>
        <h2 className="text-2xl font-bold mb-6">Staff Dashboard</h2>

        {/* User Profile Section */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">😎</div>
          <div className="ml-3">
            <p className="font-semibold">Jm Dadula</p>
            <p className="text-sm text-gray-500">Staff only</p>
          </div>
        </div>

        {/* Sidebar Links */}
        <ul>
          {['Overview', 'Reservations', 'Dark Mode', 'Log Out'].map((link) => (
            <li key={link} className="mb-3">
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg transition-all ${
                  activeLink === link
                    ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-900'}`
                    : `${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                <span className="mr-2">
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
                  {link === 'Dark Mode' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m6.364 1.364l1.414-1.414M21 12h-1M4.636 20.636l1.414-1.414M3 12h1m5.364-6.364l1.414-1.414M12 21v-1M17.636 4.636l1.414-1.414"></path>
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
        <h1 className="text-3xl font-bold mb-6">Staff Only</h1>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold">Total Reservations</h3>
            <p className="text-2xl font-bold">{reservations.length}</p>
          </div>
          <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold">Active Guests</h3>
            <p className="text-2xl font-bold">{reservations.filter(res => res.status === 'Accepted').length}</p>
          </div>
          <div className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
            <p className="text-2xl font-bold">{reservations.filter(res => res.status === 'Pending').length}</p>
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <h2 className="text-2xl font-bold mb-4">{activeLink}</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;