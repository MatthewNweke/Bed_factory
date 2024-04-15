"use client";
import "@fortawesome/fontawesome-free/css/all.css";
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
import "../../css/styles.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Material sizes for Beds
  const [BedOpen, setBedOpen] = useState(false);
  const [shopByBedSize, setshopByBedSize] = useState(false);
  const [shopByBedType, setShopByBedType] = useState(false);
  const [shopByBedFirmness, setShopByBedFirmness] = useState(false);

  // Material sizes for Matresses
  const [shopBySize, setshopBySize] = useState(false);
  const [matressesOpen, setIsMatressesOpen] = useState(false);
  const [shopByType, setShopByType] = useState(false);
  const [shopByFirmness, setShopByFirmness] = useState(false);

  const displayBedShops = () => {
    setshopByBedSize(!shopByBedSize);
    setIsMatressesOpen(!matressesOpen);
    setBedOpen(!BedOpen);
    setShopByType(!setShopByType);
  };

  // show matresses when backward button is clicked
  const displayMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setBedOpen(false);
    setIsMatressesOpen(false);
  };

  

  const showMattresesBySize = () => {
    setIsMatressesOpen(!matressesOpen);
    setshopBySize(false);
  };
  const showMattresesByType = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByType(false);
  };
  const showMattresesByFirmness = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByFirmness(false);
  };

  // show beds when backward button is clicked
  const showBedsBySize = () => {
    setBedOpen(!BedOpen);
    setshopByBedSize(false);
  };

  const displayShopsBedSizes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(!matressesOpen);
    setBedOpen(!BedOpen);
  };
  const displayShopsBedTypes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(!matressesOpen);
    setBedOpen(!BedOpen);
  };

  const displayBed = () => {
    setBedOpen(!BedOpen);
    setIsDropdownOpen(false);
    setIsMatressesOpen(!matressesOpen);
  };

  const displayMatresses = () => {
    setIsMatressesOpen(!matressesOpen);
    setIsDropdownOpen(false);
  };
  const displayShops = () => {
    setshopBySize(!shopBySize);
    setIsMatressesOpen(!matressesOpen);
  };
  const displayShopsSizes = () => {
    setShopByType(!shopByType);
    setIsMatressesOpen(!matressesOpen);
  };
  const exitShopByBedTypeDropdown = () => {
    setShopByBedType(!shopByBedType);
  };

  const displayShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
    setIsMatressesOpen(!matressesOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setshopBySize(false);
    setShopByType(false);
    setShopByFirmness(false);
  };

  const exitBedSizeDropdown = () => {
    setshopByBedSize(!shopByBedSize);
  };
  const exitDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const exitMatressesDropdown = () => {
    setIsMatressesOpen(!matressesOpen);
  };
  const exitBedDropdown = () => {
    setBedOpen(!BedOpen);
    setIsMatressesOpen(!matressesOpen);
  };
  const exitShopDropdown = () => {
    setshopBySize(!shopBySize);
  };
  const exitShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
  };
  const exitShopByTypeDropdown = () => {
    setShopByType(!shopByType);
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
          !event.target.closest(".hamburger-icon") &&
          !event.target.closest(".mattress-dropdown")
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
                    className="border-[#0b1a44]  rounded-xl  bg-[#f2f2f2] border-[1.5px] outline-none h-[2.8rem] px-2  placeholder-bold  w-[100%] max-xl:w-[50%] "
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
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setIsDropdownOpen(false)}
            ></div>
          )}

          {matressesOpen && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => {
                setIsMatressesOpen(false);
                // setBedOpen(false);
              }}
            ></div>
          )}
          {/* {BedOpen && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setBedOpen(false)}
            ></div>
          )} */}

          {shopBySize && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setshopBySize(false)}
            ></div>
          )}
          {shopByType && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByType(false)}
            ></div>
          )}
          {shopByFirmness && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByFirmness(false)}
            ></div>
          )}

          {shopByBedSize && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setshopByBedSize(false)}
            ></div>
          )}

          {shopByBedType && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByBedType(false)}
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
            <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold relative">
              Home
            </li>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                Mattresses
              </li>

              <div className=" bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent mattress-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="  top-0   w-[25%] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Type
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Memory Foam
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Pocket Sprung
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Orthopaedic
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Latex
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Miracoil
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Natural Fillings
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Cut Bed Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Kids Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Next Day Mattresses
                    </Link>
                  </li>
                </ul>
                <ul className=" border-[2px] w-[25%]  h-[100%] px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Firmness
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Extra Firm
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Firm
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Medium Firm
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Medium
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Soft Firm
                    </Link>
                  </li>
                </ul>
                <ul className=" w-[25%]  h-[100%] flex flex-col px-10 box-border py-8  max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Size
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Super King(6&apos;)
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      King Size(5&apos;)
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Double(4&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Small Double(4&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Single(3&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Small Single(2&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      European
                    </Link>
                  </li>
                </ul>

                <ul className=" w-[25%]  h-[100%] relative ">
                  <Image
                    src="/mattress-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b-2xl"
                  />
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Matresses</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                Beds
              </li>
              <div className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent mattress-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className=" w-[33%]  h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Type
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Memory Foam
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Pocket Sprung
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Orthopaedic
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Latex
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Miracoil
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Natural Fillings
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Cut Bed Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Kids Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Next Day Mattresses
                    </Link>
                  </li>
                </ul>

                <ul className="border w-[33%] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Size
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Super Kings Beds(6&apos;)
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      King Size Beds(5&apos;)
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Double Beds(4&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Small Double Beds(4&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Single Beds(3&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Small Single Beds(2&apos; 6&apos;&apos;)
                    </Link>
                  </li>{" "}
                  <li className=" absolute right-5 bottom-5">
                    {" "}
                    <Link
                      href="#"
                      className="bg-[#08c]  text-white px-8 py-[0.8rem] inline-block h-[100%] hover:bg-[#3b82f680]  transition border-color text duration-100 ease-out delay-0 font-semibold"
                    >
                      View All Beds
                    </Link>
                  </li>
                </ul>
                <ul className=" w-[33%] h-[100%] relative">
                  <Image
                    src="/divan-beds-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Beds</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>Accessories</span>
              </li>

              <div className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent accessories-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="py-8 px-10 relative h-[100%] max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Pillows
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Duvetts
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Mattress Toppers
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Accessories</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span>Sales</span>
              </li>

              <div className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent sales-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="  w-[33%]  h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1.2rem]">Sale</li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Divan Beds
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Divan Bases Only
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Bed Frames
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Furniture
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      All Sale Products
                    </Link>
                  </li>
                </ul>

                <ul className="  w-[33%] border-[1px] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1.2rem]">
                    {" "}
                    Clearance
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Divan Bases
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Mattresses
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="#" className="hover:text-[#08c]">
                      Bed Frames
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Furniture
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#" className="hover:text-[#08c]">
                      Clearance Bundles
                    </Link>
                  </li>
                 
                </ul>
                <ul className="  top-0  border-[2px] w-[33%]   h-[100%] relative">
                  <Image
                    src="/bedfactory-sale-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </ul>

                
                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl ">
                  <button className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Accessories</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <li className="  p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>About Us</span>
            </li>
            <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Deliver Information</span>
            </li>
            {/* <div className="flex flex-col items-center relative dropdown"> */}
            <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>FAQs</span>
            </li>

            <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Advice Centre</span>
            </li>
            <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
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
            className="   bg-[#f2f2f2]  border-[1.5px] border-[#e3e3e5] h-[2.8rem] px-2  placeholder-bold  w-[80%] "
            style={{ fontWeight: "bold", fontSize: "0.8rem" }}
          />
          <div className="w-[10%] flex justify-center items-center cursor-pointer">
            <Image
              className="z-50  cursor-pointer"
              src={search}
              width={15}
              height={15}
              alt="searchbox"
            />
          </div>
        </div>

        <div className="z-50 hidden max-md:block">
          {isDropdownOpen && (
            <div className={`absolute top-0 h-[100vh] bg-white left-0 border-[2px] border-[#e3e3e5] dropdown-content w-[60%] animate__animated animate__slideInLeft`}>
              <div className="text-[0.9rem]  flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <span>Menu</span>
                {""}
                <div onClick={exitDropdown} className="flex items-center gap-1">
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="h-[100%] w-[100%]">
                <div
                  onClick={displayMatresses}
                  className="text-[0.9rem]  border-[1px] p-4 flex  gap-8 items-center cursor-pointer font-bold"
                >
                  <span> Mattresses</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div
                  onClick={displayBed}
                  className="text-[0.9rem] p-4 border-[1px] flex gap-8 cursor-pointer items-center  font-bold"
                >
                  <span> Beds</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div className="text-[0.9rem] flex gap-8 p-4 items-center border-[1px]   cursor-pointer  font-bold">
                  <span> Accessories</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div className="text-[0.9rem] p-4 border-[1px] items-center  flex gap-8 cursor-pointer  font-bold">
                  <span> Sale</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div className="leading-8 py-3">
                  <div className="text-[0.9rem] px-4 py-2 cursor-pointer  ">
                    About Us
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer  ">
                    Delivery Information
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer">
                    FAQs
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer ">
                    Advise Centre
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="relative">
              {/* Matresses Open */}

              {matressesOpen && (
                <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[60%]">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={displayMenu}
                      ></i>{" "}
                      <span>Mattresses</span>{" "}
                    </div>
                    <div
                      onClick={exitMatressesDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div
                    onClick={displayShops}
                    className="text-[0.9rem] flex p-4 gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Size</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>

                  <div
                    onClick={displayShopsSizes}
                    className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Type</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div
                    onClick={displayShopByFirmness}
                    className="text-[0.9rem]  gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Firmness</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                    <span> All Matresses</span>{" "}
                  </div>
                </div>
              )}

              {shopBySize && (
                <div className="bg-white  fixed top-0 w-[60%]  h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesBySize}
                      ></i>{" "}
                      <span>Shop By Size</span>{" "}
                    </div>
                    <div
                      onClick={exitShopDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Super King(6&apos;)</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span> King Size(5&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span> Double(4&apos;6&apos;&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span> Small Double(4&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span> Single(3&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Small Single(2&apos;6&apos;&apos;)</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>European</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <Link href="#" className="text-[#08c] font-semibold">
                      View All Matresses
                    </Link>
                  </div>
                </div>
              )}

              {shopByType && (
                <div className="bg-white  fixed top-0 w-[60%]  h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesByType}
                      ></i>{" "}
                      <span>Shop By Type</span>{" "}
                    </div>
                    <div
                      onClick={exitShopByTypeDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Memory Foam</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Pocket Sprung</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Orthopaedic</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Latex</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Miracoil</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Cot Bed Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Kids Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Next Day Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <Link href="#" className="text-[#08c] font-semibold">
                      View All Matresses
                    </Link>
                  </div>
                </div>
              )}

              {shopByFirmness && (
                <div className="bg-white  fixed top-0 w-[60%]  h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesByFirmness}
                      ></i>{" "}
                      <span>Shop By Firmness</span>{" "}
                    </div>
                    <div
                      onClick={exitShopByFirmness}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Memory Foam</span>{" "}
                  </div>

                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Pocket Sprung</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Orthopaedic</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Latex</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Miracoil</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Cot Bed Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Kids Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Next Day Mattresses</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <Link href="#" className="text-[#08c] font-semibold">
                      View All Matresses
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bed Open */}

          {BedOpen && (
            <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[60%]">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex gap-5 items-center">
                  {" "}
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={displayMenu}
                  ></i>{" "}
                  <span>Bed</span>{" "}
                </div>
                <div
                  onClick={exitBedDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div
                onClick={displayBedShops}
                className="text-[0.9rem] flex p-4 gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Size</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>

              <div
                onClick={displayShopsBedTypes}
                className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Type</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>

              <div className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer  font-semibold">
                <span> All Beds</span>{" "}
              </div>
            </div>
          )}

          {shopByBedSize && (
            <div className="bg-white  fixed top-0 w-[60%]  h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={showBedsBySize}
                  ></i>{" "}
                  <span>Shop By Size</span>{" "}
                </div>
                <div
                  onClick={exitBedSizeDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                <span>Super King(6&apos;)</span>{" "}
              </div>

              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> King Size(5&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                <span> Double(4&apos;6&apos;&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> Small Double(4&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> Single(3&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span>Small Single(2&apos;6&apos;&apos;)</span>{" "}
              </div>

              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <Link href="#" className="text-[#08c] font-semibold">
                  View All Beds
                </Link>
              </div>
            </div>
          )}
          {shopByBedType && (
            <div className="bg-white  fixed top-0 w-[60%]  h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <span>Shop by Type</span>{" "}
                <div
                  onClick={exitShopByBedTypeDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                <span>Super King(6&apos;)</span>{" "}
              </div>

              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> King Size(5&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                <span> Double(4&apos;6&apos;&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> Small Double(4&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span> Single(3&apos;)</span>{" "}
              </div>
              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <span>Small Single(2&apos;6&apos;&apos;)</span>{" "}
              </div>

              <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                <Link href="#" className="text-[#08c] font-semibold">
                  View All Beds
                </Link>
              </div>
            </div>
          )}
        </div>

        <nav className="h-[10vh] py-3 relative max-md:hidden">
          <ul className="p-0 m-0 w-[75%] absolute left-1/2  top-0 h-[100%] flex justify-between -translate-x-1/2  px-2 items-center max-xl:text-[0.8rem] max-2xl:w-[100%] max-md:hidden">
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={pricematch} width={23} height={23} alt="price" />
              <span>Price Match Guarantee</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={delivery} width={23} height={23} alt="delivery" />
              <span>Free Delivery Over</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={fabric} width={23} height={23} alt="fabric" />
              <span>Free Fabric Samples</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
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
