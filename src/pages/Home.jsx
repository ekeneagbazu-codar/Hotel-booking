import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-10 md:px-20 text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find Your Perfect <span className="text-blue-400">Stay</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Luxury rooms, world-class services, and unforgettable experiences. Book with confidence at HotelBooking.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/services" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold">
              Explore Rooms
            </Link>
            <Link to="/about" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="max-w-5xl mx-auto -mt-12 relative z-20 bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4">
        <label for="userEmail">Email Address:</label>
        <input type="email" className="flex-1 border p-3 rounded-lg" />
        <input type="date" className="flex-1 border p-3 rounded-lg" />
        <select className="flex-1 border p-3 rounded-lg">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5+ Guests</option>
        </select>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
          Check Availability
        </button>
      </div>

      {/* FEATURES */}
      <section className="py-20 px-10 md:px-20">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-blue-400/50 text-center">
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="font-bold text-xl">Luxury Rooms</h3>
            <p className="text-gray-500 font-bold mt-2">Comfortable, clean, and beautifully designed for your relaxation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-blue-400/50 text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="font-bold text-xl">24/7 Service</h3>
            <p className="text-gray-500 font-bold mt-2">Restaurant, room service, and support available anytime.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-blue-400/50 text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold text-xl">Best Price</h3>
            <p className="text-gray-500 font-bold mt-2">Guaranteed best rates with no hidden charges.</p>
          </div>
        </div>
      </section>
    </div>
  );
}