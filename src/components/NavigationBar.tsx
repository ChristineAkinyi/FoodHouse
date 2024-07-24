const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-white shadow-md w-full">
        <div className="text-2xl font-bold text-yellow">FoodHouse</div>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-yellow">Home</a></li>
          <li><a href="#" className="hover:text-yellow">Restaurant</a></li>
          <li><a href="#" className="hover:text-yellow">Services</a></li>
          <li><a href="#" className="hover:text-yellow">Cart</a></li>
          <li><a href="#" className="hover:text-yellow">Sign In</a></li>
        </ul>
      </nav>
    );
  };
  export default Navbar;