import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white p-6  text-black shadow-xl border-t-2 border-black-800">
      <div className="flex justify-around py-6 space-x-4 p-0">
        <ul>
            quality materials good designs, <br/> professional craftsmanship and <br/> sustainability
        </ul>
        <ul className="p-0 leading-9">
          <li className="font-semibold mb-5">Shops</li>
          <li className="mb-2"><Link href="">Clothing</Link></li>
          <li className="mb-2"><Link href="">Shoes</Link></li>
          <li className="mb-2"><Link href="">Accessories</Link></li>
          <li className="mb-2"><Link href="">Brands</Link></li>
          <li className="mb-2"><Link href="">Sale</Link></li>
          <li className="mb-2"><Link href="">Gift Cards</Link></li>
        </ul>
        <ul className="p-0 leading-9">
          <li className="font-semibold mb-5">Gift Cards</li>
          <li className="mb-2"><Link href="">Buy Gift Cards</Link></li>
          <li className="mb-2"><Link href="">About Gift Cards</Link></li>
          <li className="mb-2"><Link href="">Redeem a Gift Card</Link></li>
          <li className="mb-2"><Link href="">Corporate Gift <br/> Cards</Link></li>
          <li className="mb-2"><Link href="">Subscribe</Link></li>
        </ul>

        <ul className="p-0 ">
          <li className="font-semibold mb-5">About store</li>
          <li className="mb-2"><Link href="" >About Us</Link></li>
          <li className="mb-2"><Link href="">Support</Link></li>
          <li className="mb-2"><Link href="">Careers</Link></li>
          <li className="mb-2"><Link href="">Newsroom</Link></li>
          <li className="mb-2"><Link href="">Investors</Link></li>
        </ul>

        <ul className="p-0 leading-9">
          <li className="font-semibold mb-5">Legal</li>
          <li className="mb-2">Legal Notice</li>
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms and Conditions</li>
        </ul>
      </div>
      <p className="mt-10 text-center">
        © {new Date().getFullYear()} Synergy-IT. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
