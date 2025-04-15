import React from "react";
import { useNavigate } from "react-router-dom";

const ResortContact = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/0b/46/94/0b4694c4bae13b92f07ef13a2e146eec.gif')] bg-cover bg-center blur-sm"
      ></div>

      {/* Semi-transparent overlay (optional, darkens the image) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Close Button (Top-Left) */}
      <a href="/" className="absolute top-4 left-4 bg-black text-white text-3xl p-4 rounded-full shadow-md hover:bg-gray-300 transition-all">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L7 12L15 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>

      {/* Contact Card (sharp, no blur) */}
      <div className="w-full max-w-4xl p-20 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-gray-300 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">Resort Owner</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="text-gray-700 space-y-5 text-lg leading-relaxed">
            <p><span className="text-2xl font-bold text-gray-900">Owner Name:</span> Rene Ociones</p>
            <p><span className="text-2xl font-bold text-gray-900">Phone:</span> 09550057231</p>
            <p><span className="text-2xl font-bold text-gray-900">Email:</span> ReneOciones@gmail.com</p>
            <p><span className="text-2xl font-bold text-gray-900">Experience:</span> 15 years Manager at this resort</p>
            <p><span className="text-2xl font-bold text-gray-900">Address:</span> Aquarius Beach Resort, Villanueva, Misamis Oriental, Philippines</p>
            <p className="italic text-xl text-gray-800 font-semibold">"Aquarius is in the details."</p>
          </div>

          {/* Map Section */}
          <div className="h-full w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-full border-2 border-gray-300">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?q=Aquarius+Beach+Resort+Villanueva+Misamis+Oriental&z=15&output=embed"
                title="Aquarius Beach Resort Location"
              >
              </iframe>
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              <a
                href="https://maps.google.com/?q=Aquarius+Beach+Resort+Villanueva+Misamis+Oriental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                View larger map
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortContact;
