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
  
    return (
      <section className="bg-blue-700 py-12 px-6 text-center text-white relative">
        <a
          href="/"
          className="absolute top-5 left-5 bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Close
        </a>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold font-serif mb-8">Aquarius Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg p-4 bg-white">
                <img
                  src={src}
                  alt={`Resort view ${index + 1}`}
                  className="w-full h-60 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Gallery;
  