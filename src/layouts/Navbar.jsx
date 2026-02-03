import logo from "../assets/logo.png";
import { Button } from "../components/ui/Button";

function Navbar() {
  return (
    <nav
      className="
        flex
        items-center
        justify-between
        my-3
        px-4 py-3
       md:px-8
        md:py-4
        w-full
        bg-#EDEEF0
      "
    >
      <div className="flex gap-2 mb:gap-3 items-center w-fit">
        <div
          class="
            overflow-hidden
            h-8 w-8
            md:h-10
            md:w-10
            shadow-sm
            rounded-lg
          "
        >
          <img src={logo} alt="Logo" class="object-cover h-full w-full" />
        </div>
        <span
          className="
            font-bold
            leading-none
            text-[#1A3B50]
            text-lg
            md:text-xl
            tracking-tight
          "
        >
          TradeM8
        </span>
      </div>

      <a href="#waitlist">
        <Button variant="default" size="lg" className="text-sm md:text-base">
          Join the Waitlist
        </Button>
      </a>
    </nav>
  );
}
export default Navbar;
