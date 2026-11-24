import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import roomsData from "./data/rooms";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";
import "./App.css";
function App(){
  const [rooms, setRooms] = useState(roomsData);
  const [bookedId, setBookedId] = useState(null);
  const bookedCount = bookedId !== null ? 1 : 0;
  const bookRoom = (id) => {
    if (bookedId !== null) {
      return;
    }
    setRooms((prev)=>
      prev.map((room)=>{
        if (room.id === id){
          if(room.occupied >= room.capacity){
            return room;
          }
          return{
            ...room,
            occupied: room.occupied + 1,
            isBooked: true,
          };
        }
        return room;
      })
    );
    setBookedId(id);
  };

  const cancelBooking = (id)=> {
    setRooms((prev)=>
      prev.map((room)=> {
        if(room.id === id){
          return{
            ...room,
            occupied: Math.max(0, room.occupied - 1),
            isBooked: false,
          };
        }
        return room;
      })
    );
    setBookedId(null);
  };
  return(
    <BrowserRouter>
      <div className="app-layout">
        <Navbar bookedCount={bookedCount}/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
                <Home
                  rooms={rooms}
                  bookedRoomId={bookedId}
                />
              }
            />
            <Route path="/rooms"
              element={
                <Rooms
                  rooms={rooms}
                  bookedRoomId={bookedId}
                  onBookRoom={bookRoom}
                  onCancelBooking={cancelBooking}
                />
              }
            />
            <Route path="/rooms/:id" element={
                <RoomDetails
                  rooms={rooms}
                  bookedRoomId={bookedId}
                  onBookRoom={bookRoom}
                  onCancelBooking={cancelBooking}
                />
              }
            />
            <Route path="/my-booking" element={
                <MyBooking
                  rooms={rooms}
                  bookedRoomId={bookedId}
                  onCancelBooking={cancelBooking}
                />
              }
            />
          </Routes>
        </main>
        <footer className="footer-container">
          <div className="footer-content">
            <p className="footer-brand">
              StayNest • Student Accommodation Management
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
