import BagIcon from "../../Icons/BagIcon";
import LocationIcon from "../../Icons/LocationIcon";
import CustomButom from "../../UI/CustomButton";

function Header() {
  return (
    <header className="header text-white flex justify-center items-center">
      <div className="flex items-center flex-col">
        <h1 className="text-5xl sm:text-8xl font-bold ">
          Are You a Supplier?{" "}
        </h1>
        <h3 className="font-normal text-4xl sm:text-7xl mt-4">
          Explore Matching Opportunities.
        </h3>
        <div className="flex justify-center items-center mt-12 hidden">
          <div className="flex justify-center items-center px-8 py-6 bg-white text-black rounded-lg ">
            <BagIcon width="15" height="15" />
            <input
              className="w-96 ml-5 w-[19rem] focus:outline-none focus-visible:outline-none text-xl opacity-80"
              type="text"
              placeholder="Search your required service here"
            />
          </div>
          <div className="flex justify-center items-center px-8 py-6 bg-white text-black rounded-lg ml-5">
            <LocationIcon width="15" height="15" />
            <input
              className="w-96 ml-5 w-[19rem] focus:outline-none focus-visible:outline-none text-xl opacity-80"
              type="text"
              placeholder="Search your desired location here"
            />
          </div>
          <div>
            <CustomButom className="text-white bg-custom-green border-custom-green border border-2 border-solid px-10 py-6 rounded-lg ml-5 text-xl hover:bg-transparent ">
              Search
            </CustomButom>
          </div>
        </div>
        <p className="mt-12 text-xl sm:text-3xl">
          <strong className="">Are you a buyer?</strong>
          <span className="ml-4 underline underline-offset-2 cursor-pointer ">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>
    </header>
  );
}

export default Header;
