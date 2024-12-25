import BrandCard from "../../Components/HomePage/BrandCard/BrandCard";
import HomePageBanner from "../../Components/HomePage/HomePageBanner/HomePageBanner";
import MarketingAgency from "../../Components/HomePage/MarketingAgency/MarketingAgency";
import MarketingServices from "../../Components/HomePage/MarketingServices/MarketingServices";



const Home = () => {
  return (
    <div>
       <HomePageBanner></HomePageBanner>
       <BrandCard></BrandCard>
       <MarketingAgency></MarketingAgency>
       <MarketingServices></MarketingServices>
    </div>
  );
};

export default Home;
