import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import sidebarMenu from "@/globalConfig/sidebarConfig";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { setAuth } = useTheme();
  const [isOpen, setOpen] = useState(false);

  const logout = async () => {
    setAuth(false);
    localStorage.removeItem("token");
    toast.success("Logout Successfully!");
    navigate("/", { replace: true });
  };

  return (
    <header>
      {/* Header */}
      <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Education Management System
          </h1>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-700 text-2xl"
            >
              <RxHamburgerMenu />
            </button>

            {/* Desktop Logout */}
            <button
              onClick={logout}
              className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          md:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top Bar with X Icon */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="text-gray-700 text-2xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarMenu &&
            sidebarMenu().map((item, index) => (
              <NavLink
                key={item.id || index}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`nav-item flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-200 font-medium ${
                  item.active ? "text-primary-600 bg-primary-50" : "text-gray-700"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
        </nav>

        {/* Logout Button for Mobile */}
        <div className="px-4">
         <button
          onClick={logout}
          className="bg-red-600 text-white mx-4 mb-6 py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
        </div>
        
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
