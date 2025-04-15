import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Homepage = () => {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  const handleBookNow = () => {
    setIsBooking(true);
    setTimeout(() => {
      navigate("/book");
      setIsBooking(false);
    }, 1000); // Simulate a delay for booking
  };

  const handleReserveNow = () => {
    navigate("/book");
  };

  const resortFeatures = [
    {
      id: 1,
      title: "Standard Suite",
      description: "Experience our spacious rooms and suites with stunning ocean views, premium bedding, and modern amenities designed for your comfort.",
      image: "https://content3.jdmagicbox.com/comp/kodaikanal/p3/9999p4542.4542.220524121756.z3p3/catalogue/cloudy-mist-kodaikanal-ho-kodaikanal-rooms-on-rent-78jldoxlmf.jpg"
    },
    {
      id: 2,
      title: "The Gathering Nest cottage",
      description: "Enjoy our exclusive stretch of pristine white sand beach with crystal clear waters, perfect for swimming, sunbathing, and water sports.",
      image: "https://cdn.prod.website-files.com/59a30a523e53e400017c4ded/59ca1872b5fc1c000144b77b_delight01.jpg"
    },
    {
      id: 3,
      title: "Group Villa",
      description: "Savor exquisite cuisine at our award-winning restaurants featuring fresh local seafood and international dishes prepared by our master chefs.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241625097.jpg?k=0230cabacc6d6171abed86217c0b3c092434758310f8ad204628dd9d58aaae24&o=&hp=1"
    },
    {
      id: 4,
      title: "Beach Breeze Cottage",
      description: "Rejuvenate at our full-service spa offering massages, facials, and holistic treatments in a serene tropical setting.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/01/8d/dd/99/can-t-help-feeling-introspecti.jpg"
    },
    {
      id: 5,
      title: "Family suite",
      description: "Relax in our stunning infinity-edge pool overlooking the ocean, complete with swim-up bar, waterfalls, and luxurious cabanas for the ultimate poolside experience.",
      image: "https://bohol-sunside-resort.com/wp-content/uploads/apartment-5-peple-living-room.jpg"
    },
    {
      id: 6,
      title: "Beach view",
      description: "Wake up to breathtaking mountain vistas in this elegantly appointed suite featuring a private balcony and premium amenities.",
      image: "https://i2.wp.com/c1.staticflickr.com/3/2879/33918880552_69499c8c56_c.jpg?w=1200&ssl=1"
    },
    {
      id: 7,
      title: "Deluxe",
      description: "Private villa with direct lagoon access, perfect for romantic getaways with stunning sunset views from your own deck.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507116774.jpg?k=6a62ed271ca5d04f14a2a5cee2a174334e3e41998043831b01a6bc7361a785c9&o=&hp=1"
    }
  ];

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-0">
          <div className="text-2xl font-bold">
            <a className="hero-text" href="#">
            <span className="text-black text-4xl">𝒜𝓆𝓊𝒶𝓇𝒾𝓊𝓈 𝐵𝑒𝒶𝒸𝒽</span>

            </a>
          </div>
          <div className="text-2xl md:flex font-bold space-x-15 font-serif italic">
            <Link className="text-black hover:text-yellow-500" to="/">Home</Link>
            <Link className="text-black hover:text-yellow-500" to="/gallery">Gallery</Link>
            <Link className="text-black hover:text-yellow-500" to="/about">About Us</Link>
            <Link className="text-black hover:text-yellow-500" to="/contact">Contact/Info</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a className="text-gray-700 hover:text-yellow-500" href="#">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          alt="Beautiful resort with pool at sunset"
          className="w-full h-[700px] object-cover"
          height="800"
          src=" https://i.pinimg.com/originals/0b/46/94/0b4694c4bae13b92f07ef13a2e146eec.gif "
          width="1920"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold hero-text animate-fade-in mt-0">
            Aquarius Beach Resort
          </h1>
          <h1 className="text-4xl md:text-5xl font-extralight animate-fade-in mt-10 font-serif italic">
            Find your perfect escape where Ocean meets comfort.
          </h1>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-5 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl hover:text-blue-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xl hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Resort Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">Discover Aquarius Beach Resort</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {resortFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Dream Vacation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Aquarius Beach Resort today and experience paradise like never before.
          </p>
          <button
            onClick={handleReserveNow}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition font-semibold animate-bounce text-xl"
          >
            RESERVE NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
