import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";


function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link to="hero" smooth={true} duration={600} offset={-80} className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link to="about" smooth={true} duration={600} offset={-80} className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link to="work" smooth={true} duration={600} offset={-80} className="nav-link">
          Work
        </Link>
      </li>
      <li className="nav-li">
        <Link to="contact" smooth={true} duration={600} offset={-80} className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 cursor-pointer'>
        <div className='mx-auto c-space max-w-7xl py-3'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white" href="/">
                Tanishk
                </a>
                <button onClick={() => setIsOpen(!isOpen)}
                  className="flex cursor-pointer text-neutral-400 hover:text-white sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-15'/>
                </button>
                <nav className="hidden sm:flex">
                  <Navigation/>
                </nav>
            </div>
        </div>
        {isOpen && (
          <motion.div 
              className="block overflow-hidden text-center sm:hidden" 
              initial={{opacity:0,x:-10}} 
              animate={{opacity:1,x:0}} 
              style={{maxHeight:"100vh"}} 
              transition={{duration:1}}
        >
          <nav className="pb-5">
            <Navigation/>
          </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar;