
export default function Contact() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="bg-gray-900 text-white py-20 px-10 md:px-20 text-center">
        <h1 className="text-5xl font-bold">Contact <span className="text-blue-400">Us</span></h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Have a question or want to make a reservation? We are here to help you 24/7.
        </p>
      </section>

      <section className="py-20 px-10 md:px-20 grid md:grid-cols-2 gap-12">
        {/* FORM */}
        <div>
          <h2 className="text-3xl font-bold">Send a Message</h2>
          <form className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" />
              <input type="text" placeholder="Last Name" className="border p-3 rounded-lg w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Subject" className="border p-3 rounded-lg w-full" />
            <textarea rows="5" placeholder="Your Message..." className="border p-3 rounded-lg w-full"></textarea>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold w-full hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-lg">📍 Our Location</h3>
            <p className="text-gray-500 mt-2">12 Allen Avenue, Ikeja, Lagos, Nigeria</p>
            <p className="text-gray-500 text-sm mt-4">Open Hours: Mon - Sun, 24 Hours</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-lg">📞 Phone & Email</h3>
            <p className="text-gray-500 mt-2">+234 812 345 6789</p>
            <p className="text-gray-500">support@hotelbooking.com</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-lg">💬 Quick Response</h3>
            <p className="text-gray-500 mt-2 text-sm">We typically reply within 30 minutes during business hours. For urgent booking, please call our hotline directly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}