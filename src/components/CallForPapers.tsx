'use client';

import React from 'react';

const CallForPapers: React.FC = () => {
  const tracks = [
    "Track 1: Artificial Intelligence and Machine Learning, Data Science",
    "Track 2: Sensors, Instrumentation, Control and Automation",
    "Track 3: Network and Hardware Security, Cryptography, and Block Chain Technology",
    "Track 4: Neuromorphic, Quantum Computing, Parallel and Distributed Computing",  
    "Track 5: Optical/RF/Microwave/Radar/Terahertz Technologies",
    "Track 6: VLSI and Embedded Systems,Semiconductor Devices, Circuits, MEMS",
    "Track 7: Robotics, UAV, and Autonomous Vehicle",
    "Track 8: Signal, Image and Multimedia Processing, Digital Healthcare",
    "Track 9: Next Generation Communication Technologies and Networks",
    "Track 10: Power Electronics and Power Systems",
    "Track 11: Electric Vehicles, Sustainable Technologies",
    "Track 12: IoT, Cyber Physical Systems, and Industry 4.0",
  ];

  return (
    <div className="min-h-screen  text-gray-800 font-sans w-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4 text-center relative  overflow-hidden">
        <div className="absolute inset-0 bg-opacity-10 bg-gray-900" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-up">
            6th IEEE India Council International Subsections Conference
          </h1>
          <p className="text-2xl mb-4 animate-fade-in-up animation-delay-300">
            Theme: &ldquo;Smart and Sustainable Technologies for Society&rdquo;
          </p>
          <p className="text-xl animate-fade-in-up animation-delay-600">
            We invite you to submit your groundbreaking papers for our upcoming conference
          </p>
        </div>
      </header>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Conference Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track}
              className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{track}</h3>
              <p className="text-gray-600">Explore cutting-edge research and innovations in this exciting field.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-600 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">Take Action</h2>
          <p className="text-xl text-white mb-10">
            Be part of shaping the future of technology. Download our brochure for more information or submit your paper today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://drive.google.com/file/d/18wzYcfT6iQiesNpu9RgIMpg3oyfhE03N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Brochure
            </a>
            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FINDISCON2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
