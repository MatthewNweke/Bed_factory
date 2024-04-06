"use client";
import { useState } from "react";
import Image from "next/image";
import ProductSidebar from "@/components/sidebar/ProductSidebar";

const Products = () => {
  const [selectedValue, setSelectedValue] = useState("");

  // Handler function to update selected value
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClearClick = () => {
    setSelectedValue(""); // Reset selected value
  };
  // Render different divs based on selected value
  const renderSelectedDiv = () => {
    switch (selectedValue) {
      case "option1":
        return (
          <div className="grid grid-cols-4 place-items-center mt-5 w-[80%] gap-2 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] relative">
              <Image
                src="/ignore4.jpg"
                alt="ignore4"
                layout="fill"
                // objectFit="contain"
              />
            </div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      case "option2":
        return (
          <div className="grid grid-cols-5  mt-5  gap-2 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      case "option3":
        return (
          <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      case "option4":
        return (
          <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      case "option5":
        return (
          <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      case "option6":
        return (
          <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2">
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
            <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
          </div>
        );
    }
  };

  return (
    <div className="my-10 w-[100%] px-5">
      <div className="flex  w-[100%] max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
        <ProductSidebar />

        <div className="w-[100%]  flex justify-center">
          <div className="flex flex-col w-[100%] max-xl:w-[100%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-[100%]">
            <div className="max-sm:w-full w-[100%] h-[50vh] relative">
              <Image
                src="/Ottoman_Bed_side_opening.jpg "
                alt="openbed"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex justify-between w-[100%] gap-2 h-[6rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
              <div className="w-1/4  max-sm:w-1/4  max-sm:h-[full] relative">
                <Image
                  src="/Ottoman_Bed_side_opening-small.jpg"
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                <Image
                  src="/Ottoman-Side.jpeg"
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                <Image
                  src="/Ottoman_Bed_side_opening.jpg"
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                <Image
                  src="/Ottoman_Bed_side_opening-small.jpg"
                  alt="openbed"
                  objectFit="cover"
                  layout="fill"
                  className="-scale-x-100"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-lg:mt-10   w-[80%]  max-md:w-[80%] max-sm:w-[100%]">
          <p className="text-[1.875rem]">
            Ottoman Bed Base Only Without Headboard
          </p>
          ( There are no reviews yet. )
          <div>
            {" "}
            <span className="text-[#a7a7a7] text-[1.2rem]">From:</span>{" "}
            <span className="text-[1.5rem] font-semibold">£202.85</span>
          </div>
          <div className="text-[1.2rem] max-lg:text-[1rem]">
            <div className="leading-8  max-lg:mt-2">
              This Ottoman bed Base Without Headboard is an excellent option for
              those who want to add comfort and style to their space without
              spending too much money. This ottoman base is made with high
              quality materials that will last, and has a modern look that can
              easily fit into any home d?cor. It is the perfect choice for those
              who want a comfortable piece of furniture that is also stylish.
              <div className="py-5 mb-10 border-b-[1px] text-[1rem]">
                <p className="font-semibold"> GTIN: 5071028881229 Tags:</p>
                <p className="text-[#777]">
                  divan storage beds, end opening ottoman, Floor Standing
                  Headboards, Ottoman, ottoman bed, side opening ottoman{" "}
                </p>
              </div>
              Base OptionsBase Options What type of storage would you like?
              <p className="text-[1.6rem] mt-5 font-bold">
                Divan Base Options{" "}
              </p>
              <p className="mt-10 mb-3">
                SIZE <span className="text-[red]">*</span>
              </p>
              <div>
                {/* Select element */}
                <select
                  value={selectedValue}
                  onChange={handleSelectChange}
                  className="w-[100%] text-[1rem] h-10 bg-white border "
                >
                  <option value="">CHOOSE AN OPTION</option>
                  <option value="option1">SMALL SINGLE (2FT6)</option>
                  <option value="option2">SINGLE (3FT)</option>
                  <option value="option3">SMALL DOUBLE (4FT)</option>
                  <option value="option4">DOUBLE (4FT6)</option>
                  <option value="option5">KINGS SIZE (5FT) </option>
                  <option value="option6">SUPER KING (6FT) </option>
                </select>

                {/* Display selected div */}
                {renderSelectedDiv()}
              </div>
              <button
                onClick={handleClearClick}
                className="bg-gray-200 hover:bg-[#1e73be] hover:text-white px-5 text-[0.6rem] mt-3"
              >
                CLEAR
              </button>
              <div className="border-[1px] border-x-0 h-10 mt-5"></div>
              <div>
                Select Your Upholstery <br /> and ColourSelect Your Upholstery
                and Colour Which fabric and colour would you like your bed to be
                upholstered in? <br />{" "}
                <p className="font-semibold text-[1.5rem] my-10">
                  Select Your Fabric Colour{" "}
                </p>
                <p className="mb-5">
                  <span className="semibold">SELECT COLOUR *:</span> Linen Black
                  £50
                </p>
                <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                  {" "}
                  Linen +£50
                </p>
              </div>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Teddy Boucle £75
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Coniston Spice Velvet +£50
              </p>
              <div className="grid grid-cols-5  mt-5  gap-2 max-sm:grid-cols-2 max-2xl:grid-cols-3 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Chenille - Corded +£25
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Crush Velvet +£25
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Naples Velvet +£75
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Wool +£50
              </p>
              <div className="grid grid-cols-5  mt-5  gap-2 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Plush Velvet +£50
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Ascot - Weave +£50
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Rustique Velvet +£125
              </p>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Tweed +£125
              </p>
              <div className="grid grid-cols-3 place-items-center gap-2 mt-5 w-[60%] max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1 max-2xl:w-[100%]">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <p className="text-[#777] mt-5 mb-1 max-sm:text-center">
                Alesia Velvet +£125
              </p>
              <div className="grid grid-cols-3 place-items-center gap-2 mt-5 w-[60%] max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1 max-2xl:w-[100%]">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <div className="mt-8">
                <p className="mb-2"> Select Feet Type</p>
                <p className="text-[1.8rem] font-semibold mb-5">
                  Bed Legs and Castors
                </p>
                <p className="font-semibold">FEET TYPE: * </p>
              </div>
              <div className="grid grid-cols-5 place-items-center gap-2 mt-5 max-2xl:grid-cols-3 max-sm:grid-cols-2 grid-cols-gap-1">
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem] "></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
                <div className="border-[1px] rounded-lg h-[6rem] w-[6rem]"></div>
              </div>
              <div className="border-[1px] border-x-0 h-16 mt-5"></div>
              £0.00 Base Options, Select Your Upholstery and Colour, Select Feet
              Type → Please choose product options.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
