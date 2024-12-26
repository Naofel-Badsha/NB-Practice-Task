
import BrandCard from "../../Components/HomePage/BrandCard/BrandCard";
import ChoseUs from "../../Components/HomePage/ChoseUs/ChoseUs";
import FeaturedWork from "../../Components/HomePage/FeaturedWork/FeaturedWork";
import HomePageBanner from "../../Components/HomePage/HomePageBanner/HomePageBanner";
import MarketingAgency from "../../Components/HomePage/MarketingAgency/MarketingAgency";
import MarketingServices from "../../Components/HomePage/MarketingServices/MarketingServices";
import PricingTable from "../../Components/HomePage/PricingTable/PricingTable";
import RecentBlog from "../../Components/HomePage/RecentBlog/RecentBlog";
import Testimonial from "../../Components/HomePage/Testimonial/Testimonial";
import { BiUpArrowAlt } from "react-icons/bi";

const Home = () => {
  const handlePosition = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="container m-auto">
        <div className="flex">
          <button
            onClick={handlePosition}
            className="btn btn-circle w-20 h-20 bg-light-blue-600 hover:bg-black text-white fixed right-5 z-10 bottom-5"
          >
            <BiUpArrowAlt  className="text-4xl " />
          </button>
        </div>
      </div>

      <HomePageBanner></HomePageBanner>
      <BrandCard></BrandCard>
      <MarketingAgency></MarketingAgency>
      <MarketingServices></MarketingServices>
      <FeaturedWork></FeaturedWork>
      <Testimonial></Testimonial>
      <ChoseUs></ChoseUs>
      <PricingTable></PricingTable>
      <RecentBlog></RecentBlog>
    </div>
  );
};

export default Home;
