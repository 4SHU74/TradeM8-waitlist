import Navbar from "./layouts/Navbar.jsx";
import Hero from "./layouts/Hero.jsx";
import Features from "./layouts/features.jsx";
import Joinwaitlist from "./layouts/Joinwaitlist.jsx";
import Footer from "./layouts/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="mx-15   ">
        <Navbar />
        <Hero classname="space-y-12 mb-20" />
        <Features classname="space-y-10" />
        <Joinwaitlist classname="space-y-8 mb-30 " />
      </div>
      <Footer />
    </>
  );
}
