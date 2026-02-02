import Navbar from "./layouts/Navbar.jsx";
import Hero from "./layouts/Hero.jsx";
import Features from "./layouts/features.jsx";
import Joinwaitlist from "./layouts/Joinwaitlist.jsx";
import Footer from "./layouts/Footer.jsx";

export default function App() {
  return (
    <>
      <div className=" mx-4 md:mx-15   ">
        <Navbar />
        <Hero />
        <Features />
        <Joinwaitlist />
      </div>
      <Footer />
    </>
  );
}
