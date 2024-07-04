import { useState } from "react";

function TogleBox() {
  const [cStep, setCStep] = useState(1);
  return (
    <>
      <ul className="menu text-5xl text-white font-bold flex items-center justify-center ">
        <li
          className={`
            flex-1 
            text-center 
            cursor-pointer 
            py-5
             transition duration-300 ease-in-out
            ${
              cStep == 1
                ? "border-b-4 border-custom-orange text-custom-orange"
                : ""
            }
          `}
          onClick={() => setCStep(1)}
        >
          Buyer
        </li>
        <li
          className={`
            flex-1 
            text-center 
            cursor-pointer
            py-5
             transition duration-300 ease-in-out
            ${
              cStep == 2
                ? "border-b-4 border-custom-orange text-custom-orange"
                : ""
            }
         `}
          onClick={() => setCStep(2)}
        >
          Supplier
        </li>
      </ul>
      <ul className="custom-list text-3xl text-white">
        <li>Post your requirements.</li>

        <li>Sit back for multiple suppliers to contact you. </li>

        <li>Choose among the suppliers based on the ratings and reviews.</li>
      </ul>
    </>
  );
}

export default TogleBox;
