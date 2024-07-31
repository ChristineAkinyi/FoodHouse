const Navbar = () => {
    return (
      <nav className="flex p-6 bg-white">
        <div className="text-2xl font-bold text-amber-400 italic">FoodHouse</div>
        <ul className="flex space-x-6 text-lg">

          <div className="flex ml-[240px] gap-[40px] text-gray-400 font-semibold text-3xl">
          <li><a href="#" className="text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow">Restaurant</a></li>
          <li><a href="#" className="hover:text-yellow">Services</a></li>
          <li><a href="#" className="hover:text-yellow">Cart</a></li>
          </div>

          <li><a href="#" className="hover:text-yellow ml-[400px] text-3xl text-gray-400 font-semibold">Sign In</a></li>
        </ul>
      </nav>
    );
  };
  export default Navbar;