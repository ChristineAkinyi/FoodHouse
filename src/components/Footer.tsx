const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12 p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Subscribe Our Newsletter</h2>
          <p className="mt-2 text-gray-400">Subscribe on our newsletter to get our news</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Your email address..." className="px-4 py-2 rounded-l-md"/>
            <button className="px-6 py-2 bg-primary text-white rounded-r-md">Subscribe</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FoodHouse</h3>
            <p className="text-gray-400">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src="/twitter.png" alt="Twitter" className="w-6 h-6"/></a>
              <a href="#"><img src="/facebook.png" alt="Facebook" className="w-6 h-6"/></a>
              <a href="#"><img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6"/></a>
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