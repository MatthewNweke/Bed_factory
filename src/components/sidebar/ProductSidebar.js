// Sidebar.js

import Image from "next/image";

const ProductSidebar = () => {
  const sidebarItems = [
    "Filter Beds By Size",
    "Filter Beds By Headboard Design",
    "Mattresses",
    "Order Swatches",
    "Ottoman Bed Fitting Instructions",
    "Design Your Own Bed",
    "Ottoman Bed Base Size",
    "Adjustable Beds",
    "Customer Photos",
    "Ottoman Bed Base Without Headboard",
  ];

  return (
    <div>
      <div className="min-h-[50vh] p-2 w-64">
        <nav className="mt-10">
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="group relative border-[1px] hover:bg-[#1e73be] px-2 py-1 hover:text-white"
              >
                <a href="#" className="block py-2 px-4">
                  {item}
                  {index < 3 && (
                    <span className="absolute right-0 top-3 -mt-1 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.293 7.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 010-2h10.586l-1.293-1.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </a>
                {index < 3 && (
                  <div className="hidden group-hover:block absolute top-0 -right-44 bg-white text-black shadow-xl p-2">
                    <ul>
                      <li>
                        <a href="#" className="block py-2 px-4">
                          Dropdown Item 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4">
                          Dropdown Item 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4">
                          Dropdown Item 3
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      
    </div>
  );
};

export default ProductSidebar;
