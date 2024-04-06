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
  const [openSide, setOpenSide] = useState(false);

 

  return (
    <div className="py-5 max-xl:py-0">
      <header className="flex flex-col relative max-xl:px-3 max-sm:px-1">
        <nav className="h-[15vh]  py-3 flex items-center gap-[5%] max-xl:flex-col ">
          <div className="flex items-center w-[55%] justify-end gap-[10%] max-xl:gap-[5%]  max-xl:w-[100%] max-sm:h-[100%]">
            <Link href={""}>
              <Image
                className="max-xl:w-32 max-sm:w-24 "
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

          <div className="w-[40%] flex gap-[10%] max-xl:absolute max-xl:h-[15vh] max-xl:top-0 max-xl:items-center  right-0 max-xl:justify-end  max-xl:gap-[5%] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[60%]    max-xl:px-5 max-sm:items-center">
            <div className="flex items-center cursor-pointer mr-5">
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
        <nav className=" relative  max-md:hidden  bg-[#EEEEEE] py-3 px-3">
          <ul className="m-0 p-0 h-[100%]  text-[0.9rem] flex items-center justify-center flex-wrap max-xl:text-[0.8rem] max-2xl:w-[100%]">
            <li className="p-4   max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
              Home
            </li>
            <li className="p-4 flex gap-1   max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Bed</span>
              <span>Frames</span>
            </li>
            <li className="p-4  flex gap-1  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Orthopaedic</span>
              <span>Mattress</span>
            </li>
            <li className="p-4 flex gap-1  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Premium</span>
              <span>Range</span>
            </li>
            <li className="p-4 flex gap-1  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold  ">
              <span>Elegant</span>
              <span>Range</span>
              <span>(Wood</span>
              <span> Filling)</span>
            </li>
            <li className="p-4  max-lg:p-3  flex gap-1  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Bedroom</span>
              <span>Accessories</span>
            </li>
            <li className="p-4  max-lg:p-3 flex gap-1  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Terms</span>
              <span>and</span>
              <span>Conditions</span>
            </li>
            <li className="p-4  cursor-pointer  hover:bg-[#08c] hover:text-white  font-semibold flex gap-1">
              <span>Order</span>
              <span>Swatches</span>
            </li>
            <li className="p-4    max-lg:p-3  flex gap-1 cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Contact</span>
              <span>Us</span>
            </li>
            <li className="p-4 flex gap-1  max-lg:p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold">
              <span>Customer</span>
              <span>Photos</span>
            </li>
          </ul>
        </nav>

        <div className=" relative w-[100%] hidden max-md:flex border-[2px] border-[#e3e3e5]">
          <div className="w-[10%] cursor-pointer flex items-center justify-center">
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

        {openSide && (
          <div
            onClick={removeOverlay}
            className={` transition-opacity ${
              openSide ? "opacity-100" : "opacity-0 invisible"
            }   py-5 bg-[#80808030] z-50 h-[100vh] w-[100%] left-0 fixed overflow-hidden`}
          >
            {/* overlay */}
            <div
              className="w-48 shadow-xl absolute bottom-[20%]  bg-white py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="px-2 mb-5 font-semibold">Menu</p>
              <div className="leading-9">
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Beds
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Mattresses
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Headboards
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Furniture
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Custom Sizes
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Brands
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Accessories
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Next Day
                </p>
                <p className="border-[1px] px-2 hover:bg-[#08c] py-1 hover:text-white">
                  Sale
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
