import { FaArrowUp } from "react-icons/fa";

const RecentBlog = () => {
  return (
    <div className="container m-auto py-44">
      {/*---------Top-----Bar---------*/}
      <div className="flex items-center justify-center">
        <div className="hidden lg:block w-[1px] h-[150px] bg-zinc-400 absolute -mt-[200px] mr-48"></div>
      </div>

      {/*------------Heading----------*/}
      <div className="flex items-center justify-start md:justify-center lg:justify-center xl:justify-center ">
        <div>
          <h3 className="text-zinc-600 text-3xl font-medium uppercase">
            Recent Blog
          </h3>
          <h1 className="text-black font-bold text-4xl md:text-6xl lg:text-6xl xl:text-6xl mt-4 uppercase">
            Read Updated <br /> Journal
          </h1>
        </div>
      </div>

      {/*---------Services-----Discreption---------*/}
      <div className="flex items-center justify-center ml-[0px] lg:ml-[500px] xl:ml-[600px]">
        <p className="text-zinc-700 text-2xl font-medium py-24 md:py-28 lg:py-28">
          Consumers today rely heavily on digital means to <br />
          research products. We research a brand of bldend <br />
          engaging with it, according to the meanwhile, 51% <br />
          of consumers say they use Google to research <br />
          products before buying.
        </p>
      </div>

      {/*---------Bottom-----Bar---------*/}
      <div className="flex items-center justify-center">
        <div className="hidden lg:block w-[1px]  h-[250px] -mt-[400px] bg-zinc-400 absolute mr-48"></div>
      </div>

      {/*---------Main-------Card--------*/}
      <div className="flex items-center flex-col xl:flex-row gap-44  xl:gap-[350px] 2xl:gap-[500px]">
        {/*------------Card-------1--------*/}
        <div>
          <div className="relative overflow-hidden">
            <img
              src="https://i.ibb.co.com/ZGZF8V3/digital-5.webp"
              className="w-full h-[500px] lg:w-[350px] xl:w-[350px] hover:scale-125 duration-300 "
            />
          </div>

          <div className="absolute bg-white p-12 border cursor-pointer ml-12 md:ml-20 lg:ml-36 xl:ml-40 -mt-64">
            <div>
              <h3 className="text-xl font-semibold text-zinc-600">
                UI Desigen. 02 May 2019
              </h3>
              <h1 className="mt-4 text-3xl font-medium mb-14 hover:text-zinc-500 duration-150">
                How to bring fold to you <br /> staetup company with Axtra
              </h1>
            </div>

            <hr className="bg-slate-900 h-[2px]" />
            <button className="flex mt-6 text-zinc-600 text-xl font-semibold">
              Read More{" "}
              <FaArrowUp className="ml-2 rotate-45  text-2xl opacity-70" />
            </button>
          </div>
        </div>

        {/*------------Card-------2--------*/}
        <div>
          <div className="relative overflow-hidden">
            <img
              src="https://i.ibb.co.com/BLcjmHQ/digital-6.webp"
              className="w-full h-[500px] lg:w-[350px] xl:w-[350px] hover:scale-125 duration-300 "
            />
          </div>

          <div className="absolute bg-white p-12 border cursor-pointer ml-12 md:ml-36 lg:ml-40 xl:ml-48 -mt-64">
            <div>
              <h3 className="text-xl font-semibold text-zinc-600">
                UI Desigen. 02 May 2019
              </h3>
              <h1 className="mt-4 text-3xl font-medium mb-14 hover:text-zinc-500 duration-150">
                How to bring fold to you <br /> staetup company with Axtra
              </h1>
            </div>

            <hr className="bg-slate-900 h-[2px]" />
            <button className="flex mt-6 text-zinc-600 text-xl font-semibold">
              Read More{" "}
              <FaArrowUp className="ml-2 rotate-45  text-2xl opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
