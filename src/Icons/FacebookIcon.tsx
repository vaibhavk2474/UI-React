function FacebookIcon({ ...props }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.9">
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="19.5"
          stroke="white"
          stroke-opacity="0.2"
        />
        <g clip-path="url(#clip0_1_75)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6034 29V19.9906H23.6493L24.1338 17.0026H20.6042V15.5047C20.6042 14.7221 20.8656 13.981 22.0098 13.981H24.3044V11H21.0511C18.3159 11 17.5708 12.7617 17.5708 15.1948V17.0026H15.6957V19.9906H17.5708V29H20.6034Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_75">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
