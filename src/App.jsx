import Navbar from "./layouts/Navbar.jsx";
import Hero from "./layouts/Hero.jsx";
import Features from "./layouts/features.jsx";
import Joinwaitlist from "./layouts/Joinwaitlist.jsx";
import Footer from "./layouts/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="mx-4 md:mx-15 mb-23">
        <Navbar />
      </div>
      <div className=" mx-4 md:mx-15 flex flex-col gap-15 md:gap-40 mb-15 md:mb-30 ">
        <Hero />
        <Features />
        <Joinwaitlist />
      </div>
      <Footer />
    </>
  );
}
