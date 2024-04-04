import Image from "next/image";
import ProductSidebar from "@/components/sidebar/ProductSidebar";

const Products = () => {
  return (
    <div className="my-10 max-md:px-5">
      <div className="flex justify-evenly flex-wrap overflow-hidden">
        <ProductSidebar />

        <div className="flex flex-col">
          <Image
            src="/Ottoman_Bed_side_opening.jpg"
            alt="openbed"
            width={600}
            height={600}
            objectFit="contain"
          />

          <div className="flex justify-center w-[630px] gap-[10px]">
            <Image
              src="/Ottoman_Bed_side_opening-small.jpg"
              alt="openbed"
              width={150}
              height={100}
              objectFit="contain"
            />

            <Image
              src="/Ottoman-Side.jpeg"
              alt="openbed"
              width={150}
              height={100}
              objectFit="contain"
            />
            <Image
              src="/Ottoman_Bed_side_opening.jpg"
              alt="openbed"
              width={150}
              height={100}
              objectFit="contain"
            />
            <Image
              src="/Ottoman_Bed_side_opening-small.jpg"
              alt="openbed"
              width={150}
              height={100}
              objectFit="contain"
              className="-scale-x-100"
            />
          </div>
        </div>

        <div className="w-[30%] max-lg:w-[100%] max-lg:px-5 max-lg:my-5">
          <p className="text-[1.875rem]">Ottoman Bed Base Only Without Headboard</p>( There are no reviews
          yet. ) 
          <div> <span className="text-[#a7a7a7] text-[1.2rem]">From:</span>  <span className="text-[1.5rem] font-semibold">£202.85</span></div>
          <div className="text-[1.2rem] max-lg:text-[1rem]">
          <p className="leading-8  max-lg:mt-2">
          This Ottoman bed Base Without Headboard is an
          excellent option for those who want to add comfort and style to their
          space without spending too much money. This ottoman base is made with
          high quality materials that will last, and has a modern look that can
          easily fit into any home d?cor. It is the perfect choice for those who
          want a comfortable piece of furniture that is also stylish. GTIN:
          5061028881229 Tags: divan storage beds, end opening ottoman, Floor
          Standing Headboards, Ottoman, ottoman bed, side opening ottoman Base
          OptionsBase Options What type of storage would you like? Divan Base
          Options SIZE *
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
