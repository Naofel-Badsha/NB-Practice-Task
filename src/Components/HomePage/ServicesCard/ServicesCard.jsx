import services1 from "../../../assets/facial-treatment 1.svg";
import services2 from "../../../assets/hair-dye 1.svg";
import services3 from "../../../assets/makeup 1.svg";

const ServicesCard = () => {
  return (
    <div className="max-w-[1180px] mt-[69px] m-auto">
      <h2 className="text-[#111430] text-center text-[34px] font-bold mt-[92px]">
        Our Awesome <span className="text-[#F63E7B]">Services</span>
      </h2>
      {/*-------Services----Card------*/}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[72px]">
        {/* ------card----1---- */}
        <div className="w-[370px] h-[319px] rounded-[10px] pt-[36px] bg-[#fff] ">
          <div className="w-[72px] h-[72px] bg-[#e2dedf]  rounded-full m-auto flex items-center justify-center">
            <img src={services1} className="" />
          </div>

          <h4 className="text-[#111430] text-center text-[20px] font-normal mt-[18px]">Anti Age Face Treatment</h4>
          <h5 className="text-center text-[20px] font-normal mt-[18px] text-[#F63E7B]">$199</h5>
          <p className="w-[282px] h-[120px] text-[#000000] opacity-40 mt-[8px] text-center text-[16px] mr-38 ml-[50px] mt[15px]">
          We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
          </p>
        </div>
        {/* ------card----2---- */}
        <div className="w-[370px] h-[319px] rounded-[10px] pt-[36px] bg-[#fff] shadow-md shadow-slate-900">
          <div className="w-[72px] h-[72px] bg-[#e2dedf]  rounded-full m-auto flex items-center justify-center">
            <img src={services2} className="" />
          </div>

          <h4 className="text-[#111430] text-center text-[20px] font-normal mt-[18px]">Hair Color & Styleing</h4>
          <h5 className="text-center text-[20px] font-normal mt-[18px] text-[#F63E7B]">$99</h5>
          <p className="w-[282px] h-[120px] text-[#000000] opacity-40 mt-[8px] text-center text-[16px] mr-38 ml-[50px] mt[15px]">
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
        {/* ------card----3---- */}
        <div className="w-[370px] h-[319px] rounded-[10px] pt-[36px] bg-[#fff] ">
          <div className="w-[72px] h-[72px] bg-[#e2dedf]  rounded-full m-auto flex items-center justify-center">
            <img src={services3} className="" />
          </div>

          <h4 className="text-[#111430] text-center text-[20px] font-normal mt-[18px]">Skin Care Treatment</h4>
          <h5 className="text-center text-[20px] font-normal mt-[18px] text-[#F63E7B]">$299</h5>
          <p className="w-[282px] h-[120px] text-[#000000] opacity-40 mt-[8px] text-center text-[16px] mr-38 ml-[50px] mt[15px]">
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
