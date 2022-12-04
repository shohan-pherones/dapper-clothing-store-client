import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <nav className="navbar h-20 flex items-center justify-center">
      <div className="container mx-auto flex justify-between items-center gap-5">
        <div className="left flex gap-5">
          <div className="buttons flex gap-3">
            <button className="region flex items-start">
              <span>EN</span>
              <KeyboardArrowDownIcon />
            </button>
            <button className="currency flex items-start">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </button>
          </div>
          <div className="left-links flex gap-5">
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Children</Link>
            <Link to="/products/4">Accessories</Link>
          </div>
        </div>
        <div className="mid">
          <span className="logo uppercase text-2xl font-bold tracking-widest">
            Dapper.
          </span>
        </div>
        <div className="right flex gap-5">
          <div className="right-links flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="icons flex gap-3">
            <button className="search">
              <SearchOutlinedIcon />
            </button>
            <button className="user">
              <PersonOutlineOutlinedIcon />
            </button>
            <button className="favorite">
              <FavoriteBorderOutlinedIcon />
            </button>
            <button className="cart relative">
              <ShoppingCartOutlinedIcon />
              <span className="cart-count absolute w-5 h-5 bg-teal-500 rounded-full text-sm font-medium text-white flex justify-center items-center -top-2 -right-2">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
