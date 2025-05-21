import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Zeetem logo.jpeg";

const testimonials = [
  { text: "Absolutely loved my bridal look! Zeetem nailed it.", name: "– Tolu A." },
  { text: "Professional and talented makeup artists. I felt amazing!", name: "– Ada E." },
  { text: "Flawless finish and great attention to detail. 10/10!", name: "– Chidinma O." },
  { text: "The best glam experience ever. I felt like royalty!", name: "– Sharon U." },
  { text: "Zeemtem made my big day perfect. So grateful!", name: "– Fola T." },
];

export default function About() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800 dark:text-gray-100">
      {/* Hero Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Zeetem</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Slay to Perfection — Where Beauty Meets Confidence
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={logo}
            alt="Zeetem Logo"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Zeetem is a brand with over 8 years of expertise in bridal glam, non-bridal makeup, and professional training. Every service is tailored,
            every finish is seamless, and every client leaves feeling confident, radiant, and unforgettable.
          </p>
          <p className="mb-4">
            At Zeetem where artistry meets elegance we believe beauty has no one shade, so our services are thoughtfully tailored to enhance
            all skin tones and types—ensuring every client feels seen, celebrated, and stunning in their own skin.
          </p>
          <p>
            Our makeup style delivers a flawless, velvety finish that’s both lightweight and long-wearing — perfect for any moment that matters.
            Every session with us is a celebration of you. Let us bring your vision to life—with grace, expertise, and a touch of luxury.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h3>

        {/* Infinite loop carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((review, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex-shrink-0"
              >
                <p className="italic">"{review.text}"</p>
                <p className="text-right font-semibold mt-4">{review.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
