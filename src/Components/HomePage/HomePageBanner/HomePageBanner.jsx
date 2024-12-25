import { FaPlayCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { HiArrowLongDown } from "react-icons/hi2";
import "../../AllCss/AllCss.css";

const HomePageBanner = () => {
  // max-w-[1180px] mt-[69px]
  return (
    <div className="container m-auto mt-20">
      {/*-------Logo--------Star--------*/}
      <div className="flex items-center justify-between">
        {/*-------Logo--------*/}
        <div className="flex items-center gap-10">
          <h3 className="text-4xl text-black font-bold">DIGITAL</h3>
          <div className="w-[110px] h-[2px] bg-black"></div>
        </div>
        {/*--------Star--------*/}
        <div>
          <img
            src="https://i.ibb.co.com/FwWhsYQ/first-Star.png"
            className="w-[50px]"
          />
          <img
            src="https://i.ibb.co.com/zXpgc5Z/third-Star.png"
            className="w-[20px] ml-12 -mt-2"
          />
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[18rem] font-bold">
            MARK
          </h1>

          <div className="flex items-center gap-6">
            {/*------Video------Player--------*/}
            <div className="w-[160px] h-[160px] border-2 border-black rounded-full hidden xl:block">
              <div className="flex items-center justify-center">
                <FaPlayCircle className="mt-[65px] text-4xl cursor-pointer" />
              </div>
            </div>
            {/*--------Vidio-------Title----------*/}
            <h1 className="text-2xl text-black font-bold hidden xl:block">
              WATCH <br /> VIDEO INTRO
            </h1>
            {/*-------Settings------Icon---------*/}
            <div className="w-[60px] h-[60px] bg-black hidden lg:block">
              <IoSettings className="routetPlassIcon  text-white hover:text-gray-300 text-3xl m-auto absolute mt-[15px] ml-[15px] cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex   lg:items-center xl:items-center  justify-between flex-col-reverse lg:flex-row">
          {/*---------Discreption---------*/}
          <div className="flex  items-start justify-start">
            <h3 className="text-xl md:text-2xl lg:text-2xl font-medium text-zinc-500 ">
              Static and daynamic secure code review <br />
              can prevent a day before your product <br />
              is even released. We can integrate with <br />
              your dev environment
            </h3>
          </div>

          <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[18rem] font-bold text-end">
            ETING
          </h1>
        </div>
      </div>

      {/*---------Banner-------*/}
      <div className="flex items-center justify-between  gap-10">
        {/*---------Down------Arrow--------*/}
        <div className="h-[110px] w-[50px] border-2  border-gray-400 rounded-full hidden xl:block animationHomePage">
          <HiArrowLongDown className="text-5xl text-center mt-[30px] font-normal text-zinc-600"/>
        </div>
        {/*--------Image-------*/}
        <div className="">
        <img
          src="https://i.ibb.co.com/vwFFNSy/modern-open-concept-office.jpg"
          className="h-[40vh] mt-8 mb:mt-0 lg:mt-0 xl:mt-0"
        />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
