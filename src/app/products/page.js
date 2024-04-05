import Image from "next/image";
import ProductSidebar from "@/components/sidebar/ProductSidebar";

const Products = () => {
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

            <div className="flex justify-between w-[100%] gap-2 h-[8rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
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
              <p className="text-[1.8rem]">Divan Base Options </p>
              SIZE <span className="text-[red]">*</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
