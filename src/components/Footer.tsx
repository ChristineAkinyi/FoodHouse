import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 p-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FoodHouse<span className="text-amber-400 ">.</span></h3>
            <p className="text-gray-400">Best cooks and best delivery guys all</p>
            <p className="text-gray-400">at your service. Hot tasty food will</p>
            <p className="text-gray-400">reach you in 60 minutes.</p>

            <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-yellow-400 bg-white rounded-sm w-5 h-[20px]"/>
              <FaTwitter className="text-yellow-400 bg-white rounded-sm w-5 h-[20px]"/>
              <FaLinkedin className="text-yellow-400 bg-white rounded-sm w-5 h-[20px]"/>
            </div>
          </div>
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
    );
  };
  export default Footer;