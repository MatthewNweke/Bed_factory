import React, { useState } from "react";
import "../../css/styles.css";

const DashboardSidebar = ({ selectedItem, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`min-w-[20%] min-h-[100vh] py-6 px-4 shadow-xl transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 fixed top-0 left-0 bottom-0 bg-white z-50`}
    >
      <div className="flex justify-=center gap-4 items-center my-5 ">
        {/* Hamburger menu icon */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:hidden  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleToggleSidebar}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" className="hamburger-menu"/>
        </svg> */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          className="size-6 text-primary mb-1.5 flex-shrink-0 text-[#16a34a]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"></path>
        </svg>
        {/* Admin title */}
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <ul className="grid grid-cols-1 gap-5 ">
        {/* Sidebar items */}
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Dashboard"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Products"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Products")}
        >
          Products
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Categories"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Categories")}
        >
          Categories
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Customers"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Customers")}
        >
          Customers
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Orders"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Orders")}
        >
          Orders
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Coupon"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Coupon")}
        >
          Coupon
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Staff"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Staff")}
        >
          Staff
        </li>
        <li
          className={`cursor-pointer p-3 border-l-[4px] ${
            selectedItem === "Settings"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Settings")}
        >
          Settings
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
