import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#383e92] to-[#942e6d] text-white rounded-lg mb-5 shadow-md top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-6">
                <div className="text-xl font-bold italic">
                    Resort Reservation
                </div>
                <div className="flex items-center space-x-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro1CrNvxykxDQFNv4kgIOYO3VghtaAld4sUy2_-atrgxnwmTQFwpIBsKLc7GsQWJi3hc&usqp=CAU" // Replace with the actual path to your profile image
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-sm">Moymoy</span> {/* Replace with the actual user name */}
                </div>
            </div>
        </header>
    );
};

export default Header;
