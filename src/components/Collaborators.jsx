import YigisanLogo from "../assets/yigitsan-image.svg";
import LampLogo from "../assets/lamp-image.png";
import FoodSoftLogo from "../assets/foodsoft-image.png";
import CngeLogo from "../assets/cnge-image.jpg";
import ExtremeLabLogo from "../assets/xtremelab-image.png";

const Collaborators = () => {
  return (
    <div className="flex justify-center">
      <marquee behavior="" direction="left" className="mt-28 " width="95%">
        <div className="flex  space-x-20 lg:space-x-0 justify-between  items-center w-full">
          <img
            src={YigisanLogo}
            alt="Yigisan logo"
            className="w-auto h-[40px] object-contain grayscale"
          />
          <img
            src={LampLogo}
            alt="lamp logo"
            className="w-auto h-[40px] object-contain grayscale"
          />
          <img
            src={FoodSoftLogo}
            alt="foodsoft logo"
            className="w-auto h-[40px] object-contain grayscale"
          />
          <img
            src={CngeLogo}
            alt="cnge logo"
            className="w-auto h-[40px] object-contain grayscale"
          />
          <img
            src={ExtremeLabLogo}
            alt="extremelab logo"
            className="w-auto h-[40px] object-contain grayscale"
          />
        </div>
      </marquee>
    </div>
  );
};

export default Collaborators;
