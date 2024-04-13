import React, { useState } from 'react';

const SlipLids = ({ defaultText, buttonTexts, buttonStyles }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [displayText, setDisplayText] = useState(defaultText);

  const handleSlipLidsBtnClick = (buttonIndex, text) => {
    console.log("Button clicked:", buttonIndex, text);
    setActiveButton(buttonIndex);
    setDisplayText(text);
  };

  // Ensure buttonStyles has the same length as buttonTexts or provide default styles
  const styles = buttonStyles ? buttonStyles : Array(buttonTexts.length).fill({});

  return (
    <div>
      <div className="flex flex-col gap-5 bg-[#f1feff] py-5">
        <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
          {displayText}
        </div>

        <div className="flex gap-[1%] justify-center text-[0.8rem] text-center">
          {buttonTexts.map((text, index) => (
            <div 
              key={index}
              className={`border-black border-[2px] w-[42%] p-2 cursor-pointer rounded-2xl text-center ${activeButton === index ? 'bg-black text-white' : ''}`}
              onClick={() => handleSlipLidsBtnClick(index, text)}
              style={styles[index]} // Use styles array instead of buttonStyles directly
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlipLids;
