import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    location.pathname === "/" ? setIsHomePage(true) : setIsHomePage(false);

    const handleStickyNavbar = () => {
      const navBar = document.getElementById("navBar");

      if (window.scrollY > 100) {
        navBar.style.position = "sticky";
        navBar.style.top = "0";
        navBar.style.zIndex = "1";
        navBar.style.boxShadow = "0 6px 6px rgba(0, 0, 0, 0.1)";
      } else {
        navBar.style.boxShadow = "none";
      }
    };
    document.addEventListener("scroll", handleStickyNavbar);

    // if (hash) {
    //     const element = document.getElementById(hash.replace('#', ''));
    //     if (element) {
    //       element.scrollIntoView({
    //         behavior: 'smooth', // Smooth scroll
    //         block: 'start',     // Align to the top
    //       });
    //     }
    //   }
  }, [location.pathname /*hash*/]);

  const menuToggler = (element) => {
    const menu = element.target.closest("#menu");
    menu.classList.toggle("menu");
    const line1 = menu?.querySelector(".line__one");
    const line2 = menu?.querySelector(".line__two");
    const line3 = menu?.querySelector(".line__three");

    if (menu?.classList.contains("menu")) {
      line1.style.transform = "translateY(0) rotate(0)";
      line3.style.transform = "translateY(14px) rotate(0)";
      line2.style.display = "block";
      document.getElementById("menu-links").style.opacity = "0";
      document.getElementById("menu-links").style.visibility = "hidden";
    } else {
      line1.style.transform = "translateY(7px) rotate(45deg)";
      line3.style.transform = "translateY(4px) rotate(-45deg)";
      line2.style.display = "none";
      document.getElementById("menu-links").style.opacity = "1";
      document.getElementById("menu-links").style.visibility = "visible";
    }
  };

  const menuRemover = () => {
    const menu = document.getElementById("menu");
    const line1 = menu?.querySelector(".line__one");
    const line2 = menu?.querySelector(".line__two");
    const line3 = menu?.querySelector(".line__three");
    menu.classList.toggle("menu");

    line1.style.transform = "translateY(0) rotate(0)";
    line3.style.transform = "translateY(14px) rotate(0)";
    line2.style.display = "block";
    document.getElementById("menu-links").style.opacity = "0";
    document.getElementById("menu-links").style.visibility = "hidden";

  };
  return (
    <nav id='navBar' className='bg-dark-gray h-[76px] p-[20px] lg:px-20 text-white flex items-center'>
       
      
       <div className='w-full flex justify-between items-center'>
        
        <div className='w-full lg:w-fit flex items-center justify-between'>
         <Link to="/" exact>
            <img src={Logo} alt="site's logo" className='w-[100px] h-fit object-contain cursor-pointer' />
         </Link>
          
        <div className="menu relative cursor-pointer justify-center lg:hidden h-[20px]" onClick={menuToggler} id='menu'>
                <span className="line__one bg-white w-[35px] h-[3px] rounded-[5px] block transition-transform ease-in-out duration-500"></span>
                <span className="line__two bg-white w-[35px] h-[3px] rounded-[5px] block translate-y-[7px] transition-transform ease-in-out duration-500"></span>
                <span className="line__three bg-white w-[35px] h-[3px] rounded-[5px] block translate-y-[14px] transition-transform ease-in-out duration-500 "></span>

        </div>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex  gap-[70px] text-[15px] tracking-[1.5px] font-[700] uppercase">
          {isHomePage ? (
            <>
              <a
                href="#landing-section"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500  hover:after:w-full'
              >
                Home
              </a>
              <a
                href="#about-section"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500  hover:after:w-full'
              >
                About us
              </a>
              <a
                href="#services-section"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500 hover:after:w-full'
              >
                Services
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500  hover:after:w-full'
              >
                Home
              </Link>
              <Link
                to="/about"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500  hover:after:w-full'
              >
                About us
              </Link>
              <Link
                to="#"
                className='relative after:content-[""] after:absolute after:h-[2px] after:left-0 after:bottom-[-3px] after:w-0 after:bg-white after:transition-all ease-in-out after:duration-500 hover:after:w-full'
              >
                Services
              </Link>
            </>
          )}
        </div>
      </div>

      {/* mobile menu 76px*/}
      <aside
        id="menu-links"
        className="lg:hidden absolute top-[76px] left-0 right-0 bg-dark-gray w-full h-screen pl-[17px] pr-[17px] pt-[17px] uppercase transition-all ease-in-out duration-500 z-10 opacity-0"
      >
        {/* about us, what we do, contact us, work with us */}
        <div className="flex flex-col w-full h-full items-center text-[15px]">
          {isHomePage ? (
            <>
              
              <a
                href="#landing-section"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                Home
              </a>

              <a
                href="#about-section"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                About us
              </a>
              <a
                href="#services-section"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
               Services
              </a>
              
              <a
                href="#"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                {" "}
                Contact us
              </a>
            </>
          ) : (
            <>
              
              <Link
                to="/"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                About us
              </Link>
              <Link
                to="/#services-section"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
               Services
              </Link>
              
              <Link
                to="/"
                className="w-full pb-[10px] mb-[10px] border-b-[3px]  border-solid"
                onClick={menuRemover}
              >
                {" "}
                Contact us
              </Link>
            </>
          )}
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
