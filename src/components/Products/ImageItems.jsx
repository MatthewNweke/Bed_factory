'use client'
import { useState } from "react";
import Image from "next/image";

// Reusable image component
const ImageItem = ({ imagePath, selectedImagePath, handleImageClick }) => (
  <div
    className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
      selectedImagePath === imagePath && " border-[2px] border-black"
    }`}
    onClick={() => handleImageClick(imagePath)}
  >
    <Image src={imagePath} alt="openbed" layout="fill" objectFit="contain" />
    {selectedImagePath === imagePath && (
      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )}
  </div>
);

const ProductsPage = () => {
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");

  // Handler function to update selected image path
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };

  return (
    <div className="my-10 w-[100%] px-5">
      {/* Image components with reusability */}
      <div className="flex  justify-around max-sm:flex-wrap max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
        <ImageItem
          imagePath="/single.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
        <ImageItem
          imagePath="/single2.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
        <ImageItem
          imagePath="/Double-small.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
        <ImageItem
          imagePath="/Double-small2.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
        <ImageItem
          imagePath="/Double-small3.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
        <ImageItem
          imagePath="/Double-small4.png"
          selectedImagePath={selectedImagePath}
          handleImageClick={handleImageClick}
        />
      </div>
      {/* Rest of the component */}
    </div>
  );
};

export default ProductsPage;
