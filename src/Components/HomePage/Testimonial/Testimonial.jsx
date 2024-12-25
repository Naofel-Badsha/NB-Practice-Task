

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="container m-auto mt-20">
      {/*----------Top-------Image-------*/}
      <div className="flex items-center justify-between px-64">
        <img src="https://i.ibb.co.com/Chvnjgc/digital-3.jpg" className="w-[200px] h-[200px] hidden xl:block" />
        <img src="https://i.ibb.co.com/ZGZF8V3/digital-5.webp" className="w-[150px] h-[150px] hidden xl:block" />
      </div>

      {/*----------Middol-------Image-------*/}
      <div className="flex items-center justify-between">
        <div>
          <img src="https://i.ibb.co.com/BLcjmHQ/digital-6.webp" className="w-[150px] h-[150px] hidden xl:block" />
        </div>

        {/*----------Testimonial--------text--------*/}
        <div className="py-10">
          <div className="py-10 w-[700px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              delay={"100"}
              loop={true}
            >
              {/*--------Silder-------1-------*/}
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <FaQuoteLeft className="text-8xl text-black " />
                    </div>
                    <p className="text-black text-2xl py-14">
                      When we talk about Alte, we do not mean a <br />
                      typical business partner, but rather a team that <br />
                      collaborates width us daily, always there for us <br />
                      when we encounter difficultes and celebrate <br />
                      achivements. We see in Alts our best ally for <br />
                      success!
                    </p>
                    <div className="text-center">
                      <h3 className="text-black text-4xl font-bold">
                        MARIA D. HALK
                      </h3>
                      <h5 className="text-lg text-zinc-800 mt-5">
                        MANAGING DIRECTOR
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*--------Silder-------2-------*/}
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <FaQuoteLeft className="text-8xl text-black " />
                    </div>
                    <p className="text-black text-2xl py-14">
                      When we talk about Alte, we do not mean a <br />
                      typical business partner, but rather a team that <br />
                      collaborates width us daily, always there for us <br />
                      when we encounter difficultes and celebrate <br />
                      achivements. We see in Alts our best ally for <br />
                      success!
                    </p>
                    <div className="text-center">
                      <h3 className="text-black text-4xl font-bold">
                        MARIA D. HALK
                      </h3>
                      <h5 className="text-lg text-zinc-800 mt-5">
                        MANAGING DIRECTOR
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*--------Silder-------3-------*/}
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <FaQuoteLeft className="text-8xl text-black " />
                    </div>
                    <p className="text-black text-2xl py-14">
                      When we talk about Alte, we do not mean a <br />
                      typical business partner, but rather a team that <br />
                      collaborates width us daily, always there for us <br />
                      when we encounter difficultes and celebrate <br />
                      achivements. We see in Alts our best ally for <br />
                      success!
                    </p>
                    <div className="text-center">
                      <h3 className="text-black text-4xl font-bold">
                        MARIA D. HALK
                      </h3>
                      <h5 className="text-lg text-zinc-800 mt-5">
                        MANAGING DIRECTOR
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*--------Silder-------4-------*/}
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <FaQuoteLeft className="text-8xl text-black " />
                    </div>
                    <p className="text-black text-2xl py-14">
                      When we talk about Alte, we do not mean a <br />
                      typical business partner, but rather a team that <br />
                      collaborates width us daily, always there for us <br />
                      when we encounter difficultes and celebrate <br />
                      achivements. We see in Alts our best ally for <br />
                      success!
                    </p>
                    <div className="text-center">
                      <h3 className="text-black text-4xl font-bold">
                        MARIA D. HALK
                      </h3>
                      <h5 className="text-lg text-zinc-800 mt-5">
                        MANAGING DIRECTOR
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*--------Silder-------5-------*/}
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <div>
                    <div className="flex items-center justify-center text-center">
                      <FaQuoteLeft className="text-8xl text-black " />
                    </div>
                    <p className="text-black text-2xl py-14">
                      When we talk about Alte, we do not mean a <br />
                      typical business partner, but rather a team that <br />
                      collaborates width us daily, always there for us <br />
                      when we encounter difficultes and celebrate <br />
                      achivements. We see in Alts our best ally for <br />
                      success!
                    </p>
                    <div className="text-center">
                      <h3 className="text-black text-4xl font-bold">
                        MARIA D. HALK
                      </h3>
                      <h5 className="text-lg text-zinc-800 mt-5">
                        MANAGING DIRECTOR
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div>
          <img src="https://i.ibb.co.com/nB3nJxp/147-3-scaled.jpg" className="w-[250px] h-[250px] hidden xl:block" />
        </div>
      </div>

      {/*----------Bottom-------Image-------*/}
      <div className="flex items-center justify-between px-40">
        <img src="https://i.ibb.co.com/0FDfqGC/young-creative-startup-team-discussing-600nw-658472668.webp" className="w-[200px] h-[200px] hidden xl:block"/>
        <img src="https://i.ibb.co.com/N2ZKsh5/digital-marketing-team.webp" className="w-[200px] h-[200px] -mt-[550px] -left-60 hidden xl:block"/>
      </div>
    </div>
  );
};

export default Testimonial;
