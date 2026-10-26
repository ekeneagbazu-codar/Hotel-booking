
export default function About() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="bg-gray-900 text-white py-20 px-10 md:px-20 text-center">
        <h1 className="text-5xl font-bold">About <span className="text-blue-400">HotelBooking</span></h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We are more than just a hotel — we are a destination for comfort, luxury, and unforgettable memories.
        </p>
      </section>

      {/* STORY + IMAGE */}
      <section className="py-20 px-10 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Founded in 2020, HotelBooking started with a simple mission: make luxury affordable.
            From a single boutique hotel in Lagos to a trusted brand for travelers across Nigeria,
            we have hosted over 10,000 happy guests.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our commitment is simple — clean rooms, friendly staff, and 24/7 support. Every stay with us is designed to feel like home, only better.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10k+</h3>
              <p className="text-sm text-gray-500">Happy Guests</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">150+</h3>
              <p className="text-sm text-gray-500">Luxury Rooms</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">4.9</h3>
              <p className="text-sm text-gray-500">Rating</p>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551882547-b79c5d64a4e2?q=80&w=2070"
          alt="Hotel lobby"
          className="rounded-2xl shadow-xl h-[450px] object-cover"
        />
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-16 px-10 md:px-20">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold text-lg">🏆 Excellence</h4>
            <p className="text-gray-500 mt-2 text-sm">We strive for perfection in every detail, from check-in to check-out.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold text-lg">🤝 Trust</h4>
            <p className="text-gray-500 mt-2 text-sm">Transparent pricing and honest service — no hidden charges ever.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-bold text-lg">❤️ Hospitality</h4>
            <p className="text-gray-500 mt-2 text-sm">Our staff treats every guest like family, with warmth and respect.</p>
          </div>
        </div>
      </section>
    </div>
  );
}