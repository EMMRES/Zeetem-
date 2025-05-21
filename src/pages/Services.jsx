import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Only import the hero image
import MakeupHeroImg from '../assets/makeup hero.jpg';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: "Studio Glam",
      price: "₦20,000",
      duration: "1 hr 20 mins",
      description: `Enjoy a full face, signature Soft Glam — perfect for parties, birthdays, date nights, and other special occasions.
Complimentary false lashes for a complete, polished look.
Please arrive promptly; appointments are time sensitive.`,
    },
    {
      title: "Home Service",
      price: "From ₦35,000",
      description: `Enjoy luxury, professional makeup services in your comfort zone—no stress, just flawless glam.

Pricing based on location:
- Egbeda axis: ₦35,000
- Mainland 1: ₦40,000 (Ikeja, Maryland, Oshodi, Yaba, Surulere)
- Island 1: ₦50,000 (Lagos Island, VI, Ikoyi, Lekki, Osapa, Ikate to Chevron)
- Island 2: ₦60,000 (VGC, Ajah)`,
    },
    {
      title: "Personalized Makeup Class 1-on-1",
      price: "₦80,000",
      description: `A 1-week personal private class for 3 hours daily at the makeup studio.`,
    },
    {
      title: "Party Guest Gele",
      price: "₦5,000",
      description: `Add a stunning gele to your party look with our expert styling.`,
    },
    {
      title: "Bridal Makeup Session",
      price: "Varies (see details)",
      description: (
        <>
          Make your big day unforgettable with our luxury bridal makeup experience. Our bridal glam is designed to enhance your natural beauty using premium products and expert technique to ensure a flawless, radiant look that lasts throughout your celebration.
          <ul className="list-disc list-inside mt-2">
            <li><strong>Civil/Introduction:</strong> ₦80,000 (2-3 hrs)</li>
            <li><strong>White Wedding:</strong> ₦120,000</li>
            <li><strong>Traditional Wedding:</strong> ₦150,000</li>
            <li><strong>Traditional & White Wedding (Same day):</strong> ₦250,000</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section with overlay */}
        <div className="relative mb-12" data-aos="fade-up">
          <img
            src={MakeupHeroImg}
            alt="Zeetem Makeup Hero"
            className="w-full rounded-xl object-cover shadow-lg max-h-[500px] mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-2xl">
              Slay to Perfection — Where Beauty Meets Confidence.
            </p>
          </div>
        </div>

        {/* Service Cards without images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              {service.price && (
                <p className="text-pink-600 font-bold mb-2">{service.price}</p>
              )}
              {service.duration && (
                <p className="text-sm italic mb-2">{service.duration}</p>
              )}
              <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {service.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Booking Section */}
        <div data-aos="zoom-in" className="text-center bg-pink-100 dark:bg-pink-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Book a Makeup Session With Us Today!</h2>
          <Link
            to="/booking"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
