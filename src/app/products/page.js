"use client";
import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import Image from "next/image";
import SlipLids from "@/components/cards/SlipLids";
import ColorPalette from "@/components/cards/ColorPalette";

const Products = () => {
  const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];

  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState(
    "/Divan-Base-Only-b.png"
  );
  const [selectedImagePathDepth, setSelectedImagePathDepth] =
    useState("/Deep-Base.png");
  const [amount, setAmount] = useState("£200.00"); // Initial amount value

  const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);

  const displayDepthOptions = () => {
    setShowBedDephthOptions(true);
  };
  const removeDepthOptions = () => {
    setShowBedDephthOptions(false);
  };
  // Handler function to update selected image path
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };
  const handleImageClickType = (path) => {
    setSelectedImagePathType(path);
  };
  const handleImageClickDepth = (path) => {
    setSelectedImagePathDepth(path);
  };

  const updateBedSizeAmount = () => {
    const bedSizeAmount = getTextForImageBedSize().amount;

    setAmount(bedSizeAmount);
  };
  const updateBedTypeAmount = () => {
    const bedTypeAmount = getTextForImageBedType().amount;

    setAmount(bedTypeAmount);
  };
  const updateBedDepthAmount = () => {
    const bedDepthAmount = getTextForImageBedDepth().amount;

    setAmount(bedDepthAmount);
  };

  // slip lids

  /// Function to get text and amount based on selected image
  const getTextForImageBedSize = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490.00",
        };
      case "/single2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Single 3ft
            </p>
          ),
          amount: "£490.00",
        };
      case "/Double-small.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Double 4ft
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Double 4ft6
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small3.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - King 5ft
            </p>
          ),
          amount: "£365.00",
        };
      case "/Double-small4.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Superking 6ft
            </p>
          ),
          amount: "£415.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490",
        };
    }
  };

  const getTextForImageBedType = () => {
    switch (selectedImagePathType) {
      case "/Divan-Base-Only-b.png.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£225.00",
        };
      case "/2-Continentel-Drawer-same-side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/2-Draw-Same-Side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/Side-Opening-Ottoman-b.jpg":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - End Lift Ottoman Bed
              +£60
            </p>
          ),
          amount: "£490.00",
        };
      case "/End-Foot-Opening.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£490.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£225",
        };
    }
  };

  const getTextForImageBedDepth = () => {
    switch (selectedImagePathDepth) {
      case "/Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£285.00",
        };
      case "/Standard-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£465.00",
        };
      case "/Super-Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£735.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£285",
        };
    }
  };

  useEffect(() => {
    updateBedSizeAmount();
  }, [selectedImagePath]);

  useEffect(() => {
    updateBedTypeAmount();
  }, [selectedImagePathType]);

  useEffect(() => {
    updateBedDepthAmount();
  }, [selectedImagePathDepth]);

  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000); // Duration of the shake animation
    }, 5000); // Interval between each shake animation

    return () => clearInterval(interval);
  }, []);

  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter

  const handleIncrease = () => {
    setCounter(counter + 1); // Increment counter
    setAmount(BtnAmount + BtnAmount); // Double the amount
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1); // Decrement counter
      setBtnAmount(amount - amount / 2); // Halve the amount
    }
  };

  return (
    <div>
      <div className="my-10 w-[100%] px-5 max-sm:px-1">
        <div className="flex  w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
          {/* <ProductSidebar /> */}

          <div className="w-full  flex justify-center">
            <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <div className="max-sm:w-full w-[100%] min-h-[60vh] relative max-md:min-h-[50vh] max-sm:min-h-[40vh]">
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

              <div className="flex gap-1 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
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

            <div className="  py-10 ">
              <div className="bg-[#f1feff] min-h-[40vh] flex flex-col justify-center rounded-xl">
                <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                  {getTextForImageBedSize().text}
                </div>
                <div className="grid gap-y-20 rounded-2xl justify-items-center py-10 grid-cols-5 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Small Single 2ft6
                    </div>
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Single 3ft
                    </div>
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Small Double 4ft
                    </div>
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Double 4ft6
                    </div>
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      King 5ft
                    </div>
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Super King 6ft
                    </div>
                  </div>
                </div>
              </div>

              {/* Bed types section*/}
              <div className="bg-[#f1feff] min-h-[60vh] mt-10 flex flex-col rounded-xl">
                <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                  {getTextForImageBedType().text}
                </div>
                <div className="grid  justify-items-center rounded-2xl  py-10 grid-cols-6 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                  <div
                    className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/Divan-Base-Only-b.png" &&
                      " border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/Divan-Base-Only-b.png");
                      removeDepthOptions();
                    }}
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Base Only +£0
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType ===
                        "/2-Continentel-Drawer-same-side-b.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType(
                        "/2-Continentel-Drawer-same-side-b.png"
                      );
                      removeDepthOptions();
                    }}
                  >
                    <Image
                      src="/2-Continentel-Drawer-same-side-b.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType ===
                      "/2-Continentel-Drawer-same-side-b.png" && (
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      2 Drawer same side +£40
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/2-Draw-Same-Side-b.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/2-Draw-Same-Side-b.png");
                      removeDepthOptions();
                    }}
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      2 Drawer Continental +£40
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/Side-Opening-Ottoman-b.jpg" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/Side-Opening-Ottoman-b.jpg");
                      displayDepthOptions();
                    }}
                  >
                    <Image
                      src="/Side-Opening-Ottoman-b.jpg"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType ===
                      "/Side-Opening-Ottoman-b.jpg" && (
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      End lift Ottoman Bed +£60
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/End-Foot-Opening.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/End-Foot-Opening.png");
                      displayDepthOptions();
                    }}
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
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Side Lift Ottoman Bed +£60
                    </div>
                  </div>
                </div>
              </div>

              {/* <div><ProductsPage/></div> */}
              {/* Bed Depth section : */}

              {showBedDephthOptions && (
                <div className="bg-[#f1feff] relative min-h-[70vh] mt-10 flex flex-col rounded-xl">
                  <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                    {getTextForImageBedDepth().text}
                  </div>
                  <div className="grid  justify-items-center rounded-2xl  py-10 grid-cols-4 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                    <div
                      className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Deep-Base.png" &&
                        " border-[2px] border-black"
                      }`}
                      onClick={() => handleImageClickDepth("/Deep-Base.png")}
                    >
                      <Image
                        src="/Deep-Base.png"
                        alt="deepbase"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Deep-Base.png" && (
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

                      <div className="absolute top-full mb-10 w-full left-0 text-center">
                        Standard Depth 23cm ( Base Height 37cm ) +£0
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Standard-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Standard-Base.png")
                      }
                    >
                      <Image
                        src="/Standard-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Standard-Base.png" && (
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
                      <div className="absolute top-full mb-10 w-full left-0 text-center">
                        Deep Base Depth 30.5cm (Base Height 44cm) +£180
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Super-Deep-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Super-Deep-Base.png")
                      }
                    >
                      <Image
                        src="/Super-Deep-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Super-Deep-Base.png" && (
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

                      <div className="absolute top-full mb-10 w-full left-0 text-center">
                        Super Deep Depth 37cm (Base Height 50cm) +£450
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e0dfdf] border-[2px] absolute bottom-5 w-[85%] left-1/2 -translate-x-1/2  p-2  rounded-lg text-center">
                    Base Height excludes mattress heights..
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-16">
                <SlipLids
                  defaultText="Anti-Slip Lids - Standard Top (Bed Side Supported By Wall) +£0e"
                  buttonTexts={[
                    "Anti-Slip Lids - Standard Top (Bed Side Supported By Wall) +£0",
                    "Foam Padded Bed Base +£125",
                  ]}
                />

                <SlipLids
                  defaultText="Base Padding - Foam Padded Bed Base +£125"
                  buttonTexts={[
                    "No Base Padding +£0",
                    "Foam Padded Bed Base +£125",
                  ]}
                  // buttonStyles={buttonStyles}
                />

                <SlipLids
                  defaultText="Re-enforcement - Re-Inforced Storage Area & Lids +£80"
                  buttonTexts={[
                    "Standard Market Build +£0",
                    "Re-Inforced Storage Area & Lids +£80",
                  ]}
                  // buttonStyles={buttonStyles}
                />

                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                />
              </div>
              <div>
                <ColorPalette />
              </div>

              <div>
                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                />

                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                />
                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                />
                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                />
              </div>

              <div className="mt-12">
      <div>
        {/* <p className="text-[#00acbb] font-semibold text-[1.2rem] mb-3">{amount}</p> */}

        <div className="flex gap-5 max-md:justify-center">
          <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[25%] text-sm max-sm:py-[0.3rem]">
            <svg
              focusable="false"
              className="icon icon--minus w-3 h-3 cursor-pointer"
              viewBox="0 0 10 2"
              role="presentation"
              onClick={handleDecrease}
            >
              <path d="M10 0v2H0V0z" fill="currentColor"></path>
            </svg>

            <span>{counter}</span>

            <svg
              focusable="false"
              className="icon icon--plus w-3 h-3 cursor-pointer"
              viewBox="0 0 10 10"
              role="presentation"
              onClick={handleIncrease}
            >
              <path
                d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>

          <button
            className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] px-8 rounded-2xl max-sm:py-[0.3rem] ${
              shake ? "animate__animated animate__shakeX" : ""
            }`}
            onClick={() => console.log("Add to cart clicked")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
