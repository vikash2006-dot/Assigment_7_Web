import React, { useState } from "react";
import RoomCard from "../components/RoomCard";
function Rooms({ rooms, bookedRoomId, onBookRoom, onCancelBooking }){
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const filtered = rooms.filter((room) => {
    const q = search.trim().toLowerCase();
    const matchSearch = q === "" || room.roomNumber.toLowerCase().includes(q) || room.block.toLowerCase().includes(q);
    const matchType = type === "All" || room.type.toLowerCase() === type.toLowerCase();
    return matchSearch && matchType;
  });
  const reset =()=>{
    setSearch("");
    setType("All");
  };
  return(
    <div className="page rooms">
      <div className="rooms-head">
        <div>
          <h1 className="page-title">Explore Hostel Rooms</h1>
          <p className="page-sub">
            Find and reserve available beds across Block A, Block B, and Block C
          </p>
        </div>
        <div className="filter-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search room number or block..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-input"/>
            {search && (
              <button type="button" className="clear-btn" onClick={() => setSearch("")} title="Clear search">✕</button>
            )}
          </div>
          <div className="select-box">
            <label htmlFor="type-filter" className="filter-label"> Type: </label>
            <select id="type-filter" value={type} onChange={(e) => setType(e.target.value)} className="type-select">
              <option value="All">All Types</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
        </div>
      </div>
      <div className="result-bar">
        <span> Showing <strong>{filtered.length}</strong> of{" "}
          <strong>{rooms.length}</strong> rooms
        </span>
        {(search || type !== "All") && (
          <button type="button" className="reset-btn" onClick={reset} > Reset Filters</button>
        )}
      </div>
      {filtered.length > 0? (
        <div className="rooms-grid">
          {filtered.map((room) => (
            <RoomCard key={room.id} room={room} bookedRoomId={bookedRoomId} onBookRoom={onBookRoom} onCancelBooking={onCancelBooking}/>
          ))}
        </div>
      ):(
        <div className="empty">
          <div className="empty-icon">📭</div>
          <h3 className="empty-title">No Rooms Found</h3>
          <p className="empty-msg">We couldn't find any rooms matching "{search}" with type "{type}". Try adjusting your keywords or clearing the filter.</p>
          <button type="button" className="btn btn-primary" onClick={reset}>Clear All Filters</button>
        </div>
      )}
    </div>
  );
}
export default Rooms;
