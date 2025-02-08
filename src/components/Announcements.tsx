"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

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
        <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Announcements
          </h2>
          <ul className="space-y-4">
            {[
              "Announcement 1: Call for Papers",
              "Announcement 2: Registration Open",
              "Announcement 3: Keynote Speakers",
              "Announcement 4: Workshop Schedule",
            ].map((announcement, index) => (
              <motion.li
                key={index}
                className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors flex items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                {announcement}
              </motion.li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Other Sections - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
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
                      "Prof. V. K. Tewari, Director, IIT Kharagpur",
                      "Prof. Debabrata Das, Director, IIIT Bangalore",
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
                    General Co-chairs:
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {["Prof. Mrinal K. Mandal", "Dr. Puneet Mishra"].map(
                      (name, index) => (
                        <motion.li
                          key={index}
                          className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-200 before:rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {name}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                Conference Tracks
              </h2>
              <ul className="space-y-4">
                {[
                  "Track 1: AI & ML, Data Science",
                  "Track 2: Sensors, Instrumentation, Control and Automation",
                  "Next-Gen Communications, Networks, and IoT",
                  "Robotics and Cybernetics",
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
                      ["Paper Submission Starts", "19-05-2024"],
                      [
                        "Paper Submission Ends",
                        "19-08-2024",
                        "Extended hard deadline: 31-08-2024",
                      ],
                      ["Notification of Acceptance", "25-10-2024"],
                      ["Final Paper Submission", "05-11-2024"],
                      ["Author Registration", "25-10-2024"],
                      ["Early-Bird Registration Ends", "19-11-2024"],
                    ].map(([event, date, extended], index) => (
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
                            {extended ? (
                              <>
                                <span className="text-sm line-through text-gray-400">
                                  {date}
                                </span>
                                <span className="text-red-600 font-semibold">
                                  {extended}
                                </span>
                              </>
                            ) : (
                              <span className="text-gray-700">{date}</span>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
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