export default function Services() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      price: "₦35,000",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      features: ["Free WiFi", "King Bed", "Air Conditioner"]
    },
    {
      id: 2,
      name: "Executive Suites",
      price: "₦55,000",
      image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2070",
      features: ["Free WiFi", "Living Room", "Breakfast Included"]
    },
    {
      id: 3,
      name: "Presidential Villa",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      features: ["Private Pool", "2 Bedrooms", "24/7 Butler"]
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gray-900 text-white py-20 px-10 md:px-20 text-center">
        <h1 className="text-5xl font-bold">Our <span className="text-blue-400">Rooms & Services</span></h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Choose from our collection of luxury rooms designed for comfort and style.</p>
      </section>

      <section className="py-16 px-10 md:px-20 grid md:grid-cols-3 gap-8">
        {rooms.map(room => (
          <div key={room.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition">
            <img src={room.image} alt={room.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-blue-600 font-bold mt-2 text-lg">{room.price} / night</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {room.features.map((f, i) => (
                  <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">{f}</span>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}