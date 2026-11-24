import React from "react";
import { Link } from "react-router";
function RoomCard({ room, bookedRoomId, onBookRoom, onCancelBooking }){
  const left = room.capacity - room.occupied;
  const isBooked = bookedRoomId === room.id;
  const hasOther = bookedRoomId !== null && bookedRoomId !== room.id;
  const isFull = room.occupied >= room.capacity;
  return(
    <div className={`room-card ${isBooked ? "card-booked" : ""}`}>
      <div className="card-head">
        <div>
          <span className="block-tag">Block {room.block}</span>
          <h3 className="room-title">Room {room.roomNumber}</h3>
        </div>
        <div className="badge-box">{isBooked ? (
            <span className="badge badge-booked">Your Booking</span>) : isFull? (
            <span className="badge badge-full">Room Full</span>
          ):(<span className="badge badge-available">{left} {left === 1 ? "Bed Left" : "Beds Left"} </span>
          )}
        </div>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="info-label">Type:</span>
          <span className={`type-tag ${room.type === "AC" ? "type-ac" : "type-non-ac"}`}>{room.type} </span>
        </div>
        <div className="info-row">
          <span className="info-label">Floor:</span>
          <span className="info-value">Floor {room.floor}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Capacity:</span>
          <span className="info-value">{room.occupied} / {room.capacity} Occupied
          </span>
        </div>
        <div className="info-row price-row">
          <span className="info-label">Monthly Rent:</span>
          <span className="room-price">₹{room.rent.toLocaleString()}<span>/mo</span>
          </span>
        </div>
      </div>
      <div className="card-foot">
        <Link to={`/rooms/${room.id}`} className="btn btn-secondary">View Details</Link>
        {isBooked ? (
          <button type="button" className="btn btn-danger" onClick={() => onCancelBooking(room.id)}>Cancel Booking</button>
        ) : hasOther? (
          <span className="status-msg status-blocked">Already booked another room </span>
        ) : isFull? (
          <span className="status-msg status-full"> Room Full</span>
        ) :(
          <button type="button" className="btn btn-primary" onClick={() => onBookRoom(room.id)}> Book Room</button>)}
      </div>
    </div>
  );
}
export default RoomCard;
