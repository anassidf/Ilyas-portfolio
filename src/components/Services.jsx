import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ProgrammingIcon from "../assets/programming-icon.svg";
import AnalysisIcon from "../assets/analysis-icon.svg";
import LegalIcon from "../assets/legal-icon.svg";
import ManufacturerIcon from "../assets/reaching-icon.svg";
import CyberIcon from "../assets/cyber-icon.svg";
import MarketingIcon from "../assets/marketing-icon.svg";
import BillingIcon from "../assets/billing-icon.svg";
import ServicesImage from "../assets/services-image.svg";

const Services = () => {
  const [serviceCards, setServiceCards] = useState([
    {
      cardIcon: CyberIcon,
      serviceName: "Cybersecurity",
      serviceDescription:
        "An advanced automated cybersecurity reconnaissance tool designed to identify vulnerabilities in defense systems. It provides real-time threat detection and scheduled scans to protect critical defense",
    },
    {
      cardIcon: ProgrammingIcon,
      serviceName: "Programming",
      serviceDescription:
        "Our Programming Service provides custom software solutions tailored to your business needs, ensuring efficient and reliable results through expert development.",
    },
    {
      cardIcon: MarketingIcon,
      serviceName: "Marketing and Market Research Services",
      serviceDescription:
        "Our Marketing and Market Research Services help businesses understand their audience, identify opportunities, and develop effective strategies to drive growth and success.",
    },
    {
      cardIcon: LegalIcon,
      serviceName: "Legal Representation Services",
      serviceDescription:
        "Our Legal Representation Services provide expert guidance and support to protect your rights and navigate legal challenges with confidence.",
    },
    {
      cardIcon: AnalysisIcon,
      serviceName: "Market Analysis Services",
      serviceDescription:
        "Our Market Analysis Services deliver key insights into industry trends and customer behavior, helping you make informed business decisions.",
    },
    {
      cardIcon: ManufacturerIcon,
      serviceName: "Reach to manufacturers in different Sectors Services",
      serviceDescription:
        "Our service connects you with manufacturers across various sectors, facilitating partnerships and streamlining your supply chain.",
    },
    {
      cardIcon: BillingIcon,
      serviceName: "Billing Services",
      serviceDescription:
        "Our Billing Services streamline your invoicing and payment processes, ensuring accuracy and efficiency in managing financial transactions.",
    },
  ]);

  return (
    <div id="services-section" className="min-h-screen">
      <div className="min-h-72 bg-dark-yellow shadow-lg p-8 text-center flex items-center justify-center">
        <blockquote className="text-3xl font-bold text-gray-800 italic">
          "Empower Your Business with Sales Solutions That Drive Results.
          Because Your Success is Our Business."
        </blockquote>
      </div>

      {/* service description section */}

      <div className="px-[20px] lg:px-[80px]  my-36">
        <div className="about-us__container flex justify-between items-center ml-4">
          <div className="about-us__textContainer lg:w-[50%]">
            <h2 className="uppercase text-[16px] text-dark-yellow">Services</h2>
            <h2 className="text-[40px] mt-[15px]">
              {" "}
              Discover Our Expert Services <br /> Tailored for Your Success
            </h2>
            <p className="text-[16px] lg:w-[80%] my-[50px] text-light-gray ">
              Explore our diverse range of expert services designed to propel
              your business forward. From strategic insights to hands-on
              support, our tailored solutions are crafted to meet your unique
              needs and drive exceptional results.
            </p>
          </div>
          <div className="hidden lg:block w-[40%]">
            <img
              src={ServicesImage}
              alt="statistics image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        {serviceCards?.map((card, index) => {
          return (
            <ServiceCard
              key={index}
              cardIcon={card.cardIcon}
              serviceName={card.serviceName}
              serviceDescription={card.serviceDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
