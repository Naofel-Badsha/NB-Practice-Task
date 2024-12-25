import "../../AllCss/AllCss.css";

const MarketingAgency = () => {
  return (
    <div className="bg-black">
      <div className="container m-auto">
        {/*---------Top-----Bar---------*/}
        <div className="flex items-center justify-center">
          <div className="hidden lg:block w-[1px] h-[120px] bg-zinc-400 absolute mt-[120px] ml-[400px]"></div>
        </div>

        {/*------------Main------Container---------*/}
        <div className="flex gap-24 py-20 md:py-28 lg:py-36 xl:py-40 flex-col lg:flex-row">
          {/*------------Image-----------*/}
          <div className="flex-1">
            <div className="servicesImages hidden  xl:hidden 2xl:block "></div>
            <div className="">
              <img
                src="https://i.ibb.co.com/zXwccwq/marketingteam-scaled.jpg"
                className="xl:block 2xl:hidden md:h-[70vh]"
              />
            </div>
          </div>
          {/*------------Text-----------*/}
          <div className="flex-1">
            <div>
              <h3 className="text-white text-[22px] font-medium uppercase">
                Who We Are
              </h3>
              <h1 className="text-white mt-5 text-4xl lg:text-4xl xl:text-6xl font-bold uppercase ">
                We are leading <br /> digital marketing <br /> agency.
              </h1>
              {/*-------------------------*/}
              <div className="flex items-center justify-start lg:justify-end ">
                <div>
                  <p className="text-zinc-400 text-2xl font-light mt-24 ">
                    We’re a team of strategic mdigital marketing <br /> working
                    globally with largest brands, We believe <br /> that
                    progress only happens when you refused to <br /> play things
                    safe. We combine ideas and behaviors, <br /> and insights
                    with design, technological data to <br /> produce brand
                    experiences that customers love <br /> our services.
                  </p>
                  {/*-----------Button-----------*/}
                  <div className="mt-16">
                    <button className="text-xl w-[200px] h-[200px] text-white border-2 border-zinc-400 rounded-full duration-300 bg-black overflow-hidden relative z-10 group">
                      <span className="text-zinc-400 group-hover:translate-x-3  group-hover:-translate-y-3 ease-in-out duration-300 delay-50 rounded-full absolute inset-0 flex justify-center items-center -z-10 hover:bg-white">
                        Button
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------Top-----Bar---------*/}
        <div className="flex items-center justify-center">
          <div className="hidden lg:block w-[1px] lg:-mt-[700px]  lg:h-[700px] xl:h-[900px] xl:-mt-[900px] bg-zinc-400 absolute  ml-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAgency;
