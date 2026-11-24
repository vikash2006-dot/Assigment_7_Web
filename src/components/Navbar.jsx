import React from "react";
import { Link, useLocation } from "react-router";
function Navbar({ bookedCount }){
  const loc = useLocation();
  const isActive =(path)=>{
    if(path === "/"){
      return loc.pathname === "/";
    }
    return loc.pathname.startsWith(path);
  };
  return(
    <header className="nav">
      <div className="nav-box">
        <Link to="/" className="brand">
          <span className="brand-icon">🏠</span>
          <span className="brand-name">StayNest</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}> Home</Link>
          <Link to="/rooms" className={`nav-link ${isActive("/rooms") ? "active" : ""}`}>Explore Rooms</Link>
          <Link to="/my-booking" className={`nav-link ${isActive("/my-booking") ? "active" : ""}`}> My Booking
            <span className={`book-count ${bookedCount > 0 ? "has-booking" : "no-booking"}`}title="Current active bookings">{bookedCount} </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
