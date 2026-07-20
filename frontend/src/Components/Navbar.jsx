import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

import { IoIosContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full bg-sky-50 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}

        <Link to="/">
          <img
            src="/logo.webp"
            alt="logo"
            className="h-16 md:h-20"
          />
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-12 font-medium text-lg">

          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>

          

          <li>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-orange-500">
              Blogs
            </Link>
          </li>

          <li>
            <Link to="/course" className="hover:text-orange-500">
              Course
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>

        </ul>

        {/* Desktop Right */}

        <div className="hidden lg:flex items-center gap-4">

          <IoIosContact className="text-3xl text-orange-500" />

          {user ? (
            <>
              <span className="font-semibold">
                {user.name}
              </span>

              <button
                onClick={() => navigate("/mycourse")}
                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                My Courses
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/signup")}
                className="hover:text-orange-500"
              >
                Sign Up
              </button>

              <span>|</span>

              <button
                onClick={() => navigate("/login")}
                className="hover:text-orange-500"
              >
                Login
              </button>
            </>
          )}

        </div>

        {/* Mobile Icon */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t shadow">

          <ul className="flex flex-col">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="p-4 border-b hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="p-4 border-b hover:bg-gray-100"
            >
              About
            </Link>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="p-4 border-b hover:bg-gray-100"
            >
              Blogs
            </Link>

            <Link
              to="/course"
              onClick={() => setMenuOpen(false)}
              className="p-4 border-b hover:bg-gray-100"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="p-4 border-b hover:bg-gray-100"
            >
              Contact
            </Link>

            {user ? (
              <>

                <div className="p-4 border-b font-semibold">
                  {user.name}
                </div>

                <button
                  onClick={() => {
                    navigate("/mycourse");
                    setMenuOpen(false);
                  }}
                  className="text-left p-4 border-b hover:bg-gray-100"
                >
                  My Courses
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left p-4 text-red-600"
                >
                  Logout
                </button>

              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                  className="text-left p-4 border-b"
                >
                  Sign Up
                </button>

                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="text-left p-4"
                >
                  Login
                </button>
              </>
            )}

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;