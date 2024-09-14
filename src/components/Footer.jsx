import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import EmailIcon from '../assets/email-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'

const Footer = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setIsHomePage(true) : setIsHomePage(false);
  }, [location.pathname]);

  return (
    <footer className="min-h-[350px] bg-dark-gray text-white  p-[20px] lg:px-20 relative">
      <div className='flex flex-col items-start lg:flex-row lg:justify-between lg:m-[40px] lg:mx-[100px]'>
        <div className='flex flex-col'>
        <h2 className="text-lg font-bold mb-[19px]">
          ME Business Development Consultancy
        </h2>
        <p className="w-fit lg:w-[30rem] mb-[21px]">
          {" "}
          Empower Your Business with Sales Solutions That Drive Results. Because
          Your Success is Our Business.Empower Your Business with Sales
          Solutions That Drive Results. Because Your Success is Our Business.{" "}
        </p>
        {/* social media */}
        <div className="flex lg:flex-row items-center w-full gap-x-3">
         <a href="https://www.linkedin.com/company/me-business-development-consultancy/" title='go to ME Business Development Consultancy linkedin profile'>
          <img
            src={LinkedinIcon}
            alt="company's linkedin"
            className="w-[29px] h-[29px] cursor-pointer"
          />
          </a>

          <a href="mailto:contact@meconsultancygroup.com" title='send email to contact@meconsultancygroup.com'>
          <img
            src={EmailIcon}
            alt="company's email"
            className="w-[29px] h-[29px] cursor-pointer"
          />
          </a>
        </div>
        </div>

        <div className='flex flex-col mb-20 mt-5'> 
          <h2 className='text-lg font-bold border-solid border-white border-b-[2px] w-fit mb-[21px]'>Links</h2>
          <div className="flex flex-col  gap-y-[11px] text-[15px] tracking-[1.5px] font-[700] ">
          {isHomePage ? (
            <>
              <a
                href="#landing-section"
                className='hover:opacity-80 transition-all ease-in-out duration-300'
              >
                Home
              </a>
              <a
                href="#about-section"
                className='hover:opacity-80 transition-all ease-in-out duration-300'

              >
                About us
              </a>
              <a
                href="#services-section"
                className='hover:opacity-80 transition-all ease-in-out duration-300'

              >
                Services
              </a>
             
            </>
          ) : (
            <>
              <Link
                to="/"
                className='hover:opacity-80 transition-all ease-in-out duration-200'

              >
                Home
              </Link>
              <Link
                to="/about"
                className='hover:opacity-80 transition-all ease-in-out duration-200'

              >
                About us
              </Link>
              <Link
                to="#"
                className='hover:opacity-80 transition-all ease-in-out duration-200'

              >
                Services
              </Link>
            </>
          )}
        </div>
        </div>
      </div>

      <div
        id="footer-bottom"
        className="w-full h-20 absolute bottom-0 left-0 right-0 flex items-center justify-between bg-slight-dark-gray p-[20px] lg:px-20"
      >
        <Link to="/" exact="true">
          <img
            src={Logo}
            alt="website's logo"
            className="w-[50px] h-[50px] cursor-pointer"
          />
        </Link>
        <h2>2024 All Rights Reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer