"use client";
import { useState } from "react";
import Image from "next/image";


const Products = () => {
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");

  // Handler function to update selected image path
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };

  /// Function to get text and amount based on selected image
  const getTextForImage = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return { text: "Size - Small Single 2ft6", amount: "£200.00" };
      case "/single2.png":
        return { text: "Size - Single 3ft", amount: "£200.00" };
      case "/Double-small.png":
        return { text: "Size - Small Double 4ft", amount: "£245.00" };
      case "/Double-small2.png":
        return { text: "Size - Double 4ft6", amount: "£245.00" };
      case "/Double-small3.png":
        return { text: "Size - King 5ft", amount: "£300.00" };
      case "/Double-small4.png":
        return { text: "Size - Superking 6ft", amount: "£350.00" };
      default:
        return { text: "Size - Small Single 2ft6", amount: "£200" };
    }
  };

  return (
    <div >
      <div className="my-10 w-[100%] px-5 max-md:px-0">
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

          <div className="max-lg:mt-10  w-full ">
            <div>
              <p>Ottoman Bed Without Headboard</p>
              <span className="text-[#00acbb] font-semibold text-[1.2rem]">
                {getTextForImage().amount}
              </span>
            </div>

            <div className="bg-[#f1feff] h-[70vh] py-10">
              <div className="border-black border-[2px] w-[85%] my-0 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                {getTextForImage().text}
              </div>

              <div className="flex  justify-around max-sm:flex-wrap max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                <div
                  className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                    selectedImagePath === "/single.png" &&
                    " border-[2px] border-black"
                  }`}
                  onClick={() => handleImageClick("/single.png")}
                >
                  <Image
                    src="/Single.png"
                    alt="single1"
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
                    src="/Single.png"
                    alt="single2"
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
              <div>
                
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
