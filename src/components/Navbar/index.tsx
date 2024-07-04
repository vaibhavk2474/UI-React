import { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import MenuIcon from "../../Icons/MenuIcon";
import CustomButom from "../../UI/CustomButton";
import Logo from "../../assets/Logo.svg";
import CloseIcon from "../../Icons/CloseIcon";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex justify-between px-10 sm:px-20 py-8 text-lg">
        <div className="left">
          <img className="cursor-pointer" src={Logo} alt="logo" />
        </div>
        <div className="right hidden sm:flex items-center text-2xl">
          <ul
            //
            className="  sm:flex"
          >
            <li className="px-8 cursor-pointer text-custom-grey">
              Find Suppliers
            </li>
            <li className="flex items-center px-8 cursor-pointer text-custom-grey">
              Find Service Tags
              <ArrowIcon />
            </li>
          </ul>
          <CustomButom className=" font-inter text-custom-green border border-2 border-solid py-4 px-8 border-custom-green hover:bg-custom-green hover:text-white transition duration-300 ease-in-out rounded-lg font-bold">
            Login / Sign Up
          </CustomButom>
        </div>

        {/* Responsive */}

        <div className="right flex sm:hidden  items-center text-2xl">
          {show ? (
            <CloseIcon onClick={() => setShow(!show)} />
          ) : (
            <MenuIcon onClick={() => setShow(!show)} />
          )}
        </div>
      </nav>
      {show && (
        <ul
          //
          className="px-8  sm:flex  pb-10 text-4xl"
        >
          <li className=" cursor-pointer text-custom-grey py-5">
            Find Suppliers
          </li>
          <li className="flex items-center cursor-pointer text-custom-grey py-5">
            Find Service Tags
            <ArrowIcon />
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
