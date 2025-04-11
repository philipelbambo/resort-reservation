import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomView = () => {
    const [rooms, setRooms] = useState([
        { id: 1, roomNumber: 101, name: "Deluxe", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d5/3e/2b/villa-criselda-resort.jpg?w=700&h=-1&s=1", capacity: 2, price: 2000, available: 10, description: "A cozy room with basic amenities, perfect for a short stay." },
        { id: 2, roomNumber: 102, name: "Beach front", image: "https://content3.jdmagicbox.com/comp/kodaikanal/p3/9999p4542.4542.220524121756.z3p3/catalogue/cloudy-mist-kodaikanal-ho-kodaikanal-rooms-on-rent-78jldoxlmf.jpg", capacity: 3, price: 2500, available: 7, description: "A spacious room with modern amenities and a beautiful view." },
        { id: 3, roomNumber: 103, name: "Family", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241625097.jpg?k=0230cabacc6d6171abed86217c0b3c092434758310f8ad204628dd9d58aaae24&o=&hp=1", capacity: 4, price: 3000, available: 5, description: "A large suite perfect for families, with extra space and comfort." },
        { id: 4, roomNumber: 104, name: "Villa", image: "https://media-cdn.tripadvisor.com/media/photo-s/07/dc/cf/8e/sapa-local-house.jpg", capacity: 2, price: 3500, available: 4, description: "A luxurious room with premium amenities, ideal for business travelers." },
        { id: 5, roomNumber: 105, name: "Group Villa", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248013752.jpg?k=fb8fad6aa9071fdf29dc3a53bcf390caf3b5faf3958c5d2166d6bbcb0c9ee378&o=&hp=1", capacity: 2, price: 3800, available: 6, description: "A room with a stunning ocean view, perfect for a relaxing getaway." },
        { id: 6, roomNumber: 106, name: "Private Villa", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248013758.jpg?k=b18f09ecddce20afe34d5d6cdbd4b2e874a1bc00c5711c678f42c788f6313334&o=&hp=1", capacity: 2, price: 4000, available: 4, description: "A romantic suite designed for couples, with a private balcony and jacuzzi." },
        { id: 7, roomNumber: 107, name: "Standard Suite", image: "https://bohol-sunside-resort.com/wp-content/uploads/apartment-5-peple-living-room.jpg", capacity: 6, price: 5000, available: 9, description: "A luxurious penthouse with panoramic views, perfect for large groups or special occasions." },
        { id: 8, roomNumber: 108, name: "Beach House", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507116774.jpg?k=6a62ed271ca5d04f14a2a5cee2a174334e3e41998043831b01a6bc7361a785c9&o=&hp=1", capacity: 2, price: 3000, available: 4, description: "A serene room overlooking the garden, ideal for nature lovers." },
    ]);

    const [cottages, setCottages] = useState([
        { id: 1, cottageNumber: 201, name: "Serene Haven", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWG1f6Ecq6FrPWTzi2zbqJPd4Xop5g7QXL-Q&s", capacity: 4, price: 350, available: 3 },
        { id: 2, cottageNumber: 202, name: "Willow Cottage", image: "https://media-cdn.tripadvisor.com/media/photo-s/01/8d/dd/99/can-t-help-feeling-introspecti.jpg", capacity: 6, price: 650, available: 2 },
        { id: 3, cottageNumber: 203, name: "Tranquil Nest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-pKmJPrzjt7fp7w4bBCHrsIhIxZkcix_D10ml1jaVB3_okFZ0l8GAhSb_nsB_Qa7KmA&usqp=CAU", capacity: 8, price: 500, available: 3 },
        { id: 4, cottageNumber: 204, name: "River Breeze Cottage", image: "https://cdn.prod.website-files.com/59a30a523e53e400017c4ded/59ca1872b5fc1c000144b77b_delight01.jpg", capacity: 10, price: 700, available: 2 },
        { id: 5, cottageNumber: 205, name: "Sunset Hollow", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6b5MwFYNi_aRxLw4q1I4ZYPQUGCcZI1FNBHP9qw1_UXSaSD3jH2QoGP-_8Y9jbhGrvQ&usqp=CAU", capacity: 4, price: 400, available: 3 },
        { id: 6, cottageNumber: 206, name: "Ocean Bliss Villa", image: "https://juandollartraveler.wordpress.com/wp-content/uploads/2018/04/open-hut.jpeg?w=748", capacity: 6, price: 600, available: 2 },
        { id: 7, cottageNumber: 207, name: "Beach side cottage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8KxXaqqYc_gj4z1QKIU8LRBSOxzzfAZRHopM-s7cygH63o-hXpSusJrgxm4Lmuw5YU8&usqp=CAU", capacity: 8, price: 4000, available: 2 },
        { id: 8, cottageNumber: 208, name: "Classic cottage ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp02MkhAHDQuCIfmlhMQr258EFfsX8NVn2RS8HsZxVjGsRHmJPNFkKX2sntUQpa0lO4_s&usqp=CAU", capacity: 4, price: 500, available: 3 },
    ]);

    const [selectedRooms, setSelectedRooms] = useState([]);
    const [selectedCottages, setSelectedCottages] = useState([]);
    const [noCottageNeeded, setNoCottageNeeded] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);
    const [receiptDetails, setReceiptDetails] = useState(null);
    const [daysOfStay, setDaysOfStay] = useState(1);
    const [showCottageSelection, setShowCottageSelection] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const calculateTotalPrice = () => {
            const roomsTotal = selectedRooms.reduce((acc, room) => acc + room.price * daysOfStay, 0);
            const cottagesTotal = selectedCottages.reduce((acc, cottage) => acc + cottage.price * daysOfStay, 0);
            setTotalPrice(roomsTotal + cottagesTotal);
        };

        calculateTotalPrice();
    }, [selectedRooms, selectedCottages, daysOfStay]);

    const handleRoomSelection = (room) => {
        if (room.available > 0) {
            setSelectedRooms((prev) =>
                prev.includes(room) ? prev.filter((r) => r.id !== room.id) : [...prev, room]
            );
            setError("");
        } else {
            setError(`Sorry, ${room.name} is fully booked. Please choose another room.`);
        }
    };

    const handleCottageSelection = (cottage) => {
        if (cottage.available > 0) {
            setSelectedCottages((prev) =>
                prev.includes(cottage) ? prev.filter((c) => c.id !== cottage.id) : [...prev, cottage]
            );
            setError("");
        } else {
            setError(`Sorry, ${cottage.name} is fully booked. Please choose another cottage.`);
        }
    };

    const handleNoCottageNeeded = () => {
        setSelectedCottages([]);
        setNoCottageNeeded(true);
        setError("");
    };

    const handleUnselectRoom = (roomId) => {
        setSelectedRooms((prev) => prev.filter((r) => r.id !== roomId));
        setError("");
    };

    const handleUnselectCottage = (cottageId) => {
        setSelectedCottages((prev) => prev.filter((c) => c.id !== cottageId));
        setError("");
    };

    const handleReservation = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !contactNumber || !email || !paymentMethod) {
            setError("⚠️ Please fill in all fields and select a payment method.");
            return;
        }

        if (contactNumber.length !== 11) {
            setError("Invalid input! Please enter exactly 11 numbers.");
            return;
        }

        if (selectedRooms.length === 0) {
            setError("⚠️ Please select at least one room.");
            return;
        }

        const updatedRooms = rooms.map((r) =>
            selectedRooms.some((sr) => sr.id === r.id) ? { ...r, available: r.available - 1 } : r
        );
        setRooms(updatedRooms);

        const updatedCottages = cottages.map((c) =>
            selectedCottages.some((sc) => sc.id === c.id) ? { ...c, available: c.available - 1 } : c
        );
        setCottages(updatedCottages);

        const reservationDetails = {
            rooms: selectedRooms.map((r) => `${r.name} - Room ${r.roomNumber}`).join(", "),
            cottages: selectedCottages.map((c) => `${c.name} - Cottage ${c.cottageNumber}`).join(", "),
            firstName,
            lastName,
            contactNumber,
            email,
            paymentMethod,
            bookingId: Math.floor(Math.random() * 1000000),
            date: new Date().toLocaleDateString(),
            totalPrice,
            daysOfStay,
        };

        console.log("Reservation Details:", reservationDetails);
        sendEmail(reservationDetails);

        setReceiptDetails(reservationDetails);
        setShowReceipt(true);
        setSuccessMessage("🎉 Your reservation has been successfully submitted!");

        setTimeout(() => {
            setSelectedRooms([]);
            setSelectedCottages([]);
            setFirstName("");
            setLastName("");
            setContactNumber("");
            setEmail("");
            setPaymentMethod("");
            setNoCottageNeeded(false);
            setDaysOfStay(1);
            setShowReceipt(false);
            setShowCottageSelection(false); // Hide cottage selection after submission
        }, 5000);
    };

    const sendEmail = (details) => {
        console.log(`Sending email to ${details.email} with reservation details...`);
    };

    const handleBack = () => {
        navigate("/"); // Navigate to the homepage
    };

    const handleGoBackToRoomSelection = () => {
        setSelectedRooms([]);
        setSelectedCottages([]);
        setNoCottageNeeded(false);
        setError("");
        setShowReceipt(false); // Ensure the receipt modal is closed
        setShowCottageSelection(false); // Hide cottage selection
    };

    const handleContinueToCottage = () => {
        setShowCottageSelection(true);
    };

    return (
        <div
            className="p-15 bg-cover bg-center min-h-screen"
            style={{ backgroundImage: 'url(" https://i.pinimg.com/originals/0b/46/94/0b4694c4bae13b92f07ef13a2e146eec.gif ")' }}
        >
            <button
                onClick={handleBack}
                className="absolute top-2 left-1 bg-black text-white rounded-full p-2 shadow-md mt-0 hover:bg-gray-300 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 room-box"
                    >
                        <div className="relative">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-40 object-cover"
                            />
                            {room.available === 0 && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-emerald-200 text-lg font-bold">
                                        Fully Booked
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="p-3">
                            <h2 className="text-lg font-bold mb-1 text-black-800">
                                {room.name} - Room {room.roomNumber}
                            </h2>
                            <div className="flex items-center text-gray-600 mb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12 17a7 7 0 00-7-7 1 1 0 100 2 5 5 0 015 5 1 1 0 102 0zM6 13a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3 1 1 0 100-2z" />
                                </svg>
                                <span>{room.capacity} people</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                <span>₱{room.price} per night</span>
                            </div>

                            <div className="flex items-center text-gray-600 mb-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                <span>{room.available} rooms available</span>
                            </div>
                            <button
                                onClick={() => handleRoomSelection(room)}
                                className={`w-full mt-2 p-2 rounded-lg ${
                                    room.available > 0
                                        ? selectedRooms.some((sr) => sr.id === room.id)
                                            ? "bg-green-800 hover:bg-green-400"
                                            : "bg-orange-950 hover:bg-sky-900"
                                        : "bg-gray-400 cursor-not-allowed"
                                } text-white font-semibold transition-all text-sm`}
                                disabled={room.available === 0}
                            >
                                {room.available > 0
                                    ? selectedRooms.some((sr) => sr.id === room.id)
                                        ? "Selected"
                                        : "Select Room"
                                    : "Not Available"}
                            </button>
                            {selectedRooms.some((sr) => sr.id === room.id) && (
                                <button
                                    onClick={() => handleUnselectRoom(room.id)}
                                    className="w-full mt-2 p-2 rounded-lg bg-red-950 text-white font-semibold transition-all hover:bg-red-700 text-sm"
                                >
                                    Unselect Room
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button
    onClick={handleContinueToCottage}
    className="fixed bottom-4 right-4 transition-all rounded-2xl fixed-arrow-button hover:scale-110 hover:bg-900"
>
    <svg
        width="100"
        height="90"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Text */}
        <text
            className="reserved-area"
            x="50"
            y="70"
            fontSize="27"
            fontFamily="'Brush', cursive"
            fill="Yellow"
            textAnchor="middle"
            dominantBaseline="middle"
        >
            Reserved
        </text>

        {/* Arrow Image (must be hosted or base64) */}
        <image
            className="hover:opacity-75"
            href="https://cdn-icons-png.flaticon.com/512/3031/3031716.png"
            x="30"
            y="70"
            width="40"
            height="40"
            style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(376%) hue-rotate(3deg) brightness(94%) contrast(89%)' }}
        />
    </svg>
</button>


            {showCottageSelection && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[url('')] bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={handleGoBackToRoomSelection}
                            className="absolute top-4 left-4 bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-300 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-7 text-gray-800">
                            Select a Cottage
                        </h2>

                        {/* Display selected rooms at the top */}
                        {selectedRooms.length > 0 && (
                            <div className="mb-6 p-4 border rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Selected Rooms</h3>
                                {selectedRooms.map((room) => (
                                    <div key={room.id} className="mb-4">
                                        <img
                                            src={room.image}
                                            alt={room.name}
                                            className="w-full h-32 object-cover mb-2 rounded-lg"
                                        />
                                        <p className="text-lg font-semibold text-gray-700">
                                            {room.name} - Room {room.roomNumber}
                                        </p>
                                        <p className="text-gray-600">{room.capacity} people</p>
                                        <p className="text-gray-600">₱{room.price} per night</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-6">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                Add a Cottage to Your Reservation
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cottages.map((cottage) => (
                                    <div
                                        key={cottage.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
                                    >
                                        <img
                                            src={cottage.image}
                                            alt={cottage.name}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="p-3">
                                            <h4 className="text-lg font-bold mb-1 text-gray-800">
                                                {cottage.name} - Cottage {cottage.cottageNumber}
                                            </h4>
                                            <div className="flex items-center text-gray-600 mb-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 mr-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12 17a7 7 0 00-7-7 1 1 0 100 2 5 5 0 015 5 1 1 0 102 0zM6 13a5 5 0 00-5 5 1 1 0 102 0 3 3 0 013-3 1 1 0 100-2z" />
                                                </svg>
                                                <span>{cottage.capacity} people</span>
                                            </div>
                                            <div className="flex items-center text-gray-600 mb-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 mr-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                                </svg>
                                                <span>₱{cottage.price} per night</span>
                                            </div>
                                            <div className="flex items-center text-gray-600 mb-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 mr-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                                </svg>
                                                <span>{cottage.available} cottages available</span>
                                            </div>
                                            <button
                                                onClick={() => handleCottageSelection(cottage)}
                                                className={`w-full mt-2 p-2 rounded-lg ${
                                                    cottage.available > 0
                                                        ? selectedCottages.some((sc) => sc.id === cottage.id)
                                                            ? "bg-green-600 hover:bg-green-700"
                                                            : "bg-cyan-600 hover:bg-blue-700"
                                                        : "bg-gray-400 cursor-not-allowed"
                                                } text-black font-semibold transition-all text-sm`}
                                                disabled={cottage.available === 0}
                                            >
                                                {cottage.available > 0
                                                    ? selectedCottages.some((sc) => sc.id === cottage.id)
                                                        ? "Selected"
                                                        : "Select Cottage"
                                                    : "Not Available"}
                                            </button>
                                            {selectedCottages.some((sc) => sc.id === cottage.id) && (
                                                <button
                                                    onClick={() => handleUnselectCottage(cottage.id)}
                                                    className="w-full mt-2 p-2 rounded-lg bg-red-600 text-white font-semibold transition-all hover:bg-red-700 text-sm"
                                                >
                                                    Unselect Cottage
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleReservation} className="space-y-6 mt-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your first name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your contact number"
                                    value={contactNumber}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                        if (value.length <= 11) {
                                            setContactNumber(value);
                                        }
                                        if (/[a-zA-Z]/.test(value)) {
                                            setError("Contact numbers should contain digits only.");
                                        } else {
                                            setError("");
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Days of Stay
                                </label>
                                <input
                                    type="number"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter number of days"
                                    value={daysOfStay}
                                    onChange={(e) => setDaysOfStay(Number(e.target.value))}
                                    min="1"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Payment Method
                                </label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="Gcash">Gcash</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </div>
                            {paymentMethod === "Gcash" && (
                                <div className="text-center">
                                    <img
                                        src="https://logos-marques.com/wp-content/uploads/2023/05/GCash-Logo-thmb.png"
                                        alt="Gcash Icon"
                                        className="mb-0 w-40 h-20  mx-auto"
                                    />
                                    <p className="text-gray-700 mb-2">Please pay using this Gcash number:</p>
                                    <p className="font-medium text-lg">09550057231</p>
                                </div>
                            )}
                            <div className="text-xl font-bold mb-2 text-gray-800">
                                Total Price: ₱{totalPrice}
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
                                >
                                    Confirm Reservation
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedRooms([]);
                                        setSelectedCottages([]);
                                        setNoCottageNeeded(false);
                                        setShowCottageSelection(false); // Hide cottage selection
                                    }}
                                    className="flex-1 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-all font-semibold"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showReceipt && receiptDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-4">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            Reservation Receipt
                        </h2>
                        <div className="space-y-4">
                            <p><strong>Booking ID:</strong> {receiptDetails.bookingId}</p>
                            <p><strong>Rooms:</strong> {receiptDetails.rooms}</p>
                            <p><strong>Cottages:</strong> {receiptDetails.cottages}</p>
                            <p><strong>Name:</strong> {receiptDetails.firstName} {receiptDetails.lastName}</p>
                            <p><strong>Contact Number:</strong> {receiptDetails.contactNumber}</p>
                            <p><strong>Email:</strong> {receiptDetails.email}</p>
                            <p><strong>Payment Method:</strong> {receiptDetails.paymentMethod}</p>
                            <p><strong>Total Price:</strong> ₱{receiptDetails.totalPrice}</p>
                            <p><strong>Date:</strong> {receiptDetails.date}</p>
                            <p><strong>Days of Stay:</strong> {receiptDetails.daysOfStay}</p>
                        </div>
                        <p className="text-green-500 text-sm text-center mt-6">
                            🎉 Your reservation has been successfully submitted! Redirecting to home page...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomView;
