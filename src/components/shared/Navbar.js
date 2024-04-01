"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 max-xl:py-0">
      <header className="flex flex-col relative max-xl:px-3 max-sm:px-1">
        <button
          className="hidden max-sm:block absolute right-2 top-2 border-[1px] z-50 w-[10%] text-[1.2rem]  max-[400px]:py-[0.1rem] py-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          &#9776;
        </button>

        {isOpen && (
        <div
        className={` transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 invisible'
        }  right-0 mt-2 py-5 bg-white rounded-md shadow-lg z-10 `}
      >
         <div className="flex items-center flex-col gap-10 ">
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={phoneimg} width={18} height={18} alt="" />
                <span className="font-bold text-[0.6rem]">Phone</span>
              </div>
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
      )}
        <nav className="h-[15vh] py-3 flex items-center gap-[5%] max-xl:flex-col ">
          <div className="flex items-center w-[55%] justify-end gap-[10%]  max-xl:flex-col max-xl:justify-start max-xl:items-start max-xl:w-[100%] ">
            <Link href={""}>
              <Image
                className="max-xl:w-32 max-sm:w-24 "
                src={logo}
                width={170}
                height={170}
                alt="logo"
              />
            </Link>
            {/* Input field */}

            <div className="flex items-center max-xl:w-[100%] max-xl:relative max-md:px-2 max-md:right-1">
              <div className="flex items-center w-[100%] z-50 ">
                <button className="hidden max-md:block z-50 w-[10%] text-[1.2rem]  max-[400px]:py-[0.1rem] py-2 max-lg:border-[1px] cursor-pointer">
                  &#9776;
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-[#0b1a44]  bg-[#f2f2f2] border-[1.5px] outline-none h-[2.8rem] px-2  placeholder-bold rounded-none w-[25.375rem]  max-md:w-[85%] max-xl:w-[100%] max-xl:absolute max-md:right-[3%] max-md:h-[2.5rem] max-[400px]:h-[2rem] max-[400px]:right-0"
                  style={{ fontWeight: "bold", fontSize: "0.8rem" }}
                />
              </div>
              <Image
                className="relative right-[8%] max-md:right-[5%] z-50  cursor-pointer max-xl:absolute max-xl:right-5"
                src={search}
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="w-[40%] flex gap-[10%] max-xl:absolute max-2xl:top-14 max-xl:px-2 max-xl:left-36 max-xl:justify-end  max-xl:gap-[5%] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[60%]  max-sm:top-10 max-sm:hidden">
            <div className="flex items-center cursor-pointer max-xl:mr-5">
              <div className="flex flex-col justify-center">
                <Image
                  src={phoneimg}
                  width={35}
                  height={35}
                  alt=""
                  className="max-xl:w-5 max-xl:h-5"
                />
                <span className="font-bold text-[0.6rem] hidden max-xl:inline">
                  phone
                </span>
              </div>
              <span className="font-bold max-xl:text-[0.8rem] max-xl:hidden">
                0151 548 1554
              </span>
            </div>

            <div className="flex items-center gap-10 ">
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
        <nav className="h-[12vh] py-3  relative max-xl:mt-24 max-md:hidden max-lg:mt-32">
          <ul className="m-0 p-0 h-[100%] text-[0.9rem] flex w-[80%]  items-center justify-between  px-2 top-0 absolute left-1/2 -translate-x-1/2 max-2xl:w-[100%] max-xl:text-[0.8rem] flex-wrap max-xl:justify-center">
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
              Beds
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto  max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Mattresses
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Headboards
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Furniture
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold flex gap-1 justify-center">
              <span>Custom</span>
              <span>Sizes</span>
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Brands
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Accessories
            </li>
            <li className="p-4 w-[10%] text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold flex gap-1 justify-center">
              <span>Next</span>
              <span>Day</span>
            </li>
            <li className="p-4 w-[10%] max-xl:w-[12%] max-lg:w-auto max-lg:p-3 text-center cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              Sale
            </li>
          </ul>
        </nav>
        <nav className="h-[10vh] py-3 relative">
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
