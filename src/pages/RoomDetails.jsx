import React from "react";
import { useParams, Link } from "react-router";
function RoomDetails({ rooms, bookedRoomId, onBookRoom, onCancelBooking }){
  const { id } = useParams();
  const room = rooms.find(
    (r) => r.id === parseInt(id, 10) || String(r.id) === String(id)
  );
  if(!room){
    return(
      <div className="page">
        <div className="empty">
          <div className="empty-icon">⚠️</div>
          <h2 className="empty-title">Room Not Found</h2>
          <p className="empty-msg">The room you are looking for does not exist or may have been removed.
          </p>
          <Link to="/rooms" className="btn btn-primary">Back to Rooms</Link>
        </div>
      </div>
    );
  }
  const left = room.capacity - room.occupied;
  const isBooked = bookedRoomId === room.id;
  const hasOther = bookedRoomId !== null && bookedRoomId !== room.id;
  const isFull = room.occupied >= room.capacity;
  return(
    <div className="page room-details">
      <div className="details-nav">
        <Link to="/rooms" className="back-link">
          ← Back to Rooms
        </Link>
      </div>
      <div className="details-card">
        <div className="details-head">
          <div>
            <div className="details-tags">
              <span className="block-tag">Block {room.block}</span>
              <span
                className={`type-tag ${room.type === "AC" ? "type-ac" : "type-non-ac"}`}>{room.type} Room
              </span>
              {isBooked ?(<span className="badge badge-booked">Your Active Booking</span>):isFull?(
                <span className="badge badge-full">Room Full</span>
              ):(<span className="badge badge-available">{left} {left === 1 ? "Bed" : "Beds"} Available</span>)}
            </div>
            <h1 className="details-title">Room {room.roomNumber}</h1>
            <p className="details-loc">
              Located on Floor {room.floor} • Block {room.block}
            </p>
          </div>
          <div className="details-price">
            <span className="price-sub">Monthly Rent</span>
            <span className="price-main">₹{room.rent.toLocaleString()}</span>
            <span className="price-term">per month</span>
          </div>
        </div>
        <div className="specs">
          <h2 className="sec-heading">Room Specifications</h2>
          <div className="specs-grid">
            <div className="spec">
              <span className="spec-label">Room Number</span>
              <span className="spec-value">{room.roomNumber}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Hostel Block</span>
              <span className="spec-value">Block {room.block}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Floor</span>
              <span className="spec-value">Floor {room.floor}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Room Category</span>
              <span className="spec-value">{room.type}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Total Capacity</span>
              <span className="spec-value">{room.capacity} Beds</span>
            </div>
            <div className="spec">
              <span className="spec-label">Currently Occupied</span>
              <span className="spec-value">{room.occupied} Beds</span>
            </div>
            <div className="spec">
              <span className="spec-label">Beds Left</span>
              <span className="spec-value beds-highlight">
                {left} {left === 1 ? "Bed" : "Beds"} Available
              </span>
            </div>
            <div className="spec">
              <span className="spec-label">Monthly Rent</span>
              <span className="spec-value">₹{room.rent.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="facilities">
          <h2 className="sec-heading">Included Amenities & Facilities</h2>
          <div className="fac-grid"> {room.facilities.map((item, i)=>(
              <div key={i} className="fac-item">
                <span className="fac-check">✓</span>
                <span className="fac-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="details-foot">
          <div className="action-info">
            {isBooked && ( <p className="action-note note-success"> ✓ You have successfully booked a bed in this room.</p>  )}
            {hasOther && ( <p className="action-note note-warning"> ℹ️ You already have another active room reservation. Cancel your
                existing booking first if you wish to switch rooms.</p>)}
            {!isBooked && !hasOther && isFull && (<p className="action-note note-danger">✕ This room has reached maximum capacity and cannot accept new bookings.</p>)}
            {!isBooked && !hasOther && !isFull && (<p className="action-note note-info">Ready to reserve? Click below to immediately secure your bed.</p>)}
          </div>
          <div className="action-btns">
            {isBooked ? (
              <button type="button" className="btn btn-danger btn-lg" onClick={() => onCancelBooking(room.id)}> Cancel Booking </button>
            ): hasOther? (<span className="status-msg status-blocked">Already booked another room</span>
            ): isFull? (<span className="status-msg status-full">Room Full</span>
            ): (<button type="button" className="btn btn-primary btn-lg" onClick={() => onBookRoom(room.id)}>Book This Room</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomDetails;
