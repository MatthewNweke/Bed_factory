// components/HomeCards.js
'use client'
import React, { useState } from "react";
import Image from "next/image";

const HomeCards = ({ index, imageUrl, buttons }) => {
  const [showButtonIndex, setShowButtonIndex] = useState(null);
 
  return (
    <div className="relative">
      <div
        className="relative flex justify-center items-center bg-gray-200 cursor-pointer"
        onMouseEnter={() => setShowButtonIndex(index)}
        onMouseLeave={() => setShowButtonIndex(null)}
      >
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt={`Card ${index + 1}`}
          style={{objectFit:'contain'}}
          className="border border-black"
        />
        <div className="absolute bottom-0 left-0 flex justify-center flex-col items-center w-[100%] bg-[#ddd] shadow-xl py-2">
          {buttons[index].defaultText && (
            <div className="  px-2 py-1 rounded">
              {buttons[index].defaultText}
            </div>
          )}
          {showButtonIndex !== null && buttons[showButtonIndex] && (
            <div className="  px-5 py-2 w-[90%] rounded mt-1 border border-black ">
              {buttons[showButtonIndex].buttonText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
