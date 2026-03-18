import type React from "react";
import { MapPin, Plus, Minus, Mail, Phone } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6 bg-[#050510] font-['Orbitron',_sans-serif]">
      <h1 className="text-center text-6xl font-bold mt-12 mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 text-transparent bg-clip-text tracking-wider uppercase">
        CONTACT US
      </h1>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Map Section */}
        <div className="relative rounded-lg overflow-hidden flex-1 bg-gray-900/50 shadow-lg border border-purple-500/20 hover:shadow-purple-500/50 transition-shadow duration-300">
          <div className="absolute top-0 left-0 bg-gray-900/80 backdrop-blur-sm text-gray-200 z-10 p-6 w-full md:w-[425px] flex justify-between items-center border-b border-purple-500/30">
            <div>
              <h3 className="text-lg font-semibold tracking-wide uppercase">
                ITM Gwalior
              </h3>
              <p className="text-sm text-gray-400 font-['Inter',_sans-serif]">
                Gwalior, Madhya Pradesh
              </p>
            </div>
            <button className="text-purple-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 uppercase tracking-wide text-sm bg-gray-800/50 px-3 py-2 rounded-lg shadow-md hover:shadow-pink-500/50">
              <MapPin size={16} />
              Directions
            </button>
          </div>

          {/* Responsive iframe container */}
          <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] lg:pb-[50%]">
            <iframe
              className="absolute inset-0 w-full h-full min-h-[300px] filter invert-[0.85] hue-rotate-180 brightness-[0.85] contrast-[1.1] rounded-lg"
              title="map"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ITM+Gwalior+Madhya+Pradesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              frameBorder="0"
            ></iframe>
          </div>

          <div className="absolute bottom-28 w-full text-center text-white z-10">
            <p className="text-sm mb-2 text-gray-300 font-['Inter',_sans-serif]">
              Use ctrl + scroll to zoom the map
            </p>
            <div className="flex justify-center gap-2">
              <button className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm text-white text-xl rounded-full border border-purple-500/30 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                <Plus className="mx-auto" size={18} />
              </button>
              <button className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm text-white text-xl rounded-full border border-purple-500/30 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                <Minus className="mx-auto" size={18} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg w-4/5 p-6 flex flex-col md:flex-row z-10 gap-6 text-gray-300 border border-purple-500/20">
            <div className="flex-1">
              <h2 className="text-xs font-semibold mb-2 tracking-widest uppercase bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                ADDRESS
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-['Inter',_sans-serif]">
                ITM Campus, Opp. Sithouli Railway Station, NH-75, Gwalior,
                Madhya Pradesh 474001
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-xs font-semibold mb-2 tracking-widest uppercase bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                EMAIL
              </h2>
              <a
                href="mailto:kronos@itmgoi.in"
                className="text-purple-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center gap-1 font-['Inter',_sans-serif]"
              >
                <Mail size={14} />
                kronos@itmgoi.in
              </a>
              <h2 className="text-xs font-semibold mt-4 mb-2 tracking-widest uppercase bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                PHONE
              </h2>
              <p className="text-gray-400 text-sm flex items-center gap-1 font-['Inter',_sans-serif]">
                <Phone size={14} />
                +91 74711 68868
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="flex-1 bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-lg p-8 backdrop-blur-md shadow-2xl border border-purple-500/20">
          <h2 className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-4 font-semibold uppercase tracking-wider">
            Feedback
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-gray-200 text-sm block mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-900/50 text-white rounded border border-purple-500/30 focus:border-pink-500/70 outline-none placeholder-gray-400 transition-colors duration-300 font-['Inter',_sans-serif]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-200 text-sm block mb-2 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-900/50 text-white rounded border border-purple-500/30 focus:border-pink-500/70 outline-none placeholder-gray-400 transition-colors duration-300 font-['Inter',_sans-serif]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-gray-200 text-sm block mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="w-full p-3 bg-gray-900/50 text-white rounded border border-purple-500/30 focus:border-pink-500/70 outline-none h-32 resize-none placeholder-gray-400 transition-colors duration-300 font-['Inter',_sans-serif]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded text-white font-semibold transition duration-300 uppercase tracking-wider"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
