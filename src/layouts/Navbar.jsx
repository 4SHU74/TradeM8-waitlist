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
        px-8
        py-4
        w-full
        bg-#EDEEF0
      "
    >
      <div className="flex gap-3 items-center w-fit">
        <div
          class="
            overflow-hidden
            h-10
            w-10
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
            text-xl
            tracking-tight
          "
        >
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
