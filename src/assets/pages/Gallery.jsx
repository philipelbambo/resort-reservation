import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const images = [
    "https://fastly.4sqi.net/img/general/600x600/73492860_gtOUsBwksoLufCtG4Gh0DgeIbTWSl7dpj2aUH5P_gUc.jpg",
    "https://i.ytimg.com/vi/XEHZtXfZL5Q/maxresdefault.jpg",
    "https://fastly.4sqi.net/img/general/600x600/73492860_W4Q9Twzr7HbDlT-T8ledmrB6ZUvulr-nop4zjUNzfzI.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxXftuBSpHHpDQDgdF31wtY_WZeFITRMGUXRTcFo4NP0wfVIcthLEY0N0gpclSAfItvo&usqp=CAU",
    "https://i2.wp.com/c1.staticflickr.com/3/2879/33918880552_69499c8c56_c.jpg?w=1200&ssl=1",
    "https://i0.wp.com/c1.staticflickr.com/3/2941/34035234066_88162f201b_c.jpg?w=1200&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBdr66xyP8Lj_YVOdyHCxQ61yZ7iLLws0JjhbjOvwkI36lPh4SEjB40V8Zpyz8_MMFxg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaGn3uHSTZYsUfYo1dnuMndhsLLw4BiReUsBzJB3d9C71OwSvUg2eq3KAXlf6l3xhqEk&usqp=CAU",
    "https://i.ytimg.com/vi/nXHsqakO-1Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMMLu5vL8L3B-Y6T-MyDAa7EyPqA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdppLQJmdsLEQZS5kQsCzEMSY_8V3eP7XZiQ&s",
    "https://fastly.4sqi.net/img/general/600x600/73492860_0gzq8_o2tkOh17zW1xHsKmv8UMPTf5AlMjYxgNINYQk.jpg",
    "https://fastly.4sqi.net/img/general/200x200/73492860_W4Q9Twzr7HbDlT-T8ledmrB6ZUvulr-nop4zjUNzfzI.jpg",
    "https://thumbs.dreamstime.com/z/two-beds-room-local-hotel-armenian-336971728.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/07/dc/cf/86/sapa-local-house.jpg",
    "https://beachresort.dawal.com.ph/wp-content/uploads/2021/10/PENTHOUSE-BEDROOM-scaled-1000x1000-1.jpg",
    "https://r1imghtlak.ibcdn.com/839aebe23e8611ed90e90a58a9feac02.jpg?&downsize=400:200&crop=400:200;0,2&output-format=webp",
    "https://r1imghtlak.ibcdn.com/95343ecf-b199-47fc-b087-c172923cab96.jpg?&downsize=400:200&crop=400:200;0,2&output-format=webp",
    "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_tg_details_seo/v3528802284/Hotel/00189296/113_L_4zghvg.jpg",
    "https://content.jdmagicbox.com/comp/gopalpur/b3/9999px680.x680.171206150436.d4b3/catalogue/seaview-resort-gopalpur-resorts-8cznz7ytwp.jpg",
    "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202408271127164514-79534550-ec5d-473b-b060-07e7cadd74e7.jpg?&downsize=330:180&crop=330:180;10,0&output-format=webp"
  ];

  const [animatedImages, setAnimatedImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = images.map((_, i) => ({
        isAnimated: true,
        delay: i % 4 * 0.15 // Stagger animation by rows
      }));
      setAnimatedImages(animated);
    }, 300);

    return () => clearTimeout(timer);
  }, [images.length]);

  const getAnimationType = (index) => {
    const types = ["fade-in", "slide-up", "zoom-in", "rotate"];
    return types[index % types.length];
  };

  const getAnimationClass = (index) => {
    if (!animatedImages[index]?.isAnimated) return "opacity-0";

    const type = getAnimationType(index);

    switch (type) {
      case "fade-in":
        return "animate-fadeIn opacity-100 transition-all duration-700 ease-out";
      case "slide-up":
        return "animate-slideUp opacity-100 transition-all duration-700 ease-out";
      case "zoom-in":
        return "animate-zoomIn opacity-100 transition-all duration-700 ease-out";
      case "rotate":
        return "animate-rotateIn opacity-100 transition-all duration-700 ease-out";
      default:
        return "opacity-100 transition-all duration-700 ease-out";
    }
  };

  const handleCloseClick = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 bg-opacity-60"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleCloseClick}
        className="absolute top-4 left-4 from-blue-900 bg-opacity-70 text-white p-4 rounded-full shadow-md hover:bg-opacity-90 hover:bg-white/30 transition-all z-20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L7 12L15 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Gallery Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-5xl font-extrabold font-serif mb-12 text-white text-center animate-fadeIn">
          Aquarius Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-xl bg-white transform transition-all duration-700 hover:scale-105 ${getAnimationClass(index)}`}
              style={{
                transitionDelay: `${animatedImages[index]?.delay || 0}s`,
              }}
            >
              <div className="p-3">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={src}
                    alt={`Resort view ${index + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="pt-2 pb-1">
                  <p className="text-sm text-gray-600 font-medium">Room View {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.7s ease-out forwards;
        }

        .animate-rotateIn {
          animation: rotateIn 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Gallery;