"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import ImageSlider from "./OurPartnersSlider";
import ImageSliderTech from "./OurTechSponsor";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Announcements() {
  return (
    <div className="min-h-screen  p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Announcement Section - Full Width */}
        <AnimatedSection className=" rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          {/* <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Announcements
          </h2> */}
          <ImageSlider />
          <div className="h-4"></div>
          <ImageSliderTech/>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="space-y-6 overflow-y-auto h-[150vh] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedSection className=" p-6 rounded-2xl hover:shadow-xl transition-shadow h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Conference Leadership
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Patrons:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof.  Umamaheshwar Rao Karanam, Director, NIT Rourkela, India",
                      "Prof. Prerna Gaur, Chair, IEEE India Council",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Co-Patrons:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Suparna Kar Chowdhury",
                      "Prof. Dipankar Debnath",
                      "Prof. Subhranshu Samantray",
                      "Prof. S. M. Sameer",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Executive Steering Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Mr. Deepak Mathur",
                      "Prof. Suresh Nair",
                      "Prof. Debabrata Das",
                      "Prof. K. V. S. Hari",
                      "Prof. Ashutosh Dutta",
                      "Prof. Celia Shahnaz",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    International Advisory Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Sajal Das",
                      "Prof. Amit Mishra",
                      "Prof. Ranga Rao Venkatesha Prasad",
                      "Prof. Akshay Rathore ",
                      "Prof. Aryan Kaushik",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    National Advisory Committee:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Ganpati Panda",
                      "Prof. Pradipta Kumar Nanda",
                      "Prof. Iti Saha Misra",
                      "Prof. Bansidhar Majhi",
                      "Er. Hare Krushna Rath",
                      "Prof. Anup Kumar Panda",
                      "Prof. Kamalakanta. Mahapatra",
                      "Prof.  Dipti Patra",
                      "Prof.  Kanungo Barada Mohanty",
                      "Prof.  Bibhudatta Sahoo",
                      "Prof. Sukadev Meher",
                      "Prof. Durga Prasad Mohapatra",
                      "Prof. Debiprasad Priyabrata Acharya ",
                      "Prof. Prasanna Kumar Sahu",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Honorary Chair:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Saswat Chakrabarti",
                      "Prof. Bhaskar Gupta",
                      "Prof. Sarat Kumar Patra",
                      "Prof. Bidyadhar Subudhi",
                      "Prof. Sukumar Mishra",
                      "Prof. Bijaya Ketan Panigrahi",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    General Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Poonam Singh",
                      "Prof. Susmita Das",
                      "Prof. Sudip Misra",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    TPC Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Ashok Kumar Turuk",
                      "Prof. Pravat Kumar Ray",
                      "Prof. Preetam Kumar",
                      "Prof. Mrinal Kanti Mandal",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    TPC Vice-Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Ajit Kumar Sahoo",
                      "Prof. Supratim Gupta ",
                      "Prof. Ratnakar Dash",
                      "Prof. Mahesh Mohan M R",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Organizing Secretary:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Ayaskanta Swain",
                      "Prof. Shrishail Hiremath",
                      "Prof. Arnab Ghosh",
                      "Prof. Tanmoy Roy Choudhury",
                      "Mr. Nandan S",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Co-Organizing Secretary:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Suman Kumar Dey",
                      "Prof. Sudip Kundu",
                      "Prof. Sandip Ghoshal",
                      "Prof. Pankaj Sharma",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Finance Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Arun Kumar",
                      "Prof. Sandip Ghosal",
                      "Dr. Rajashree Jain",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Publication Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Dr. Abraham Varughese",
                      "Mr. Sabarinath Pillai",
                      "Prof. P.K Sharma",
                      "Prof. Basabdatta Palit",
                      "Prof. Monalisa Pattnaik",
                      "Prof. Rakesh Sinha",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Internet and Web Chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {[
                      "Prof. Anirban Bhowal",
                      "Mr.Chengappa M R",
                      "Prof. P.K Jain",
                    ].map((name, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6 overflow-y-auto h-[150vh] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <AnimatedSection className=" p-6 rounded-2xl  ">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Conference Tracks
              </h2>
              <p className="text-gray-600">
                Topics covered by INDISCON 2025 include, but are not limited to:
              </p>
              <ul className="space-y-4">
                {[
                  "Track 1: AI & ML, Data Science",
                  "Track 2: Sensors, Instrumentation, Control and Automation",
                  "Track 3: Network and Hardware Security, Cryptography, and Block chain Technology",
                  "Track 4: Neuromorphic, Quantum Computing, Parallel and Distributed computing and Sustainable Computing",
                  "Track 5: Optical/RF/Microwave/Radar/Terahertz Technologies",
                  "Track 6: VLSI and Embedded Systems, Semiconductor Devices, Circuits, MEMS",
                  "Track 7: Robotics, UAV, and Autonomous Vehicle",
                  "Track 8: Signal, Image and Multimedia Processing, Digital Healthcare",
                  "Track 9: Next Generation Communication Technologies and Networks",
                  "Track 10: Power Electronics and Power Systems",
                  "Track 11: Electric Vehicles, Sustainable Technologies",
                  "Track 12: IoT, Cyber Physical Systems, and Industry4.0",
                ].map((track, index) => (
                  <motion.li
                    key={index}
                    className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {track}
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Important Dates
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["Paper Submission Starts:", "01-12-2024"],
                      ["Paper Submission Ends:", "30-04-2025"],
                      ["Notification of Acceptance:", "31-05-2025"],
                      ["Camera-ready Submission:", "20-06-2025"],
                      ["Proposal Submission Deadline:", "20-03-2025"],
                      [
                        "Special Proposal extended submission date:",
                        "31-03-2025",
                      ],
                      [
                        "Notification of Acceptance/Rejection(special Proposal):",
                        "05-04-2025",
                      ],
                    ].map(([event, date], index) => {
                      // Parse the date string (assuming format DD-MM-YYYY)
                      const [day, month, year] = date.split("-");
                      const dateObj = new Date(`${month}/${day}/${year}`);

                      // Get current date at midnight for accurate comparison
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      const isDatePassed = dateObj < today;

                      return (
                        <motion.tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors even:bg-gray-50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <td className="p-3 text-gray-700 font-medium">
                            {event}
                          </td>
                          <td className="p-3 text-right">
                            <div className="flex flex-col">
                              {isDatePassed ? (
                                <>
                                  <span className="text-sm line-through text-red-400">
                                    {date}
                                  </span>
                                  {date === "30-04-2025" && (
                                    <span className="text-sm text-green-400">
                                      {date === "30-04-2025"
                                        ? "10-05-2025 "
                                        : ""}
                                      <span className="text-red-500 font-bold">
                                        (Hard Deadline)
                                      </span>
                                    </span>
                                  )}
                                </>
                              ) : (
                                <span className="text-green-400 text-sm">
                                  {date}
                                </span>
                              )}
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"

// const IMAGES = [
//   {
//     id: 1,
//     src: "/ieeekolk.png",
//     alt: "IEEE Kolkata Section",
//   },
//   {
//     id: 2,
//     src: "/india_councilup.png",
//     alt: "IEEE India Council",
//   },
//   {
//     id: 3,
//     src: "/nitrlogo.png",
//     alt: "NIT Rourkela",
//   },
//   {
//     id:4,
//     src: "/ieeerklsub.jpg",
//     alt: "IEEE Rourkela",
//   }

// ]

// export default function ImageSlider() {
//   const [isPaused, setIsPaused] = useState(false)
//   const sliderRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!sliderRef.current) return

//     if (isPaused) {
//       sliderRef.current.style.animationPlayState = "paused"
//     } else {
//       sliderRef.current.style.animationPlayState = "running"
//     }
//   }, [isPaused])

//   // Duplicate images to create a seamless loop
//   const allImages = [...IMAGES, ...IMAGES, ...IMAGES]  // Triple the array for smoother looping

//   return (
//     <div
//       className="relative w-full bg-white shadow-md overflow-hidden rounded-lg"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="bg-blue-600 py-3 px-4 flex justify-center items-center">
//         <h2 className="text-white text-xl font-bold text-center">Our Affiliations</h2>
//       </div>

//       <div className="relative overflow-hidden py-4">
//         <style jsx>{`
//           @keyframes scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(calc(-250px * ${IMAGES.length}));
//             }
//           }
//         `}</style>

//         <div
//           ref={sliderRef}
//           className="flex"
//           style={{
//             animation: `scroll 3600ms linear infinite`,
//             width: `calc(250px * ${allImages.length})`,
//           }}
//         >
//           {allImages.map((image, index) => (
//             <div
//               key={`${image.id}-${index}`}
//               className="flex-shrink-0 w-[250px] h-[150px] px-4"
//             >
//               <div className=" h-full w-full flex items-center justify-center p-3 rounded-md ">
//                 <div className={`relative ${image.id === 2 ? 'w-[120%] h-[80px]' : 'w-full h-[80px]'}`}>
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 250px"
//                     style={{
//                       objectFit: 'contain'
//                     }}
//                     //priority={index < 2} // Load first instances with priority
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
