import FacebookIcon from "../../Icons/FacebookIcon";
import InstaIcon from "../../Icons/InstaIcon";
import LinkdinIcon from "../../Icons/LinkdinIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import Logo from "../../assets/LOGO_white.png";

function Footer() {
  return (
    <div className="footer  bg-custom-shaded-blue px-10  sm:px-60 py-16 mt-20">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start sm:items-center border-y-2 border-white border-opacity-20 py-12">
        <div className="left flex flex justify-evenly flex-row flex-wrap sm:flex-row">
          <div className="logo order-4 sm:order-1 w-full sm:w-auto flex justify-unset sm:justify-unset sm:block sm:ml-10 mt-10">
            <img className="cursor-pointer" src={Logo} alt="logo" />
            <p className="font-extralight text-white text-2xl mt-10 ml-4">
              © R Singhania
            </p>
          </div>
          <div className="company order-1 sm:order-2 ml-0 sm:ml-20">
            <h3 className="text-white text-2xl font-medium">Company</h3>
            <ul className="text-white text-xl font-extralight mt-6">
              <li className="mt-2 cursor-pointer">About</li>
              <li className="mt-2 cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div className="Terms order-2 sm:order-3 ml-0 sm:ml-20">
            <h3 className="text-white text-2xl font-medium">Terms</h3>
            <ul className="text-white text-xl font-extralight mt-6">
              <li className="mt-2 cursor-pointer">Data Privacy</li>
              <li className="mt-2 cursor-pointer">Terms</li>
              <li className="mt-2 cursor-pointer">Accessibility</li>
            </ul>
          </div>{" "}
          <div className="related order-3 sm:order-4 ml-0 sm:ml-20">
            <h3 className="text-white text-2xl font-medium">Related</h3>
            <ul className="text-white text-xl font-extralight mt-6">
              <li className="mt-2 cursor-pointer">Find Buyer</li>
              <li className="mt-2 cursor-pointer">Feedback</li>
            </ul>
          </div>
        </div>
        <div className="right hidden md:block">
          <ul className="flex ">
            <li className="ml-6 cursor-pointer">
              <LinkdinIcon className="w-16 h-16" />
            </li>
            <li className="ml-6 cursor-pointer">
              <TwitterIcon className="w-16 h-16" />
            </li>
            <li className="ml-6 cursor-pointer">
              <FacebookIcon className="w-16 h-16" />
            </li>
            <li className="ml-6 cursor-pointer">
              <InstaIcon className="w-16 h-16" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
