import React from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../components/Breadcrumbs';
import Sidemenu from '../layouts/Sidemenu';

const Profile = () => {
  // Replace this with actual data fetching logic, e.g., from an API
  const adminProfile = {
    profilePicture: 'https://preview.redd.it/this-might-be-my-favorite-cat-pic-that-ive-ever-taken-had-v0-0yjbxdb4bofd1.jpeg?auto=webp&s=82ae3586830630100b0587602ced18182a291a91', // Update with actual path or URL
    firstName: 'Momoy',
    lastName: 'Totoro',
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
    <div className="p-8 bg-white shadow-md rounded-lg max-w-full mx-auto mt-10">
            <Header />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Sidemenu />
        </div>
        <div className="col-span-9">
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
