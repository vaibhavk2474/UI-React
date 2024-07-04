import React, { ReactNode } from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children = null,
  className = "font-inter text-custom-green border border-2 border-solid py-4 px-8 border-custom-green hover:bg-custom-green hover:text-white transition duration-300 ease-in-out rounded-lg font-bold",
  ...props
}) => {
  return (
    <button type="button" className={className} {...props}>
      {children || "Custom Button"}
    </button>
  );
};

export default CustomButton;
