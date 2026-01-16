import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-EDEEF0 my-3">
      <div className="flex items-center gap-3 w-fit">
        <img src={logo} className="w-16 h-16 rounded-lg object-contain" />
        <span className="font-bold text-[#1A3B50] text-xl leading-none">
          TradeM8
        </span>
      </div>

      <button
        className="
          bg-[#0F832E]
          text-white
          px-6
          py-2
          rounded-lg
          font-medium
          hover:bg-[#0F832E]/90
          h-13.5
          transition-all
        "
      >
        Join the Waitlist
      </button>
    </nav>
  );
}
export default Navbar;
