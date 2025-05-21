import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import Booking from './pages/Booking';
import Contact from './pages/contact';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminPanel from './components/AdminPanel/AdminPanel';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';

import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import { collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import { getAuth, signOut } from 'firebase/auth';

import Swal from 'sweetalert2';

const auth = getAuth();

export default function App() {
  const [bookings, setBookings] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleBookingSubmit = async (newBooking) => {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), newBooking);
      console.log('Booking saved with ID:', docRef.id);

      Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed',
        text: `Thank you, ${newBooking.name}. Your booking on ${newBooking.date} at ${newBooking.time} is confirmed!`,
        confirmButtonColor: '#d946ef',
      });
    } catch (error) {
      console.error('Error saving booking:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to save booking. Please try again.',
      });
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, 'bookings', id));
      console.log(`Deleted booking with ID: ${id}`);
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking. Please try again.');
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAdmin(false);
        setBookings([]);
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  useEffect(() => {
    if (isAdmin) {
      const unsubscribe = onSnapshot(collection(db, 'bookings'), (snapshot) => {
        const fetchedBookings = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(fetchedBookings);
      });
      return () => unsubscribe();
    }
  }, [isAdmin]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-white text-black dark:bg-dark dark:text-white min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking onSubmit={handleBookingSubmit} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/policy" element={<PrivacyPolicy />} />

            {/* Admin Routes */}
            <Route
              path="/adminlogin"
              element={<AdminLogin onLogin={() => setIsAdmin(true)} />}
            />
            <Route
              path="/admindashboard"
              element={
                isAdmin ? (
                  <AdminPanel
                    bookings={bookings}
                    onDelete={handleDeleteBooking}
                    onLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/adminlogin" replace />
                )
              }
            />

            {/* Alias route */}
            <Route path="/adminpanel" element={<Navigate to="/admindashboard" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppChat />

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition z-40"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </Router>
    </div>
  );
}
