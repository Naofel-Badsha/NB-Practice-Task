import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const FeaturedWork = () => {
  return (
    <div className="bg-black">
      <div className="container m-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={true}
          delay={"100"}
          loop={true}
          pagination={{ clickable: true }}
        >
          {/*--------Silder-------1-------*/}
          <SwiperSlide className="">
            <div className="p-28">
              {/*--------------Image--------------*/}
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co.com/k0FfCzw/reward-1.png"
                  className="h-[60vh] mt-28 opacity-50"
                />
              </div>

              {/*-------------Text---------*/}
              <div className="">
                <h3 className="absolute top-72 text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]  font-bold py-5">
                  <small>BENJON </small> <br />
                  <small className=" ml-16 md:ml-60 lg:ml-60 xl:ml-60 ">
                    WEBSITE
                  </small>{" "}
                  <br />
                  <small>2012</small>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          {/*--------Silder-------2-------*/}
          <SwiperSlide>
            <div className="p-28">
              {/*--------------Image--------------*/}
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co.com/JkwxPCn/reward-2.png"
                  className="h-[60vh] mt-28 opacity-50"
                />
              </div>
              {/*-------------Text---------*/}
              <div className="">
                <h3 className="absolute top-72 text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]  font-bold py-5">
                  <small>BENJON </small> <br />
                  <small className=" ml-16 md:ml-60 lg:ml-60 xl:ml-60 ">
                    WEBSITE
                  </small>{" "}
                  <br />
                  <small>2012</small>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          {/*--------Silder-------3-------*/}
          <SwiperSlide>
            <div className="p-28">
              {/*--------------Image--------------*/}
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co.com/LQDL6HB/reward-3.png"
                  className="h-[60vh] mt-28 opacity-50"
                />
              </div>

              {/*-------------Text---------*/}
              <div className="">
                <h3 className="absolute top-72 text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]  font-bold py-5">
                  <small>BENJON </small> <br />
                  <small className=" ml-16 md:ml-60 lg:ml-60 xl:ml-60 ">
                    WEBSITE
                  </small>{" "}
                  <br />
                  <small>2012</small>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          {/*--------Silder-------4-------*/}
          <SwiperSlide>
            <div className="p-28">
              {/*--------------Image--------1------*/}
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co.com/hMCnYYB/reward-6.png"
                  className="h-[60vh] mt-28 opacity-50"
                />
              </div>

              {/*-------------Text---------*/}
              <div className="">
                <h3 className="absolute top-72 text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]  font-bold py-5">
                  <small>BENJON </small> <br />
                  <small className=" ml-16 md:ml-60 lg:ml-60 xl:ml-60 ">
                    WEBSITE
                  </small>{" "}
                  <br />
                  <small>2012</small>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          {/*--------Silder-------5-------*/}
          <SwiperSlide>
            <div className="p-28">
              {/*--------------Image--------------*/}
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co.com/xYqFmfr/reward-5.png"
                  className="h-[60vh] mt-28 opacity-50"
                />
              </div>

              {/*-------------Text---------*/}
              <div className="">
                <h3 className="absolute top-72 text-white text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]  font-bold py-5">
                  <small>BENJON </small> <br />
                  <small className=" ml-16 md:ml-60 lg:ml-60 xl:ml-60 ">
                    WEBSITE
                  </small>{" "}
                  <br />
                  <small>2012</small>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedWork;
