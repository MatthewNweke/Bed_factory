import React, { useState } from "react";
import BedSizeTable from "./BedSizeTable";
import FaqCard from "../components/cards/FaqCard";

const ProductbaseDropdown = () => {
  const [selectedItem, setSelectedItem] = useState("Dimensions");
  // const [dropdownActive, setDropdownActive] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Dimensions":
        return (
          <div className="flex flex-col gap-10 items-center justify-center">
            <BedSizeTable />
            <BedSizeTable />
            <BedSizeTable />
          </div>
        );
      case "Frequently Asked Questions":
        return (
          <div className=" flex justify-center items-center w-[100%] h-full max-lg:flex-wrap animate__animated animate__fadeIn">
            <div className="grid grid-cols-1 place-items-center  gap-x-4 gap-y-2 w-[100%]">
              <FaqCard
                title="What is the re-inforced option?"
                text="The re-inforced option is a structurally stronger bed all round, this includes the lids and the storage area, we do this by increasing the number of cross beams in the base and the lids."
              />
              <FaqCard
                title="What materials do we use to make our bespoke beds?"
                text="We use the best materials available for our ottoman beds, we use MFC for side panels, MDF for the flooring both are fire retardant, we use thick Pine Wood for cross beams under the flooring, and platform top composed of fixed position cross beams."
              />
              <FaqCard
                title="Can we customise the size of our headboard?"
                text="Yes we can adjust the headboard height according to the bedroom specifics or to your liking. We do charge additional costs to make amendments please speak to a member of our team."
              />
              <FaqCard
                title="Do we match the headboard and the bed with the same fabric and colour?"
                text="
              Yes, we manufacture our products from scratch so depending on the selections you make for choice of fabric and colour we will automatically cover the headboard in the same choice of fabric. If you would like two different fabrics we can also accommodate this for our customers."
              />
            </div>

            <div className="grid grid-cols-1 place-items-center gap-x-4 gap-y-2 w-[100%]">
              <FaqCard
                title="Where do we deliver our products to?"
                text="We deliver across the whole of mainland UK. If you live outside the mainland UK and know of a courier that can provide delivery, we can deliver to the courier warehouse if required."
              />
              <FaqCard
                title="Where do we make our products?"
                text="We manufacture our products in West Yorkshire.
  
                  "
              />
              <FaqCard
                title="Do we provide a guarantee on our products?"
                text="Yes we provide a 5 year guarantee on all our orders. Our guarantee protects your purchase from structural defects and manufacturing faults. This guarantee excludes fabric damage, staining or deterioration, and structural issues caused through accidental damage. Contact our team if you need assistance.
  
                  "
              />
              <FaqCard
                title="Can you delay the delivery of my order?"
                text="Yes, let us know when processing the order and we will plan it into production accordingly.
  
  
  
                  "
              />
            </div>

            <div className="grid grid-cols-1 place-items-center gap-x-4 gap-y-2 w-[100%]">
              <FaqCard
                title="What mechanism do our ottoman bases use?"
                text="Our bed bases come pre-assembled.
  
                  2FT6 & 3FT bed base come as a single piece
                  4FT and above sizes come in 2 pieces.
                  A bed set for example a 5FT set would come as 2 pieces for the base and 2 pieces for the headboard and mattress.
                  "
              />
              <FaqCard
                title="How would I assemble the bed base and is it simple?"
                text="Yes, assembling our bed base is really simple, we can also provide assembly options at the checkout or you can follow the instructions on our website: Ottoman Bed Gas Lift Fitting Instructions | Storage Beds and Mattresses (sosoftbeds.co.uk)
                  "
              />
              <FaqCard
                title="Can I use my own choice of fabric from elsewhere?"
                text="Yes we can upholster the products in a fabric of your choice, all we need is the details of your order and we can confirm the amount of fabric required. Please get in touch with our customer services team so they can accommodate you with what is required.
                  "
              />
              <FaqCard
                title="Can I amend my order once confirmed?"
                text="Once your order details are processed your order will be immediately placed into our workshop. You can amend any aspect of your order until your order is in production. To make a change, please call our customer service team as soon as.
                  "
              />
            </div>
          </div>
        );

      case "Description":
        return <div></div>;
      case "Reviews":
        return <div></div>;
      default:
        return (
          <div className="flex flex-col gap-10 items-center justify-center">
            <BedSizeTable />
            <BedSizeTable />
            <BedSizeTable />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#EEEEEE]">
      <ul className="flex h-24 items-center justify-center gap-10 border-[1px] bg-[#EEEEEE] p-0 m-0 max-sm:text-sm">
        <li
          className={`cursor-pointer ${
            selectedItem === "Dimensions"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Dimensions")}
        >
          Dimensions
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Frequently Asked Questions"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Frequently Asked Questions")}
        >
          Frequently Asked Questions
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Description"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Description")}
        >
          Description
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "Reviews"
              ? "border border-black rounded-lg px-4 py-2"
              : ""
          }`}
          onClick={() => handleItemClick("Reviews")}
        >
          Reviews
        </li>
        {/* Add similar classes and conditions for other list items */}
      </ul>

      <div className="py-5 px-2 shadow-2xl">{renderContent()}</div>
    </div>
  );
};

export default ProductbaseDropdown;
