import img1 from "../../assets/Person.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";
import Img6 from "../../assets/Img6.png";

interface DATA_TYPE {
  para: string;
  src: string;
}
const DATA_LIST: DATA_TYPE[] = [
  {
    para: "Select Your Role and Sign Up",
    src: img1,
  },
  {
    para: "Buyers Post Your Requirements",
    src: Img2,
  },
  {
    para: "Review, Select, and Contact the Best Suppliers",
    src: Img3,
  },
  {
    para: "Suppliers Complete your profile and get notified for opportunities",
    src: Img4,
  },
  {
    para: "Contact to Buyers and Share your Quote for the service",
    src: Img5,
  },
  {
    para: "Both the Parties can Connect and Make Business Leave a Feedback",
    src: Img6,
  },
];
function HowWorksSection() {
  return (
    <section className="how-works-section px-10 py-40 sm:px-40 sm:py-40">
      <main className="flex flex-col justify-center items-center px-0 sm:px-80">
        <h1 className="text-6xl font-bold">How It Works?</h1>
        <p className="text-3xl text-center mt-8 leading-10 font-normal">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </main>
      <ul className="list flex flex-wrap justify-center mt-32">
        {DATA_LIST.map((cItem, i) => (
          <li
            key={i}
            className={`px-20 py-20 flex flex-col justify-center items-center
               ${i % 2 == 0 ? `bg-custom-purple` : ``}`}
          >
            <img src={cItem.src} alt="img" />
            <p className="text-3xl mt-10 font-medium text-center">
              {cItem.para}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HowWorksSection;
