function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          AI Career GPS
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;