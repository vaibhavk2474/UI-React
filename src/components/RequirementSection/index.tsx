import TogleBox from "./TogleBox";

function RequirementSection() {
  return (
    <div className="requirement-section flex flex-col sm:flex-row  bg-custom-dark-blue h-[85vh] rounded-lg mx-10 mb-40 sm:mx-40 sm:mb-40 sm:px-20 sm:py-40 px-10 py-20 ">
      <div className="left flex-60-percentage ">
        <iframe
          className="h-full w-full rounded-lg "
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=9dFw5HWq5pjrbUax"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="right flex-40-percentage  ml-0 mt-10 sm:ml-20 sm:mt-0">
        <TogleBox />
      </div>
    </div>
  );
}

export default RequirementSection;
