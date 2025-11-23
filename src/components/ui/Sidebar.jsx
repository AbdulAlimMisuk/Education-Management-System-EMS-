import React from "react";
import sidebarMenu from "@/globalConfig/sidebarConfig";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed inset-y-0 left-0 z-30 w-64  bg-white shadow-lg transform -translate-x-full lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out"
    >
      <div className="flex flex-col h-full pt-16 lg:pt-0">
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarMenu &&
            sidebarMenu().map((item, index) => (
              <NavLink
                key={item.id  || index}
                to={item.path}
                className={`nav-item flex items-center space-x-3 px-4 py-3 rounded-xl ${
                  item.active
                    ? "active text-primary-600 bg-primary-50"
                    : "text-gray-700"
                }`}
                data-section={item.id}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
        </nav>
      </div>
    </aside>
  );
}
