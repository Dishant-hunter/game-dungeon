import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <span className="logo-bracket">[</span>
        GAME DUNGEON
        <span className="logo-bracket">]</span>
      </NavLink>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          HOME
        </NavLink>

        <NavLink to="/store" onClick={() => setMenuOpen(false)}>
          STORE
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </NavLink>
      </div>

      <div className="nav-actions">
        <button className="cart-btn">
          <ShoppingCart size={20} />
          <span>0</span>
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;