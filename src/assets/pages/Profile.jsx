import React from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../components/Breadcrumbs';
import Sidemenu from '../layouts/Sidemenu';

const Profile = () => {
  // Replace this with actual data fetching logic, e.g., from an API
  const adminProfile = {
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro1CrNvxykxDQFNv4kgIOYO3VghtaAld4sUy2_-atrgxnwmTQFwpIBsKLc7GsQWJi3hc&usqp=CAU', // Update with actual path or URL
    firstName: 'Moymoy',
    email: 'moymoy@gmail.com',
    gender: 'Male',
    bio: 'Im the owner of the fish farm I can eat ten milk fish even Im full Because thats my favorite food ~Moymoy.',
  };

  const breadcrumbLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Manage Reservations', path: '/manage-reservations' },
  ];

  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-full mx-auto mt-5">
            <Header />
      <div className="flex w-full h-full gap-7">
        <div className="">
          <Sidemenu />
        </div>
        <div className="w-full">
          <Breadcrumb title="" links={breadcrumbLinks} />
          <div className='w-full flex flex-col items-center justify-center mt-30'>
            <img
              src={adminProfile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">
              {adminProfile.firstName} {adminProfile.lastName}
            </h2>
            <p className="text-gray-600 text-center mb-4">{adminProfile.email}</p>
            <div className="text-center mb-4">
              <span className="font-semibold">Gender:</span> {adminProfile.gender}
            </div>
            <p className="text-gray-700 text-center">{adminProfile.bio}</p>
          </div>
          </div>
          </div>
  
    </div>
  );
};

export default Profile;
