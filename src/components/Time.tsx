'use client'
import { useEffect, useState } from "react";

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl p-6 w-32 shadow-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
    <span className="text-4xl font-bold text-white tracking-tight">{value}</span>
    <span className="text-sm text-white/80 font-medium mt-2 uppercase tracking-wider">{label}</span>
  </div>
);

const Countdown = () => {
  const eventDate = "2025-12-31 23:59:59";

  const calculateTimeLeft = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0 };
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, days, hours };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-blue-600 py-16 border-y-4 border-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-white mb-3 tracking-tight">Countdown to Event</h2>
        <p className="text-white/70 text-lg mb-8 text-center">December 31, 2025</p>
        
        <div className="flex gap-6">
          <CountdownBox value={timeLeft.months} label="Months" />
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;