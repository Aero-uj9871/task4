import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <nav className="bg-[#3c64b1]/6 shadow-sm p-4 flex items-center justify-between md:justify-around gap-12 overflow-x-hidden">
      <div className=""><Link to="/"><img src={logo} alt="" className="h-[35px] md:h-[40px] object-contain w-full" /></Link></div>
      <div className="lg:hidden"> 
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex text-nowrap justify-around space-x-6 text-md md:{space-x-6 text-3xl} items-center  sm:{w-120 mr-4}">
        <li><Link to="/" className="text-navTextCol font-navabarLinks hover:text-blue-500">Home</Link></li>
        <li><Link to="/about" className="text-navTextCol font-navabarLinks hover:text-blue-500">About Us</Link></li>
        <li><Link to="/villas" className="text-navTextCol font-navabarLinks hover:text-blue-500">Villas</Link></li>
        <li><Link to="/services" className="text-navTextCol font-navabarLinks hover:text-blue-500">Services</Link></li>
        <li><Link to="/partners" className="text-navTextCol font-navabarLinks hover:text-blue-500">Partner with us</Link></li>
        <li><Link to="/contactUs" className="bg-primary font-navabarLinks text-white px-4 py-2 rounded hover:bg-blue-700">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;