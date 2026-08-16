import { User, Search, Heart, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">⌂</span>
        <span>Furniro</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-icons">
        <User />
        <Search />
        <Heart />
        <ShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;