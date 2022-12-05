import { Link } from "react-router-dom";
import PaymentImage from "../assets/images/payment.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-20 flex flex-col gap-5 text-gray-500">
        <div className="top flex gap-10">
          <div className="part flex flex-col flex-1 gap-1">
            <span className="uppercase text-lg tracking-widest font-semibold text-gray-700">
              Categories
            </span>
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Children</Link>
            <Link to="/products/4">Accessories</Link>
          </div>
          <div className="part flex flex-col flex-1 gap-1">
            <span className="uppercase text-lg tracking-widest font-semibold text-gray-700">
              Links
            </span>
            <Link to="/faq">FAQ</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/support">Support</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="part flex flex-col flex-1 gap-1">
            <span className="uppercase text-lg tracking-widest font-semibold text-gray-700">
              Terms & Conditions
            </span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              possimus suscipit assumenda facere in nostrum rem corrupti
              pariatur nisi, magnam sed repellat deserunt harum quis veniam
              aliquam modi sint unde.
            </p>
          </div>
          <div className="part flex flex-col flex-1 gap-1">
            <span className="uppercase text-lg tracking-widest font-semibold text-gray-700">
              Privacy & Policy
            </span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              possimus suscipit assumenda facere in nostrum rem corrupti
              pariatur nisi, magnam sed repellat deserunt harum quis veniam
              aliquam modi sint unde.
            </p>
          </div>
        </div>
        <div className="bottom flex justify-between items-center gap-5">
          <div className="part flex gap-5 items-center flex-1">
            <span className="logo uppercase text-2xl font-bold tracking-widest text-gray-700">
              Dapper.
            </span>
            <p>
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="part flex-1">
            <img src={PaymentImage} alt="Payment banner" className="w-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
