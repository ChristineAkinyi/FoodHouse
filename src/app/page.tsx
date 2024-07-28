import Navbar from "@/components/NavigationBar" 
import { Homepage } from "@/components/LandingPage";
import { PopularFoods } from "@/components/Categories";
import { SpecialOffer} from "@/components/SpecialOffer";
import { Services } from "@/components/Services";
import {Testimonial } from "@/components/Testimonials"
import Footer from "@/components/Footer";
import DownloadAppSection from "@/components/Download";
import BestOffer from "@/components/Offers";

const Home= () => {
  return(
    <main>
      <Navbar/>
      <Homepage/>
      <PopularFoods/>
      <SpecialOffer/>
      <BestOffer/>
      <Services/>
      <Testimonial/>
      <DownloadAppSection/>
      <Footer/>
     

    </main>

  )
}

export default Home;