import React from "react";
import { Link } from "react-router";
function Home({ rooms, bookedRoomId }){
  const total = rooms.length;
  const available = rooms.filter((room)=>room.occupied < room.capacity).length;
  const booked = rooms.find((room) => room.id === bookedRoomId);
  const bookedText = booked? `Room ${booked.roomNumber} (Block ${booked.block})`
    : "No booking yet";
  return(
    <div className="page home">
      <section className="hero">
        <div className="hero-box">
          <span className="hero-tag">Campus Accommodation Portal</span>
          <h1 className="hero-title">
            Smart & Simple <span className="highlight">Hostel Room</span> Booking
          </h1>
          <p className="hero-sub"> Welcome to StayNest! Browse real-time room availability across campus blocks,explore detailed amenities, and book your ideal hostel room in just one click.
          </p>
          <div className="hero-btns">
            <Link to="/rooms" className="btn btn-primary btn-lg">
              Explore Rooms
            </Link>
            {bookedRoomId && (
              <Link to="/my-booking" className="btn btn-secondary btn-lg">
                View My Booking
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="sec-head">
          <h2 className="sec-title">Live Hostel Overview</h2>
          <p className="sec-sub">
            Current occupancy status and your active accommodation details
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon icon-navy">🏢</div>
            <div className="stat-info">
              <span className="stat-label">Total Rooms</span>
              <span className="stat-value">{total}</span>
              <span className="stat-hint">Across Blocks A, B, and C</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon icon-green">🛏️</div>
            <div className="stat-info">
              <span className="stat-label">Rooms with Beds Left</span>
              <span className="stat-value">{available}</span>
              <span className="stat-hint">Ready for immediate booking</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon icon-blue">🔖</div>
            <div className="stat-info">
              <span className="stat-label">Your Booked Room</span>
              <span className={`stat-value ${booked ? "active-booking" : "empty-booking"}`}>
                {bookedText}
              </span>
              <span className="stat-hint">
                {booked ? "Active reservation confirmed" : "Browse rooms to reserve a bed"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="sec-head">
          <h2 className="sec-title">Why Stay At StayNest?</h2>
          <p className="sec-sub">
            Designed for student comfort, convenience, and safety
          </p>
        </div>

        <div className="feat-grid">
          <div className="feat-card">
            <span className="feat-icon">⚡</span>
            <h3>High-Speed Internet</h3>
            <p>
              Reliable campus Wi-Fi connectivity throughout all blocks for study and leisure.
            </p>
          </div>

          <div className="feat-card">
            <span className="feat-icon">🛡️</span>
            <h3>24/7 Security & Power</h3>
            <p>
              Continuous surveillance, guarded access points, and dependable power backup.
            </p>
          </div>
          <div className="feat-card">
            <span className="feat-icon">📚</span>
            <h3>Conducive Study Spaces</h3>
            <p>
              Quiet environments, dedicated study tables, and ergonomic seating in every room.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
