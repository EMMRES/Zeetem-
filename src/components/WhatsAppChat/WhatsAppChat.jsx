import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppChat() {
  const handleClick = () => {
    window.open('https://wa.me/message/KPFDC3IAQC2YN1', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
}
