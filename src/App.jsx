import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import Features from "./Sections/features.jsx";
import Joinwaitlist from "./Sections/Joinwaitlist.jsx";
import Footer from "./Sections/Footer.jsx";

export default function App() {
  return (
    <div className="mx-15">
      <Navbar />
      <Hero />
      <Features />
      <Joinwaitlist />
      <Footer />
    </div>
  );
}
