import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function AboutUs() {
  const navigate = useNavigate(); // Hook for navigation

  const handleClose = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <section className="bg-blue-600 bg-[url('https://i.pinimg.com/originals/47/f6/9b/47f69bc96c7b16f0429eca8f36eeca06.gif')] bg-cover bg-center py-12 px-6 text-center text-white relative">
      
      <a href="/" className="absolute top-4 left-4 bg-black text-white text-3xl p-4 rounded-full shadow-md hover:bg-gray-300 transition-all">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L7 12L15 19" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>

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
