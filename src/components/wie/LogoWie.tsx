import Image from "next/image"

export default function LogoWie() {
  return (
    <section className="flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-lg border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25">
        <div className="flex flex-col items-center p-8 space-y-6">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <Image
              src="/wie/wielogo.jpg"
              height={300}
              width={300}
              alt="IEEE WIE Logo"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight drop-shadow-sm">
              IEEE WIE Special Session
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 leading-relaxed drop-shadow-sm">
              From Lab to Field: Women Engineers Building Sustainable Solutions
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed drop-shadow-sm">
              IEEE WIE Special session in INDISCON 2025 arranged by WIE AG Rourkela Subsection
            </p>

            {/* Date and Time Card */}
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2 drop-shadow-sm">Event Details</h3>
              <p className="text-lg text-blue-800 font-medium drop-shadow-sm">📅 Date: August 23rd, 2025</p>
              <p className="text-lg text-blue-800 font-medium drop-shadow-sm">🕐 Time: 2:30 PM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
