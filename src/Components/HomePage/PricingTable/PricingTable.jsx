import { FaArrowUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const PricingTable = () => {
  return (
    <div className="bg-[#e9e4e4]">
      <div className="container m-auto py-36">
        {/*-----------Heading-------*/}
        <div>
          <h3 className="text-zinc-600 text-3xl font-medium uppercase">
            Pricing Table
          </h3>
          <h1 className="text-black font-bold text-4xl md:text-6xl lg:text-6xl xl:text-6xl mt-4 uppercase">
            Be kind to your <br /> mind
          </h1>
        </div>

        <div className="flex  gap-28 flex-col xl:flex-row">
          {/*---------Accrodion--------------*/}
          <div className="mt-20 flex-1">
            {/*---------Accrodion--------1------*/}
            <hr className="bg-slate-950 h-[2px] " />
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-2xl text-black font-bold">
                Design should enrich day
              </div>
              <div className="collapse-content">
                <p className="text-xl text-zinc-800 font-medium py-8">
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </p>
              </div>
            </div>

            {/*---------Accrodion--------2------*/}
            <hr className="bg-slate-950 h-[3px] " />
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-black font-bold">
                Bring their individual experience and creative
              </div>
              <div className="collapse-content">
                <p className="text-xl text-zinc-800 font-medium py-8">
                  This is the second `$item's` accordion body. It is hidden by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes.
                </p>
              </div>
            </div>

            {/*---------Accrodion--------3------*/}
            <hr className="bg-slate-950 h-[3px] " />
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-black font-bold">
                Human centerd design to challenges
              </div>
              <div className="collapse-content">
                <p className="text-xl text-zinc-800 font-medium py-8">
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people
                </p>
              </div>
            </div>
            {/*---------Accrodion--------4------*/}
            <hr className="bg-slate-950 h-[3px] " />
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-black font-bold">
                Desigen should enrich our day
              </div>
              <div className="collapse-content">
                <p className="text-xl text-zinc-800 font-medium py-8">
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people.
                </p>
              </div>
            </div>
            {/*---------Accrodion--------5------*/}
            <hr className="bg-slate-950 h-[2px] " />
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-black font-bold">
                Developing core web applications
              </div>
              <div className="collapse-content">
                <p className="text-xl text-zinc-800 font-medium py-8">
                  Our design services starts and ends with a best-in-class
                  experience strategy that builds brands. Through a process of
                  iteration and prototyping design interfaces that bring joy to
                  people.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 h-[3px] " />
          </div>

          {/*------------Card--------------*/}
          <div className="flex-1">
            {/*----------Card------1-----*/}
            <div className="bg-black w-full p-10 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="w-[130px] h-[50px] bg-black border-[2px] border-zinc-400 rounded-full ml-[90px]">
                  <h3 className="text-lg text-zinc-600 text-center mt-2.5">
                    YEARLY
                  </h3>
                </div>

                <div className="bg-[#ff6347] w-[130px] h-[35px] rounded-md absolute hidden 2xl:block  xl:ml-[500px] -mt-[130px]">
                  <h3 className="text-white text-lg text-center mt-1 uppercase">
                    Best Value
                  </h3>
                </div>

                <div>
                  <h1 className="text-white text-5xl font-medium">
                    $129<small className="text-2xl">.99</small>
                  </h1>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <div className="bg-[#ff6347] w-[50px] h-[50px] rounded-md">
                  <FaCheck className="text-center m-auto text-4xl ml-2  " />
                </div>

                <div className="mt-1">
                  <h2 className="text-white text-4xl font-bold uppercase">
                    14 days free
                  </h2>
                  <h3 className="text-xl text-zinc-500 font-medium mt-4">
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </h3>
                </div>
              </div>
            </div>

            {/*----------Card------2-----*/}
            <div className="bg-white w-full p-10 rounded-2xl mt-7">
              <div className="flex items-center justify-between">
                <div className="w-[130px] h-[50px] border-[2px] border-zinc-800 rounded-full ml-[90px]">
                  <h3 className="text-lg text-zinc-800 text-center mt-2.5">
                    YEARLY
                  </h3>
                </div>

                <div>
                  <h1 className="text-black text-5xl font-medium">
                    $129<small className="text-2xl">.99</small>
                  </h1>
                </div>
              </div>

              <div className="flex gap-10 mt-10">
                <div className="bg-white w-[50px] h-[50px] border-2 border-slate-300 rounded-md">
                  <FaCheck className="text-center m-auto text-4xl ml-2 text-slate-400 " />
                </div>

                <div className="mt-1">
                  <h2 className="text-black text-4xl font-bold uppercase">
                    7 days free
                  </h2>
                  <h3 className="text-xl text-zinc-500 font-medium mt-4">
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </h3>
                </div>
              </div>
            </div>

            {/*-----------Button-----------*/}
            <div className="mt-16">
              <button className="text-xl w-[220px] h-[220px] text-black border-2 border-zinc-900 rounded-full duration-300 bg-[#e9e4e4] overflow-hidden relative z-10 group">
                <span className="text-zinc-700 hover:text-white group-hover:translate-x-3  group-hover:-translate-y-3 ease-in-out duration-300 delay-50 rounded-full absolute inset-0 flex justify-center items-center -z-10 hover:bg-black">
                  Explor Us{" "}
                  <FaArrowUp className="ml-2 rotate-45 -mt-2 text-2xl opacity-70" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
