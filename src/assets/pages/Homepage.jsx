import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLock, FaTimes } from "react-icons/fa";

const DynamicIsland = ({ message }) => {
  return (
    <div className="dynamic-island bg-black text-white px-4 py-2 rounded-full shadow-lg fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      {message}
    </div>
  );
};

const Homepage = ({ user }) => {
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [islandMessage, setIslandMessage] = useState("");

  const isAdmin = user && user.role === 'admin';

  // Beach resort video URL - you'll need to replace this with your actual video URL
  const beachVideoUrl = " https://cdn.pixabay.com/video/2019/06/19/24541-343454486_large.mp4  ";

  const handleBookNow = () => {
    setIslandMessage("Booking in progress...");
    setIsBooking(true);
    setTimeout(() => {
      navigate("/book");
      setIsBooking(false);
      setIslandMessage("");
    }, 1000);
  };

  const handleReserveNow = () => {
    navigate("/book");
  };

  const resortFeatures = [
    {
      id: 1,
      title: "Standard Suite",
      description: "Experience our spacious rooms and suites with stunning ocean views, premium bedding, and modern amenities designed for your comfort.",
      image: "https://content3.jdmagicbox.com/comp/kodaikanal/p3/9999p4542.4542.220524121756.z3p3/catalogue/cloudy-mist-kodaikanal-ho-kodaikanal-rooms-on-rent-78jldoxlmf.jpg",
      interiorImages: [
        "https://ccc-delivery.sgp1.digitaloceanspaces.com/fundacion/2025-02-17/cuvi-2-a-c5229.JPG",
        "https://media-cdn.tripadvisor.com/media/photo-s/06/20/75/da/fundacion-pacita-batanes.jpg"
      ]
    },
    {
      id: 2,
      title: "The Gathering Nest cottage",
      description: "Enjoy our exclusive stretch of pristine white sand beach with crystal clear waters, perfect for swimming, sunbathing, and water sports.",
      image: "https://cdn.prod.website-files.com/59a30a523e53e400017c4ded/59ca1872b5fc1c000144b77b_delight01.jpg",
      interiorImages: [
        "https://images.dwell.com/photos/6063391372700811264/7005940649537077248/large.jpg",
        "https://www.vmcdn.ca/f/files/timminstoday/spotlight-images/diggs-dwellings/adobestock_178086089.jpeg;w=960"
      ]
    },
    {
      id: 3,
      title: "Group Villa",
      description: "Savor exquisite cuisine at our award-winning restaurants featuring fresh local seafood and international dishes prepared by our master chefs.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241625097.jpg?k=0230cabacc6d6171abed86217c0b3c092434758310f8ad204628dd9d58aaae24&o=&hp=1",
      interiorImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWg2EofMSnoZ96JmkiaW_fuWL6Pm0Kgy_QcA&s",
        "https://laurau.com/wp-content/uploads/outside-design-laura-u.jpg"
      ]
    },
    {
      id: 4,
      title: "Beach Breeze Cottage",
      description: "Rejuvenate at our full-service spa offering massages, facials, and holistic treatments in a serene tropical setting.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/01/8d/dd/99/can-t-help-feeling-introspecti.jpg",
      interiorImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU92rOnWqD24RdRqSNt0sS5wakPk7uPaOKlw&s",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d3/74/1e/pasacao-beach.jpg?w=200&h=-1&s=1"
      ]
    },
    {
      id: 5,
      title: "Family suite",
      description: "Relax in our stunning infinity-edge pool overlooking the ocean, complete with swim-up bar, waterfalls, and luxurious cabanas for the ultimate poolside experience.",
      image: "https://bohol-sunside-resort.com/wp-content/uploads/apartment-5-peple-living-room.jpg",
      interiorImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxqurOvgdtlXeVswN7Tr9tE0eCGdIbWHO7g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgS8kQNc80CRsanbesjBY95m9k9LIIE6xk8nTZSW0e2Re0M2Ik1upyVsze7rBBeuwmVk&usqp=CAU"
      ]
    },
    {
      id: 6,
      title: "Beach view",
      description: "Wake up to breathtaking mountain vistas in this elegantly appointed suite featuring a private balcony and premium amenities.",
      image: "https://i2.wp.com/c1.staticflickr.com/3/2879/33918880552_69499c8c56_c.jpg?w=1200&ssl=1",
      interiorImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG1e-uNMhmUY46JzbFM4h0r94e0hGaurNlQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5nM5YfVlbyPNbuHXFrpiZS_V3Fo41lmQCMMjgQf2ACJUeJHmTQTdbk5gIUi6nI1Nauc&usqp=CAU"
      ]
    },
    {
      id: 7,
      title: "Deluxe",
      description: "Private villa with direct lagoon access, perfect for romantic getaways with stunning sunset views from your own deck.",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507116774.jpg?k=6a62ed271ca5d04f14a2a5cee2a174334e3e41998043831b01a6bc7361a785c9&o=&hp=1",
      interiorImages: [
        "https://media.architecturaldigest.com/photos/57361b001341a7ff7bc5e70a/master/w_320%2Cc_limit/indoor-outdoor-04.jpg",
        "https://www.thespruce.com/thmb/y3nXpMGMdaWbpyho4_rIRD2q7z0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BreezeGiannasio_ChoHome_MeghanBobPhoto_Patio_HR-da69b73215ad46cbbb0be2f795e1bb88.jpg"
      ]
    },
    {
      id: 8,
      title: "Twin Room",
      description: "Our premier room category, these rooms have a large private balcony with a commanding view of our pool, the beach, and the ocean. Fully air-conditioned with mini-fridge, free WiFi, LED TV, tea/coffee facilities, room safe, and other amenities. Complimentary breakfast included if you book directly.",
      image: "https://beachresort.dawal.com.ph/wp-content/uploads/2021/10/SINGLE-UNIT-BEDROOM-OPTION-1-scaled.jpg",
      interiorImages: [
        "https://beachresort.dawal.com.ph/wp-content/uploads/2021/10/MULTIPLEX-POOL-AREA-BEDROOM-2ND-FLOOR.jpg",
        "https://webbox.imgix.net/images/lpwdylbdbknlfslw/24952cf4-52c6-470a-985e-9ee6fc20ee96.jpg?auto=format,compress&fit=crop&crop=entropy"
      ]
    },
    {
      id: 9,
      title: "Double Room ",
      description: "Our largest rooms, these rooms are able to accommodate up to 4 adults or 2 adults and 2 children. Both ground floor and 2nd floor rooms are available. Fully air-conditioned with mini-fridge, free WiFi, LED TV, tea/coffee facilities, room safe, and other amenities. Complimentary breakfast included if you book directly.",
      image: "https://www.boholbeachclub.com.ph/assets/room-01.jpg",
      interiorImages: [
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg",
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg"
      ]
    },
    {
      id: 10,
      title: "Master Bedroom",
      description: "These smaller rooms are comfortable for two adults and are fully air-conditioned with mini-fridge, free WiFi, LED TV, tea/coffee facilities, room safe, and other amenities. Complimentary breakfast included if you book through this website. Both ground floor and 2nd floor rooms are available.",
      image: "https://www.boholbeachclub.com.ph/assets/rates-042.jpg",
      interiorImages: [
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg",
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg"
      ]
    },
    {
      id: 11,
      title: "Budget Room",
      description: "Basic double room, newly refurbished and very comfortable for two adults, with full air conditioning, free WiFi, tea/coffee facilities, and other amenities. Complimentary breakfast included if you book directly. The bed is a queen size bed but is not splitable. These rooms are all ground floor, with limited windows.",
      image: "https://beachresort.dawal.com.ph/wp-content/uploads/2021/10/Poolside-Room-e1460112779921.jpg",
      interiorImages: [
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg",
        "https://www.aquariusfiji.com/wp-content/uploads/2024/07/Deluxe-400-wide-view.jpg"
      ]
    }
  ];

  const filteredFeatures = resortFeatures.filter(feature =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-4 relative">
          <div className="text-2xl font-bold">
            <a className="hero-text" href="#">
              <span className="text-black text-4xl">𝒜𝓆𝓊𝒶𝓇𝒾𝓊𝓈 𝐵𝑒𝒶𝒸𝒽</span>
            </a>
          </div>
          <div className="text-2xl md:flex font-bold space-x-20 font-serif italic">
            <Link className="text-black hover:text-yellow-500" to="/">Home</Link>
            <Link className="text-black hover:text-yellow-500" to="/gallery">Gallery</Link>
            <Link className="text-black hover:text-yellow-500" to="/about">About Us</Link>
            <Link className="text-black hover:text-yellow-500" to="/contact">Contact/Info</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-yellow-500 group relative">
                <FaLock size={30} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Admin Panel
                </span>
              </Link>
            )}
          </div>
          {islandMessage && <DynamicIsland message={islandMessage} />}
        </div>
      </nav>

      {/* Video Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <video 
          className="w-full h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={beachVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
          <h1 className="text-4xl md:text-6xl font-bold hero-text animate-fade-in mt-0">
            Aquarius Beach Resort
          </h1>
          <h1 className="text-4xl md:text-5xl font-extralight animate-fade-in mt-10 font-serif italic">
            Find your perfect escape where Ocean meets comfort.
          </h1>
        </div>
      </div>

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

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">Discover Aquarius Beach Resort</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedRoom(feature)}
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

      {selectedRoom && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="max-w-4xl w-full p-4 bg-white rounded-lg relative">
            <button
              className="text-black text-2xl absolute top-4 right-4 bg-gray-200 rounded-full p-2"
              onClick={() => setSelectedRoom(null)}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedRoom.title}</h3>
            <p className="text-gray-600 mb-4">{selectedRoom.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedRoom.interiorImages.map((image, index) => (
                <img key={index} src={image} alt={`Interior ${index + 1}`} className="w-full h-auto rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;