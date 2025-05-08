  import React, { useState, useEffect } from "react";

  const VillanuevaMap = () => {
    const [mapType, setMapType] = useState("satellite");
    const [zoom, setZoom] = useState(15);
    const [isFullscreen, setIsFullscreen] = useState(true);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    
    const mapLocation = "Villanueva,Misamis+Oriental,Philippines";
    const resortLocation = "Aquarius+Beach+Resort+Villanueva+Misamis+Oriental";
    const videoBackground = "https://cdn.pixabay.com/video/2019/06/19/24541-343454486_large.mp4";

    const mapUrl = `https://maps.google.com/maps?q=${resortLocation}&z=${zoom}&t=${mapType}&output=embed`;
    
    // Function to handle the back action
    const handleBack = () => {
      // You can replace this with your actual back navigation logic
      // For example, if you're using react-router: history.goBack()
      // Or window.history.back() for simple cases
      window.history.back();
      // If you're not using routing, you might want to set a state or call a parent component function
    };
    
    useEffect(() => {
      // Preload the video
      const videoElement = document.createElement('video');
      videoElement.src = videoBackground;
      videoElement.onloadeddata = () => setIsVideoLoaded(true);
    }, []);
    
    return (
      <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'}`}>
        {/* Video Background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="p-4 bg-blue-600 bg-opacity-80 text-white flex justify-between items-center relative z-10">
          <div className="flex items-center">
            {/* Back button */}
            <button 
              onClick={handleBack}
              className="mr-3 p-1 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            
            <div>
              <h2 className="text-2xl font-bold">Villanueva, Misamis Oriental - Aquarius Beach Resort</h2>
              <p className="text-sm opacity-90">Interactive HD Map View</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-blue-700 rounded hover:bg-blue-800 transition-colors flex items-center"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 p-2 bg-gray-800 bg-opacity-70 border-b border-gray-700 text-sm text-white relative z-10">
          <div className="flex items-center">
            <label className="mr-2 font-medium">Type:</label>
            <select 
              value={mapType} 
              onChange={(e) => setMapType(e.target.value)}
              className="px-2 py-1 border rounded bg-gray-700 text-white text-sm border-gray-600"
            >
              <option value="roadmap">Road Map</option>
              <option value="satellite">Satellite</option>
              <option value="hybrid">Hybrid</option>
              <option value="terrain">Terrain</option>
            </select>
          </div>
          
          <div className="flex items-center ml-2">
            <label className="mr-2 font-medium">Zoom:</label>
            <input 
              type="range" 
              min="10" 
              max="18" 
              value={zoom} 
              onChange={(e) => setZoom(parseInt(e.target.value))}
              className="w-20 accent-blue-500"
            />
            <span className="ml-1">{zoom}</span>
          </div>
        </div>
        
        <div className={`relative ${isFullscreen ? 'flex-grow' : 'h-80'} z-10`}>
          <iframe
            className="absolute inset-0 w-full h-full border-0 rounded shadow-lg"
            frameBorder="0"
            scrolling="no"
            src={mapUrl}
            title="Villanueva, Misamis Oriental Map"
            allowFullScreen
          />
        </div>
        
        <div className="p-4 bg-gray-900 bg-opacity-80 border-t border-gray-700 text-white relative z-10">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h3 className="font-bold">Aquarius Beach Resort</h3>
              <p className="text-gray-300 text-sm">Villanueva, Misamis Oriental, Philippines</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${resortLocation}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default VillanuevaMap;