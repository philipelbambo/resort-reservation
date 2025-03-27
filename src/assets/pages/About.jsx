import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function AboutUs() {
  const navigate = useNavigate(); // Hook for navigation

  const handleClose = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <section className="bg-blue-600 py-12 px-6 text-center text-white relative">
      {/* Close text on the left side */}
      <button
        onClick={handleClose}
        className="absolute left-6 top-6 text-white text-xl font-semibold hover:text-gray-200 transition"
        aria-label="Close"
      >
        close {/* This is the word "close" in lowercase */}
      </button>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold font-serif mb-4">About Us</h2>
        <p className="text-xl font-light font-mono mb-6">
          Aquarious Beach Resort Booking System makes reserving your ideal beach getaway simple and convenient.
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Our user-friendly platform allows you to explore accommodations, check available facilities, and secure your booking effortlessly. At Aquarious Beach Resort, we offer breathtaking ocean views, modern comforts, and outstanding hospitality.
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Book your dream vacation today and enjoy a refreshing coastal retreat!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
