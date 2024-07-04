import CustomButton from "../../UI/CustomButton";

function Banner() {
  return (
    <div className="bg-custom-purple h-[40vh] flex justify-center items-center flex-col sm:flex-row sm:justify-between py-22 px-10  sm:py-50 sm:px-80">
      <h1 className="text-6xl font-medium mb-20 sm:mb-0">
        Let Suppliers{" "}
        <span className="border-b-4 border-custom-orange">Find You</span>
      </h1>
      <CustomButton
        className={`
              flex 
              justify-center 
              items-center 
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
              transition duration-300 ease-in-out
        `}
      >
        <span>Get Verified</span>
      </CustomButton>
    </div>
  );
}

export default Banner;
