"use client";

import { React, useState } from "react";
import "../../css/styles.css";

const DashboardSidebar = ({ selectedItem, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`min-w-[20%] relative min-h-[100vh] py-6 px-4 shadow-xl border border-r  transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 fixed top-0 left-0 bottom-0 bg-white z-50`}
    >
      <div className="flex justify-center gap-3 items-center mb-10 mt-5 ">
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
      <ul className="grid grid-cols-1 gap-3 ">
        {/* Sidebar items */}
        <li
          className={`cursor-pointer p-3 flex gap-3 items-center border-l-[4px] ${
            selectedItem === "Dashboard"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Dashboard")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path>
          </svg>
          <span>Dashboard</span>
        </li>
        <li
          className={`cursor-pointer flex items-center gap-3 p-3 border-l-[4px] ${
            selectedItem === "Products"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Products")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <span>Products</span>
        </li>
        <li
          className={`cursor-pointer flex gap-3 items-center p-3 border-l-[4px] ${
            selectedItem === "Categories"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Categories")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"></path>
          </svg>
          <span>Categories</span>
        </li>
        <li
          className={`cursor-pointer p-3 flex items-center gap-3 border-l-[4px] ${
            selectedItem === "Customers"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Customers")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 19a6 6 0 0 0-12 0"></path>
            <circle cx="8" cy="9" r="4"></circle>
            <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
          </svg>
          <span> Customers</span>
        </li>
        <li
          className={`cursor-pointer flex gap-3 items-center p-3 border-l-[4px] ${
            selectedItem === "Orders"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Orders")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
            <path d="M3 9l4 0"></path>
          </svg>
          <span>Orders</span>
        </li>
        <li
          className={`cursor-pointer flex gap-3 items-center p-3 border-l-[4px] ${
            selectedItem === "Coupon"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Coupon")}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.00488 9.5V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V9.5C20.6242 9.5 19.5049 10.6193 19.5049 12C19.5049 13.3807 20.6242 14.5 22.0049 14.5V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V14.5C3.38559 14.5 4.50488 13.3807 4.50488 12C4.50488 10.6193 3.38559 9.5 2.00488 9.5ZM14.0049 5H4.00488V7.96776C5.4866 8.70411 6.50488 10.2331 6.50488 12C6.50488 13.7669 5.4866 15.2959 4.00488 16.0322V19H14.0049V5ZM16.0049 5V19H20.0049V16.0322C18.5232 15.2959 17.5049 13.7669 17.5049 12C17.5049 10.2331 18.5232 8.70411 20.0049 7.96776V5H16.0049Z"></path>
          </svg>
          Coupon
        </li>
        <li
          className={`cursor-pointer flex gap-3 items-center p-3 border-l-[4px] ${
            selectedItem === "Staff"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Staff")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          <span>Staff</span>
        </li>
        <li
          className={`cursor-pointer flex gap-3 items-center p-3 border-l-[4px] ${
            selectedItem === "Settings"
              ? "font-bold border-[#16a34a] bg-[#eee]"
              : "border-transparent"
          }`}
          onClick={() => onItemClick("Settings")}
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          </svg>
          <span>Settings</span>
        </li>

       
        
      </ul>

      <li
          className={`cursor-pointer mt-16 flex gap-3 absolute left-1/2 -translate-x-1/2 bg-[#16a34a] hover:opacity-90 text-white font-bold items-center py-3 px-4 w-[80%] justify-center rounded-xl  ${
            selectedItem === "Log Out" ? "bg-[#eee]" : ""
          }`}
        //   onClick={() => onItemClick("Log Out")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-6 mr-3 flex-shrink-0"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
          <span>Log Out</span>
        </li>
    </div>
  );
};

export default DashboardSidebar;
