const Navbar = () => {
  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between flex-wrap bg-[#1677FF] px-6 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className=" text-md tracking-tight flex gap-3 items-center">
            <p className="cursor-pointer text-sm">USD</p>
            <p className="cursor-pointer text-sm">English</p>
          </div>
        </div>
        
        <div className="text-white">
         Free delivery on orders above $50
        </div>
        
        <div className=" lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
             Returns Policy
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
             Help $ Contact
            </a>
         
          </div>
        </div>
        
      </nav>
    {/* <div className=""> */}
        <ul className="p-0 w-[100%] bg-white h-[10vh] shadow-xl flex items-center gap-5 px-20">
        <li><a href="" className="text-sm">Women</a></li>
        <li><a href="" className="text-sm">Men</a></li>
        <li><a href="" className="text-sm">Kids</a></li>
        <li><a href="" className="text-sm">Gift Cards</a></li>
        </ul>
    {/* </div> */}
    </div>
  );
};

export default Navbar;
