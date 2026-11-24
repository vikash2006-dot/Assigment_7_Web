import React from "react";
import { Link } from "react-router";
function MyBooking({ rooms, bookedRoomId, onCancelBooking }){
  const booked = rooms.find((room) => room.id === bookedRoomId);
  if(!booked){
    return(
      <div className="page my-booking">
        <div className="empty">
          <div className="empty-icon">🛌</div>
          <h2 className="empty-title">You have not booked any room</h2>
          <p className="empty-msg">
            Browse through available hostel rooms across our campus blocks and book
            your preferred accommodation today.
          </p>
          <Link to="/rooms" className="btn btn-primary btn-lg">
            Explore Rooms
          </Link>
        </div>
      </div>
    );
  }
  const left = booked.capacity - booked.occupied;
  return(
    <div className="page my-booking">
      <div className="page-head">
        <h1 className="page-title">My Active Booking</h1>
        <p className="page-sub">
          Review your current hostel room allocation details and manage your booking
        </p>
      </div>
      <div className="book-card">
        <div className="book-head">
          <div className="book-status">
            <span className="dot"></span> Active Allocation
          </div>
          <span className="badge badge-booked">Confirmed</span>
        </div>
        <div className="book-body">
          <div className="room-head">
            <div>
              <span className="block-tag">Block {booked.block}</span>
              <h2 className="room-title">Room {booked.roomNumber}</h2>
              <p className="room-sub">
                Floor {booked.floor} • {booked.type} Accommodation
              </p>
            </div>

            <div className="price-box">
              <span className="price-label">Monthly Rent</span>
              <span className="price-value">₹{booked.rent.toLocaleString()}</span>
              <span className="price-period">per month</span>
            </div>
          </div>

          <div className="book-grid">
            <div className="book-item">
              <span className="item-name">Room Number</span>
              <span className="item-data">{booked.roomNumber}</span>
            </div>
            <div className="book-item">
              <span className="item-name">Hostel Block</span>
              <span className="item-data">Block {booked.block}</span>
            </div>
            <div className="book-item">
              <span className="item-name">Room Type</span>
              <span className="item-data">{booked.type}</span>
            </div>
            <div className="book-item">
              <span className="item-name">Monthly Rent</span>
              <span className="item-data">₹{booked.rent.toLocaleString()}</span>
            </div>

            <div className="book-item">
              <span className="item-name">Floor</span>
              <span className="item-data">Floor{booked.floor}</span>
            </div>
            <div className="book-item">
              <span className="item-name">Occupancy Status</span>
              <span className="item-data">{booked.occupied} of {booked.capacity} beds occupied ({left} remaining)
              </span>
            </div>
          </div>

          <div className="book-facilities">
            <h4 className="fac-title">Included Amenities</h4>
            <div className="fac-list">
              {booked.facilities.map((item, i) => (
                <span key={i} className="fac-chip">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="book-foot">
          <Link to={`/rooms/${booked.id}`} className="btn btn-secondary">View Room Details
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onCancelBooking(booked.id)}
          > Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
}
export default MyBooking;
