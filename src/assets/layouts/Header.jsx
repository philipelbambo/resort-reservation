import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#8fc9d1]  to-[#942e6d] text-white rounded-2xl mb-5 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold">
                    Resort Reservation
                </div>
                <nav className="space-x-20 text-black text-lg">
                    {/* Navigation links removed */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
