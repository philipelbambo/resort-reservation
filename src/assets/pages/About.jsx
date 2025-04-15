import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function AboutUs() {
  const navigate = useNavigate(); // Hook for navigation

  const handleClose = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <section className="bg-blue-600 bg-[url('https://i.pinimg.com/originals/0b/46/94/0b4694c4bae13b92f07ef13a2e146eec.gif')] bg-cover bg-center py-12 px-6 text-center text-white relative min-h-screen flex flex-col">
      <a
        href="/"
        className="absolute top-4 left-4 bg-black text-white text-3xl p-4 rounded-full shadow-md hover:bg-gray-300 transition-all"
        aria-label="Go back to homepage"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L7 12L15 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <div className="max-w-4xl mx-auto flex-grow">
        <h2 className="text-5xl font-extrabold font-serif mb-4">About Us</h2>
        <p className="text-xl font-light font-mono mb-6">
          Aquarius Beach Resort Booking System makes reserving your ideal beach getaway simple and convenient.
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Our user-friendly platform allows you to explore accommodations, check available facilities, and secure your booking effortlessly. At Aquarius Beach Resort, we offer breathtaking ocean views, modern comforts, and outstanding hospitality.
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Book your dream vacation today and enjoy a refreshing coastal retreat!
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Nestled on the pristine shores of the Philippines, Aquarius Beach Resort is your gateway to paradise. Our resort is designed to provide a serene and luxurious experience, with a range of amenities to cater to all your needs.
        </p>
        <p className="text-xl font-light font-mono mb-6">
          Whether you're looking for a romantic getaway, a family vacation, or an adventure-filled trip, Aquarius Beach Resort has something for everyone. Our dedicated staff is committed to ensuring your stay is memorable and hassle-free.
        </p>
        <p>

        </p>
        <p className="text-xl font-light font-mono mb-6">
          Explore our beautifully landscaped gardens, indulge in delicious cuisine at our on-site restaurants, or simply relax by the pool. With a variety of activities and excursions available, you'll never run out of things to do.
        </p>
      </div>

      <button
        className="mt-6 px-6 py-3  text-white text-lg font-semibold rounded-lg  transition"
        aria-label="Learn more about Aquarius Beach Resort"
      >
        Learn More
      </button>
    </section>
  );
}
