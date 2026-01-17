import logo from "../assets/logo.png";
import { Button } from "../components/ui/Button";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-#EDEEF0 my-3">
      <div className="flex items-center gap-3 w-fit">
        <img src={logo} className="w-16 h-16 rounded-lg object-contain" />
        <span className="font-bold text-[#1A3B50] text-xl leading-none">
          TradeM8
        </span>
      </div>

      <Button variant="default" size="lg">
        Join the Waitlist
      </Button>
    </nav>
  );
}
export default Navbar;
