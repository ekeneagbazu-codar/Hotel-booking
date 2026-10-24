import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0">
      <Link to="/" className="text-2xl font-bold text-blue-600">HotelBooking</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>
      <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Book Now</Link>
    </header>
  );
}