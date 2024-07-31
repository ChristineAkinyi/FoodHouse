// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      <section>
      <footer className="bg-black text-white py-12 p-4 text-base flex mb-px ">
        
        
          <div className="ml-[200px]">
            <h3 className="text-xl font-semibold mb-4">FoodHouse<span className="text-amber-400 ">.</span></h3>
            <p className="text-gray-400 text-xl">Best cooks and best delivery guys all</p>
            <p className="text-gray-400 text-xl">at your service. Hot tasty food will</p>
            <p className="text-gray-400 text-xl">reach you in 60 minutes.</p>

            <div className="flex space-x-4 mt-4">
             <FaFacebookF className="text-yellow-500 bg-white rounded-sm w-6 h-6"/>
              <FaTwitter className="text-yellow-500 bg-white rounded-sm w-6 h-6"/>
              <FaLinkedinIn className="text-yellow-500 bg-white rounded-sm w-6 h-6"/>
            </div>
          </div>

         <div className="flex ml-[400px] gap-[80px] text-xl pt-5">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-primary">Career</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Press Info</a></li>
              <li><a href="#" className="hover:text-primary">Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Fudo</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-primary">Why Fudo</a></li>
              <li><a href="#" className="hover:text-primary">How it Works</a></li>
              <li><a href="#" className="hover:text-primary">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-primary">Client Stories</a></li>
              <li><a href="#" className="hover:text-primary">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-primary">Breakfast</a></li>
              <li><a href="#" className="hover:text-primary">Lunch</a></li>
              <li><a href="#" className="hover:text-primary">Dinner</a></li>
              <li><a href="#" className="hover:text-primary">Fast Foods</a></li>
              <li><a href="#" className="hover:text-primary">Drinks</a></li>
            </ul>
          </div>
        </div>
       
      </footer>

      <div className="bg-amber-300 flex text-white p-[20px] mt-[-30px] gap-[40px] font-medium">
        <p className="ml-[600px] text-xs">Copyright 2021 Besnik All Rights Reserved</p>
        <p className="text-xs"> Terms</p>
        <p className="text-xs">Privacy</p>
        <p className="text-xs">Security</p>
        </div>
      </section>      
    );
  };
  export default Footer;