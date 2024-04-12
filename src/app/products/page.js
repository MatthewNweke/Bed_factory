"use client";
import { useState,useEffect } from "react";
import Image from "next/image";


const Products = () => {
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState("/Divan-Base-Only-b.png");
  const [amount, setAmount] = useState("£200.00"); // Initial amount value

  // Handler function to update selected image path
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };
  const handleImageClickType = (path) => {
    setSelectedImagePathType(path);
  };


  const updateAmount = () => {
    const bedSizeAmount = getTextForImageBedSize().amount;
    const bedTypeAmount = getTextForImageBedType().amount;
    // Assuming both amounts are in the same currency and format
    setAmount((parseFloat(bedSizeAmount.replace("£", "")) + parseFloat(bedTypeAmount.replace("£", ""))).toFixed(2));
  };

  /// Function to get text and amount based on selected image
  const getTextForImageBedSize = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return { text: "Size - Small Single 2ft6", amount: "£490.00" };
      case "/single2.png":
        return { text: "Size - Single 3ft", amount: "£490.00" };
      case "/Double-small.png":
        return { text: "Size - Small Double 4ft", amount: "£310.00" };
      case "/Double-small2.png":
        return { text: "Size - Double 4ft6", amount: "£310.00" };
      case "/Double-small3.png":
        return { text: "Size - King 5ft", amount: "£365.00" };
      case "/Double-small4.png":
        return { text: "Size - Superking 6ft", amount: "£415.00" };
      default:
        return { text: "Size - Small Single 2ft6", amount: "£490" };
    }
  };



  const getTextForImageBedType = () => {
    switch (selectedImagePathType) {
      case "/Divan-Base-Only-b.png.png":
        return { text: "Type - Base Only +£0", amount: "£225.00" };
      case "/2-Continentel-Drawer-same-side-b.png":
        return { text: "Type - 2 Drawer Same Side +£40", amount: "£265.00" };
      case "/2-Draw-Same-Side-b.png":
        return { text: "Type - 2 Drawer Continental +£40", amount: "£265.00" };
      case "/Side-Opening-Ottoman-b.jpg":
        return { text: "Type - End Lift Ottoman Bed +£60", amount: "£490.00" };
      case "/End-Foot-Opening.png":
        return { text: "Type - Side Lift Ottoman Bed +£60", amount: "£490.00" };
      
      default:
        return { text: "Type - Side Lift Ottoman Bed +£60", amount: "£225" };
    }
  };


  useEffect(() => {
    updateAmount();
  }, [selectedImagePath, selectedImagePathType]);


  return (
    <div >
      <div className="my-10 w-[100%] px-5 max-sm:px-1">
        <div className="flex  w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
          {/* <ProductSidebar /> */}

          <div className="w-full  flex justify-center">
            <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <div className="max-sm:w-full w-[100%] h-[70vh] relative max-md:h-[60vh] max-sm:h-[50vh]">
                <Image
                  src="/OttomanEndLiftBaseclosedBg.jpg"
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
                {selectedImagePath === "/OttomanEndLiftBaseclosedBg.jpg" && (
                  <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#00acbb]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex gap-5 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
                <div className="w-1/4  max-sm:w-1/4  max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman-Side.jpeg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman-Side.jpeg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman_Bed_side_opening.jpg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    objectFit="cover"
                    layout="fill"
                    className="-scale-x-100"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


{/* Bed Size section */}
          <div className="max-lg:mt-10  w-full max-lg:text-center">
            <div>
              <p className="text-[1.2rem]">Ottoman Bed Without Headboard</p>
              <span className="text-[#00acbb] font-semibold text-[1.2rem]">
                {amount}
              </span>
            </div>

            <div className="  py-10">
              <div className="border-black border-[2px] w-[85%] my-0 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                {getTextForImageBedSize().text}
              </div>

              <div className="grid bg-[#f1feff] min-h-[40vh] rounded-2xl justify-center py-10 grid-cols-5 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                <div
                  className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/single.png" &&
                    " border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/single.png")}
                >
                  <Image
                  // add single image later
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/single.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/single2.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/single2.png")}
                >
                  <Image
                  // add single image later
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/single2.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/Double-small.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/Double-small.png")}
                >
                  <Image
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/Double-small.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/Double-small2.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/Double-small2.png")}
                >
                  <Image
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/Double-small2.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/Double-small3.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/Double-small3.png")}
                >
                  <Image
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/Double-small3.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/Double-small4.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/Double-small4.png")}
                >
                  <Image
                    src="/Double-small.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePath === "/Double-small4.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>












{/* Bed types section*/}
              <div>
              <div className="border-black border-[2px] w-[85%] my-0 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                {getTextForImageBedType().text}
              </div>
              <div>
            </div>
              <div className="grid bg-[#f1feff] min-h-[40vh] rounded-2xl justify-center py-10 grid-cols-6 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                <div
                  className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePathType === "/Divan-Base-Only-b.png" &&
                    " border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClickType("/Divan-Base-Only-b.png")}
                >
                  <Image
                    src="/Divan-Base-Only-b.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePathType === "/Divan-Base-Only-b.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePathType === "/2-Continentel-Drawer-same-side-b.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClickType("/2-Continentel-Drawer-same-side-b.png")}
                >
                  <Image
                    src="/2-Continentel-Drawer-same-side-b.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePathType === "/2-Continentel-Drawer-same-side-b.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePathType === "/2-Draw-Same-Side-b.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClickType("/2-Draw-Same-Side-b.png")}
                >
                  <Image
                    src="/2-Draw-Same-Side-b.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePathType === "/2-Draw-Same-Side-b.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePathType === "/Side-Opening-Ottoman-b.jpg" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClickType("/Side-Opening-Ottoman-b.jpg")}
                >
                  <Image
                    src="/Side-Opening-Ottoman-b.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePathType === "/Side-Opening-Ottoman-b.jpg" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>


                <div
                  className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePathType === "/End-Foot-Opening.png" &&
                    "border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClickType("/End-Foot-Opening.png")}
                >
                  <Image
                    src="/End-Foot-Opening.png"
                    alt="openbed"
                    layout="fill"
                    objectFit="contain"
                  />
                  {selectedImagePathType === "/End-Foot-Opening.png" && (
                    <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

               
               
              </div>
              </div>
              <div>

                
                {/* <ProductsPage/> */}
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
