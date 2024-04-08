"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "../../css/styles.css";
import Image from "next/image";
import logo from "../../assets/Sosoft-logo.png";
import search from "../../assets/search.svg";
import phoneimg from "../../assets/phoneimg.png";
import locationimg from "../../assets/location.svg";
import userimg from "../../assets/userimg.svg";
import basket from "../../assets/basket.svg";
import pricematch from "../../assets/price-match-icon.png";
import delivery from "../../assets/delivery-icon.png";
import fabric from "../../assets/fabric-swatches.png";
import trustpilot from "../../assets/trustpilot-icon.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [navDropdown, setNavDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const exitDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setNavDropdown(true);
  };

  const handleMouseLeave = () => {
    setNavDropdown(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleToggleScroll = () => {
      // Toggle the body scroll based on dropdown state
      document.body.style.overflow = isDropdownOpen ? "hidden" : "auto";
    };

    handleToggleScroll();

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen) {
        // Check if the click occurred inside the dropdown or on the hamburger icon
        if (
          !event.target.closest(".dropdown-content") &&
          !event.target.closest(".hamburger-icon")
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="py-5 max-xl:py-0">
      <header className="flex flex-col relative max-xl:px-3 max-sm:px-1">
        <nav className="h-[15vh]  py-3 flex items-center gap-[5%] max-xl:flex-col ">
          <div className="flex items-center w-[55%] justify-end gap-[10%] max-xl:gap-[5%]  max-xl:w-[100%] max-sm:h-[100%]">
            <Link href={""}>
              <Image
                className="max-xl:w-32 max-sm:w-24"
                src={logo}
                width={170}
                height={170}
                alt="logo"
              />
            </Link>

            <div className="flex items-center max-sm:self-end w-[100%]  max-md:px-2 relative">
              <div className="flex items-center w-[100%] z-50 ">
                {/* <button
                  className="hidden max-md:block  w-[10%] text-[1.2rem] max-sm:relative max-sm:left-10  max-[400px]:py-[0.1rem] py-2 max-lg:border-[1px] cursor-pointer"
                  onClick={sideDropdown}
                >
                  &#9776;
                </button> */}

                <div className="flex relative w-[100%] max-md:hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-[#0b1a44]   bg-[#f2f2f2] border-[1.5px] outline-none h-[2.8rem] px-2  placeholder-bold rounded-none w-[100%] max-xl:w-[50%] "
                    style={{ fontWeight: "bold", fontSize: "0.8rem" }}
                  />
                  <Image
                    className="z-50 absolute right-3 max-xl:right-[52%] top-1/2 -translate-y-1/2"
                    src={search}
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            </div>
          </div>
          {isDropdownOpen && (
            <div
              className="fixed top-[24%] left-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setIsDropdownOpen(false)}
            ></div>
          )}
          <div className="w-[40%] flex gap-[10%] max-xl:absolute max-xl:h-[15vh] max-xl:top-0 max-xl:items-center  right-0 max-xl:justify-end  max-xl:gap-[5%] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[60%] max-xl:px-5 max-sm:items-center">
            <div className="flex items-center cursor-pointer mr-5 max-sm:mr-2">
              <div className="flex flex-col justify-center">
                <Image
                  src={phoneimg}
                  width={35}
                  height={35}
                  alt="phone"
                  className="max-xl:w-5 max-xl:h-5"
                />
                <span className="font-bold text-[0.6rem] hidden max-xl:inline ">
                  phone
                </span>
              </div>
              <span className="font-bold max-xl:text-[0.8rem] max-xl:hidden">
                0151 548 1554
              </span>
            </div>

            <div className="flex items-center gap-10 max-sm:gap-5">
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={locationimg} width={13} height={13} alt="" />
                <span className="font-bold text-[0.6rem]">Showrooms</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={userimg} width={18} height={18} alt="" />
                <span className="font-bold text-[0.6rem]">Account</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={basket} width={18} height={18} alt="" />
                <span className="font-bold text-[0.6rem]">Basket</span>
              </div>
            </div>
          </div>
        </nav>
        <nav className=" relative  max-md:hidden  bg-[#EEEEEE] py-3 px-3">
          <ul className="m-0 p-0 h-[100%]  text-[0.9rem] flex items-center justify-between flex-wrap max-xl:text-[0.8rem] max-2xl:w-[100%]">
            <li className="p-4 max-lg:p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold relative">
              Home
            </li>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-4 max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                Matresses
              </li>

              <div className="absolute  bottom-[3%] max-xl:bottom-[-3%] max-lg:bottom-[-6%] bg-white shadow-xl py-5 z-50 dropdowncontent hidden border-[5px] border-[#08c]">
                <ul className="  top-0  border-[2px] w-[20%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Shop by Type</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Memory Foam</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Pocket Sprung</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Orthopaedic</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Latex</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Miracoil</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Natural Fillings</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Cut Bed Mattresses</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Kids Mattresses</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Next Day Mattresses</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">View All Matresses</Link></li>
                </ul>
                <ul className="  top-0  border-[2px] w-[20%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Shop by Firmness</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Extra Firm</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Firm</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Medium Firm</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Medium</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Soft Firm</Link></li>
                  <li className="mb-2"><Link href="#" className="text-[#08c] font-semibold">View All Matresses</Link></li>
  
                </ul>
                <ul className="  top-0  border-[2px] w-[40%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Shop by Size</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Super King(6')</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">King Size(5')</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Double(4'6")</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Small DOuble(4')</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Single(3')</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Small Single(2'6")</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">European</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">View All Matresses</Link></li>
                </ul>
                <ul className="  top-0  border-[2px] w-[20%]   h-[100%] relative">
                 <Image
                 src="/mattress-menu.jpg"
                 alt=""
                 layout="fill"
                 objectFit="cover"
                 />
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-4 max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                Beds
              </li>

              <div className="absolute  bottom-[3%] max-xl:bottom-[-3%] max-lg:bottom-[-6%] bg-white shadow-xl py-5 z-50 dropdowncontent hidden border-[5px] border-[#08c]">
                <ul className="  top-0  border-[2px] w-[20%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Shop by Type</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Memory Foam</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Pocket Sprung</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Orthopaedic</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Latex</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Miracoil</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Natural Fillings</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Cut Bed Mattresses</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Kids Mattresses</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Next Day Mattresses</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">View All Matresses</Link></li>
                </ul>
                
                <ul className="  top-0  border-[2px] w-[60%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Shop by Size</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Super Kings Beds(6')</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">King Size Beds(5')</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Double Beds(4'6")</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Small DOuble Beds(4')</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Single Beds(3')</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Small Single Beds(2'6")</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">View All Beds</Link></li>
                </ul>
                <ul className="  top-0  border-[2px] w-[20%]   h-[100%] relative">
                 <Image
                 src="/divan-beds-menu.jpg"
                 alt=""
                 layout="fill"
                 objectFit="cover"
                 />
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-4  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>Accessories</span>
              </li>

              <div className="absolute  bottom-[3%] max-xl:bottom-[-3%] max-lg:bottom-[-6%] bg-white shadow-xl py-5 z-50 dropdowncontent hidden border-[5px] border-[#08c]">
                <ul className=" w-[20%] p-3 pb-5 h-[100%]">
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Pillows</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Duvetts</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Mattress Toppers</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Headboards</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">All Accessories</Link></li>
                </ul>
               
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-4 max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>Sales</span>
              </li>

              <div className="absolute  bottom-[3%] max-xl:bottom-[-3%] max-lg:bottom-[-6%] bg-white shadow-xl py-5 z-50 dropdowncontent hidden border-[5px] border-[#08c]">
                <ul className="  top-0  border-[2px] w-[20%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]">Sale</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Divan Beds</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Divan Bases Only</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Bed Frames</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Mattresses</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Headboards</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Furniture</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">All Sale Products</Link></li>
                 
                </ul>
                
                <ul className="  top-0  border-[2px] w-[60%] p-3 pb-5 h-[100%]">
                  <li className="mb-5 font-semibold text-[1.2rem]"> Clearance</li>
                <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Divan Bases</Link> </li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Mattresses</Link></li>  
                  <li className="mb-2"> <Link href="#" className="hover:text-[#08c]">Bed Frames</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Headboards</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Furniture</Link></li>
                  <li className="mb-2"><Link href="#" className="hover:text-[#08c]">Clearance Bundles</Link></li>
                  <li className="mb-2"> <Link href="#" className="text-[#08c] font-semibold">View All Clearance</Link></li>
                </ul>
                <ul className="  top-0  border-[2px] w-[20%]   h-[100%] relative">
                 <Image
                 src="/bedfactory-sale-menu.jpg"
                 alt=""
                 layout="fill"
                 objectFit="cover"
                 />
                </ul>
              </div>
            </div>
              <li className="p-4  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>About Us</span>
              </li>
              <li className="p-4   max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>Deliver Information</span>
              </li>
            {/* <div className="flex flex-col items-center relative dropdown"> */}
              <li className="p-4 max-lg:p-3 cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>FAQs</span>
              </li>

              {/* <div className="absolute bottom-[3%] max-xl:bottom-[-3%] max-lg:bottom-[-6%] bg-white shadow-xl pt-16 pb-5  z-50 dropdowncontent hidden border-[5px] border-[#08c]">
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div> */}
            {/* </div> */}
            <li className="p-4 max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Advice Centre</span>
            </li>
            <li className="p-4 max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Contact Us</span>
            </li>
          </ul>
        </nav>

        <div className=" relative w-[100%] hidden max-md:flex border-[2px] border-[#e3e3e5]">
          <div
            className="w-[10%] cursor-pointer flex items-center justify-center hamburger-icon"
            onClick={toggleDropdown}
          >
            <span className="text-[1.2rem] font-bold">&#9776;</span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="   bg-[#f2f2f2] border-[1.5px] border-[#e3e3e5] h-[2.8rem] px-2  placeholder-bold rounded-none w-[80%] "
            style={{ fontWeight: "bold", fontSize: "0.8rem" }}
          />
          <div className="w-[10%] flex justify-center items-center cursor-pointer">
            <Image
              className="z-50  cursor-pointer"
              src={search}
              width={15}
              height={15}
            />
          </div>
        </div>

        <div className="z-50 hidden max-md:block">
          {isDropdownOpen && (
            <div className="absolute top-[24vh] bg-white  py-2 border-[2px] border-[#e3e3e5] dropdown-content w-[50%]">
              <div className="text-[0.9rem] flex justify-between items-center px-4 py-2 cursor-pointer bg-[#08c] text-white font-semibold my-5">
                <span>Menu</span>{" "}
                <span onClick={exitDropdown}>Close &times;</span>
              </div>
              <div className="h-[100%] w-[100%]">
                <div className="text-[0.9rem] px-4 py-2 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Matresses
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Beds
                </div>
                <div className="text-[0.9rem] px-4 py-2 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Accessories
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Sale
                </div>
                <div className="text-[0.9rem] px-4 py-2 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  About Us
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Delivery Information
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  FAQs
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Advise Centre
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                  Contact Us
                </div>
              </div>
            </div>
          )}
        </div>

        <nav className="h-[10vh] py-3 relative max-md:hidden">
          <ul className="p-0 m-0 w-[75%] absolute left-1/2  top-0 h-[100%] flex justify-between -translate-x-1/2  px-2 items-center max-xl:text-[0.8rem] max-2xl:w-[100%] max-md:hidden">
            <li className="flex items-center gap-2">
              <Image src={pricematch} width={23} height={23} alt="price" />
              <span>Price Match Guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={delivery} width={23} height={23} alt="delivery" />
              <span>Free Delivery Over</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={fabric} width={23} height={23} alt="fabric" />
              <span>Free Fabric Samples</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={trustpilot} width={23} height={23} alt="trustpilot" />
              <span>Five Star Trust Pilot Reviews</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
