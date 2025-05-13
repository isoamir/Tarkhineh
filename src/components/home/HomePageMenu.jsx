import React from "react";
import HomePageMenuItem from "./HomePageMenuItem";

// icons
import { searchIcon } from "../../icons/homePageIcons";

// images
import Maincourse from "../../images/main-course.png";
import Appetizer from "../../images/appetizer.png";
import Dessert from "../../images/dessert.png";
import Drink from "../../images/drink.png";
import { Link } from "react-router-dom";

// styles
import { searchBoxStyle, inputSearchStyle } from "../shared/SearchProduct";

const HomePageMenu = () => {
  return (
    <div className="text-center container max-w-[1224px] mx-auto mt-4 ">
      <div className="md:hidden px-5">
        <div className={searchBoxStyle}>
          <input type="text" placeholder="جستجو" className={inputSearchStyle} />
          <span>{searchIcon}</span>
        </div>
      </div>

      <h3 className="text-[#353535] font-bold mb-3 md:mb-5 lg:mb-8 md:mt-12 md:text-xl lg:text-2xl">
        منوی رستوران
      </h3>

      <div className="flex flex-col justify-center md:flex-row gap-y-10 items-center">
        <div className="flex items-center justify-center ">
          <Link to="/menu">
            <HomePageMenuItem image={Maincourse} title={"غذای اصلی"} />
          </Link>
          <Link to="/menu">
            <HomePageMenuItem image={Appetizer} title={"پیش غذا"} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/menu">
            <HomePageMenuItem image={Dessert} title={"دسر"} />
          </Link>
          <div className="relative flex flex-col items-center max-w-none max-h-none text-center">
            <Link to="/menu" className="">
              <HomePageMenuItem title={"نوشیدنی"} />
            </Link>
            <img
              src={Drink}
              alt="drink"
              className="    absolute
    w-[90px] h-[110px]         /* xs: موبایل خیلی کوچیک */
    sm:w-[100px] sm:h-[120px]  /* sm: موبایل متوسط */
    md:w-[120px] md:h-[150px]  /* md: تبلت */
    lg:w-[152px] lg:h-[192px]  /* lg: لپ‌تاپ */
    xl:w-[170px] xl:h-[210px]  /* xl: دسکتاپ بزرگ */
    2xl:w-[190px] 2xl:h-[245px]/* 2xl: مانیتور خیلی بزرگ */

    max-w-[398px] max-h-[432px] /* حداکثر ابعاد */
    
    top-0                 /* پیش‌فرض */
    sm:-top-[3px]
    md:-top-[5px]
    lg:top-1
    xl:top-[17px]
    2xl:top-[10px]

    object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMenu;
