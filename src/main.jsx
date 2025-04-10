import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Homepage from './assets/pages/Homepage.jsx'
import AboutUs from "./assets/pages/About.jsx";
import Gallery from './assets/pages/Gallery.jsx';
import ResortContact from './assets/pages/Contact.jsx'; // Corrected file path
import BookNow from './assets/pages/Booking';
import LoginPage from './assets/pages/Login.jsx';
import AdminDashboard from './assets/pages/AdminDashboard.jsx';
import AdminPaymentDashboard from './assets/pages/AdminPaymentDashboard';
import AdminRoomAvailability from './assets/pages/AdminRoomAvalability.jsx';
import Profile from './assets/pages/Profile.jsx';
import ManageReservations from './assets/pages/ManageReservation.jsx';
import StaffDashboard from './assets/pages/StaffDashboard.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ResortContact />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/manage-reservations" element={<ManageReservations />} />
        <Route path="/admin-payment-dashboard" element={<AdminPaymentDashboard />} />
        <Route path="/admin-room-availability" element={<AdminRoomAvailability />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />

      </Routes>
    </Router>
  </StrictMode>,
)