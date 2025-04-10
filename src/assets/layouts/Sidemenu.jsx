import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Sidemenu = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    "https://cdn.dribbble.com/userupload/11076335/file/original-991912ab2ec877a6ca29ed851a2c2088.jpg?resize=400x0"
  );
  const navigate = useNavigate();

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleProfilePictureClick = () => {
    document.getElementById('profilePictureInput').click();
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

  return (
    <aside className={`h-full ${isCollapsed ? 'w-[80px]' : 'w-[400px]'} bg-gradient-to-b from-[#4e4f86] via-[#a7abe6] via-[#6488ff] to-[#375792] min-h-screen rounded-3xl shadow-lg p-[20px] text-[20px] transition-all duration-300`}>
      <div className={`p-5 border-b border-sky-200 flex flex-col items-center relative ${isCollapsed ? 'px-2' : ''}`}>
        <div className='flex justify-end w-full'>
          <Menu 
            size={30} 
            className='cursor-pointer hover:text-blue-400' 
            onClick={toggleSidebar}
          />
        </div>
        {!isCollapsed && (
          <>
            <div className="relative w-40 h-40" onClick={handleProfilePictureClick}>
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="rounded-full w-full h-full object-cover cursor-pointer"
              />
              <i className="fas fa-user-circle text-black absolute bottom-0 left-0 m-auto text-2xl"></i>
              <input
                id="profilePictureInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-xl font-bold text-white">Rene Ociones</h2>
              <p className="text-sm text-white">Bio: Im the owner of the fish farm I can eat ten milk
                                                 fish even Im full Because thats my favorite food ~Moymoy.</p>
              <p className="text-sm text-white">Gender: Male</p>
            </div>
          </>
        )}
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      {!isCollapsed && (
        <div className="text-center text-white mt-5">
          <h1 className="text-2xl font-bold">Resort Management</h1>
          <p className="text-sm">Welcome Admin</p>
        </div>
      )}
      <nav className="mt-15">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className={`block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white ${isCollapsed ? 'flex justify-center' : ''}`}
            >
              <button className={`w-full text-left ${isCollapsed ? 'flex justify-center' : ''}`}>
                <i className="fas fa-chart-line"></i> {!isCollapsed && 'Dashboard'}
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/manage-reservations"
              className={`block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white ${isCollapsed ? 'flex justify-center' : ''}`}
            >
              <button className={`w-full text-left ${isCollapsed ? 'flex justify-center' : ''}`}>
                <i className="fas fa-calendar-alt"></i> {!isCollapsed && 'Manage Reservation'}
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-payment-dashboard"
              className={`block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white ${isCollapsed ? 'flex justify-center' : ''}`}
            >
              <button className={`w-full text-left ${isCollapsed ? 'flex justify-center' : ''}`}>
                <i className="fas fa-credit-card"></i> {!isCollapsed && 'Customer Payment'}
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-room-availability"
              className={`block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white ${isCollapsed ? 'flex justify-center' : ''}`}
            >
              <button className={`w-full text-left ${isCollapsed ? 'flex justify-center' : ''}`}>
                <i className="fas fa-door-open"></i> {!isCollapsed && 'Room Availability'}
              </button>
            </Link>
          </li>
          <li>
            <button
              className={`block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 w-full text-left text-white ${isCollapsed ? 'flex justify-center' : ''}`}
              onClick={toggleSettings}
            >
              <i className="fas fa-cog"></i> {!isCollapsed && 'Settings'}
            </button>
            {isSettingsOpen && !isCollapsed && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/profile"
                    className="block p-5 hover:bg-sky-200 hover:text-sky-800 rounded-lg transition duration-300 text-white"
                  >
                    <i className="fas fa-user"></i> Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="block p-5 hover:bg-sky-200  hover:text-sky-800 cursor-pointer rounded-lg transition duration-300 w-full text-left text-white"
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
