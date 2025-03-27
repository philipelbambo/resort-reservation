import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidemenu = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLogout = () => {
    setIsLoading(true);
    // Simulate a delay for the logout process
    setTimeout(() => {
      // Perform any logout actions here, such as clearing tokens or user data
      // Then navigate to the login page
      navigate('/login');
    }, 1000); // 1 second delay
  };

  return (
    <aside className="w-[400px] bg-gradient-to-b from-[#a9aadd] via-[#b9a8e7] via-[#93aaf7] to-[#a8d2e2] min-h-screen rounded-3xl shadow-lg p-[20px] text-[20px]">
      <div className="p-5 text-center border-b border-sky-200">
        <img src="https://i.cbc.ca/1.7414131.1734552099!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_1180/chicago-the-cat-calgary-humane-society.JPG?im=Resize%3D780" alt="Profile Picture" className="mx-auto rounded-full" />
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <div className="text-center text-white mt-5">
        <h1 className="text-2xl font-bold">Resort Management</h1>
        <p className="text-sm">Welcome Admin</p>
      </div>
      <nav className="mt-5">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="block p-3 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
            >
              <button className="w-full text-left">
                <i className="fas fa-chart-line"></i> Dashboard
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/manage-reservations"
              className="block p-3 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
            >
              <button className="w-full text-left">
                <i className="fas fa-calendar-alt"></i> Manage Reservation
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-payment-dashboard"
              className="block p-3 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
            >
              <button className="w-full text-left">
                <i className="fas fa-credit-card"></i> Customer Payment
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-room-availability"
              className="block p-3 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
            >
              <button className="w-full text-left">
                <i className="fas fa-door-open"></i> Room Availability
              </button>
            </Link>
          </li>
          <li>
            <button
              className="block p-3 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 w-full text-left text-white"
              onClick={toggleSettings}
            >
              <i className="fas fa-cog"></i> Settings
            </button>
            {isSettingsOpen && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/profile"
                    className="block p-2 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
                  >
                    <i className="fas fa-user"></i> Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="block p-2 hover:bg-sky-200  hover:text-sky-800 cursor-pointer rounded-lg transition duration-300 w-full text-left text-white"
                    onClick={handleLogout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Logging Out...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-out-alt"></i> Log Out
                      </>
                    )}
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidemenu;
