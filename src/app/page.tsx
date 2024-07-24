import Navbar from "@/components/NavigationBar" 
import { Homepage } from "@/components/LandingPage";
import { PopularFoods } from "@/components/Categories";
import { SpecialOffer} from "@/components/SpecialOffer";
import Footer from "@/components/Footer";
import DownloadAppSection from "@/components/Download";
import BestOffer from "@/components/Offers";

const Home= () => {
  return(
    <main>
      <Navbar/>
      <Homepage/>
      <PopularFoods/>
      <BestOffer/>
      <SpecialOffer/>
      <DownloadAppSection/>
      <Footer/>
     

    </main>

  )
}

export default Home;