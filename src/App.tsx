import "./App.css";
import Banner from "./components/Banner";
import DescSection from "./components/DescSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowWorksSection from "./components/HowWorksSection";
import Navbar from "./components/Navbar";
import RequirementSection from "./components/RequirementSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DescSection />
      <RequirementSection />
      <Banner />
      <HowWorksSection />
      <Footer />
    </div>
  );
}

export default App;
