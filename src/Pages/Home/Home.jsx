import BrandCard from "../../Components/HomePage/BrandCard/BrandCard";
import ChoseUs from "../../Components/HomePage/ChoseUs/ChoseUs";
import FeaturedWork from "../../Components/HomePage/FeaturedWork/FeaturedWork";
import HomePageBanner from "../../Components/HomePage/HomePageBanner/HomePageBanner";
import MarketingAgency from "../../Components/HomePage/MarketingAgency/MarketingAgency";
import MarketingServices from "../../Components/HomePage/MarketingServices/MarketingServices";
import PricingTable from "../../Components/HomePage/PricingTable/PricingTable";
import Testimonial from "../../Components/HomePage/Testimonial/Testimonial";



const Home = () => {
  return (
    <div>
       <HomePageBanner></HomePageBanner>
       <BrandCard></BrandCard>
       <MarketingAgency></MarketingAgency>
       <MarketingServices></MarketingServices>
       <FeaturedWork></FeaturedWork>
       <Testimonial></Testimonial>
       <ChoseUs></ChoseUs>
       <PricingTable></PricingTable>
    </div>
  );
};

export default Home;
