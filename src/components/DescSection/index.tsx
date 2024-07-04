import RightArrow from "../../Icons/RightArrow";
import CustomButom from "../../UI/CustomButton";

function DescSection() {
  return (
    <div
      className="desc-section flex  px-10 py-40 sm:px-40 sm:py-40 flex-col sm:flex-row"
      // flex-col
    >
      <div className="left flex-1 mr-20">
        <h1 className="text-6xl font-bold ">Ready to dive into HABOT?</h1>
        <p className="font-normal text-3xl mt-14 leading-10">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <CustomButom
          className={`
              test 
              flex 
              justify-center 
              items-center 
              mt-14 
              text-white 
              bg-custom-green 
              border-custom-green 
              border 
              border-2 
              border-solid 
              px-10 
              py-6 
              rounded-lg 
              text-2xl 
              hover:bg-transparent 
              hover:text-custom-green 
              font-bold 
              pl-20 
              pr-10
              transition duration-300 ease-in-out
        `}
        >
          <span>Sign up Today !</span>
          <RightArrow width="25" height="25" className="ml-10 font-bold" />
        </CustomButom>
      </div>
      <div className="right-box flex-1">
        <ul className="flex flex-wrap  sm:ml-20 mt-20 sm:mt-0">
          {[
            "Abu Dhabi",
            "Dubai",
            "Sharjah & Ajman",
            "Fujairah",
            "Ras Al Khaimah",
            "Umm Al Quwain",
          ].map((cItem, i) => (
            <li
              key={i}
              className={`
                    text-center
                    h-fit-content 
                    border 
                    border-2 
                    border-custom-orange 
                    py-8 
                    px-24 
                    text-3xl 
                    font-medium 
                    rounded-lg
                    hover:bg-custom-orange 
                    hover:text-white
                    cursor-pointer
                    transition duration-300 ease-in-out
                    flex
                    items-center
                    justify-center
                `}
            >
              <span>{cItem}</span>
              <RightArrow
                width="25"
                height="25"
                className="ml-10 font-bold hidden"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DescSection;
