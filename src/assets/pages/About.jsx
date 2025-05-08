import { useState } from 'react';
import { Anchor, Compass, Award, Users, Clock, Sun, ChevronLeft } from 'lucide-react';

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleBackClick = () => {
    // Go back to the previous page immediately
    window.history.back();
  };

  const features = [
    {
      id: 'location',
      icon: <Anchor className="w-10 h-10 mb-3" />,
      title: "Pristine Beachfront",
      description: "Nestled on the pristine golden shores of Palawan, with crystal-clear turquoise waters just steps from your accommodation."
    },
    {
      id: 'experience',
      icon: <Compass className="w-10 h-10 mb-3" />,
      title: "Authentic Experience",
      description: "Immerse yourself in Filipino culture with our curated local experiences, from traditional cuisine to artisan crafts."
    },
    {
      id: 'service',
      icon: <Award className="w-10 h-10 mb-3" />,
      title: "Award-Winning Service",
      description: "Our dedicated staff provides personalized service recognized with multiple hospitality excellence awards."
    },
    {
      id: 'sustainability',
      icon: <Sun className="w-10 h-10 mb-3" />,
      title: "Eco-Friendly Resort",
      description: "Committed to sustainable tourism with solar power, water conservation, and plastic-free initiatives."
    }
  ];

  const contentSections = {
    overview: (
      <div className="space-y-6 text-left">
        <p className="text-lg">
          Welcome to Aquarius Beach Resort – where paradise meets luxury on the stunning shores of the Philippines. Established in 2010, our resort has become a premier destination for travelers seeking an authentic tropical escape combined with world-class amenities.
        </p>
        <p className="text-lg">
          Our beachfront sanctuary spans 12 acres of lush tropical gardens, white sand beaches, and crystal-clear waters. Each of our 75 rooms, suites, and private villas is designed to immerse you in natural beauty while providing modern comforts and Filipino hospitality.
        </p>
        <p className="text-lg">
          At Aquarius, we believe in creating memorable experiences that connect you with the natural wonders of the Philippines while ensuring minimal environmental impact. Our sustainable practices have earned us recognition as a Green Globe certified resort.
        </p>
      </div>
    ),
    
    story: (
      <div className="space-y-6 text-left">
        <p className="text-lg">
          The story of Aquarius Beach Resort began with a dream to create a sanctuary that honors the extraordinary beauty of the Philippine archipelago while providing an unparalleled guest experience.
        </p>
        <p className="text-lg">
          Founded by the Mendoza family, local entrepreneurs with a passion for hospitality, Aquarius was built with a profound respect for the land and local culture. What started as a small beachfront property has evolved into an award-winning resort while maintaining its authentic Filipino character.
        </p>
        <p className="text-lg">
          Each expansion and renovation has been guided by our commitment to sustainability, community development, and preserving the natural ecosystem that makes our location so special. Today, we're proud to welcome guests from around the world to experience the magic that is Aquarius.
        </p>
      </div>
    ),
    
    team: (
      <div className="space-y-6 text-left">
        <p className="text-lg">
          Our team is the heart and soul of Aquarius Beach Resort. Led by General Manager Maria Santos, a hospitality veteran with over 20 years of experience, our staff consists of passionate professionals dedicated to creating extraordinary experiences.
        </p>
        <p className="text-lg">
          From our expert chefs who craft delicious Filipino-inspired cuisine to our activities coordinators who showcase the best of local culture and natural wonders, every team member contributes to the Aquarius experience.
        </p>
        <p className="text-lg">
          Over 80% of our staff are from nearby communities, reflecting our commitment to supporting local employment and sharing authentic Filipino hospitality. Their warmth, attention to detail, and genuine care for our guests consistently earn us outstanding reviews.
        </p>
      </div>
    )
  };

  return (
    <section className="bg-gradient-to-b from-blue-500 to-teal-400 text-white relative min-h-screen overflow-hidden">
      {/* Background overlay with water texture */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Back button */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all z-10"
        aria-label="Go back to homepage"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Discover Aquarius Beach Resort</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Your sanctuary of serenity nestled on the pristine shores of the Philippines
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Content Tabs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                activeSection === 'overview' ? 'bg-white text-blue-600' : 'bg-white/20'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection('story')}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                activeSection === 'story' ? 'bg-white text-blue-600' : 'bg-white/20'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                activeSection === 'team' ? 'bg-white text-blue-600' : 'bg-white/20'
              }`}
            >
              Our Team
            </button>
          </div>
          
          <div className="transition-all duration-300">
            {contentSections[activeSection]}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience Paradise?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition-all">
              Book Your Stay
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              View Accommodations
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Aquarius Beach Resort. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Open 24/7</span>
            <Users className="w-4 h-4 ml-4" />
            <span className="text-sm">+63 (45) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
}