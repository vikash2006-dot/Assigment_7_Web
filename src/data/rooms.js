const initialRooms=[
  {
    id: 1,
    roomNumber: "A-101",
    block: "A",
    type: "AC",
    rent: 8500,
    floor: 1,
    capacity: 2,
    occupied: 1,
    isBooked: false,
    facilities: [
      "Air Conditioner",
      "Attached Washroom",
      "High-speed Wi-Fi",
      "Study Table & Ergonomic Chair",
      "Personal Wardrobe",
      "24/7 Power Backup"
    ]
  },
  {
    id: 2,
    roomNumber: "A-102",
    block: "A",
    type: "Non-AC",
    rent: 6000,
    floor: 1,
    capacity: 3,
    occupied: 3, // Initial full room for testing "Room Full" rule
    isBooked: false,
    facilities: [
      "Attached Washroom",
      "High-speed Wi-Fi",
      "Ceiling Fan",
      "Study Table & Chair",
      "Individual Wardrobe"
    ]
  },
  {
    id: 3,
    roomNumber: "A-201",
    block: "A",
    type: "AC",
    rent: 9200,
    floor: 2,
    capacity: 2,
    occupied: 0,
    isBooked: false,
    facilities: [
      "Air Conditioner",
      "Attached Washroom",
      "Private Balcony",
      "High-speed Wi-Fi",
      "Study Table & Chair",
      "Personal Wardrobe",
      "24/7 Power Backup"
    ]
  },
  {
    id: 4,
    roomNumber: "B-101",
    block: "B",
    type: "Non-AC",
    rent: 5500,
    floor: 1,
    capacity: 4,
    occupied: 2,
    isBooked: false,
    facilities: [
      "High-speed Wi-Fi",
      "Ceiling Fan",
      "Shared Washroom",
      "Study Table & Chair",
      "Steel Locker"
    ]
  },
  {
    id: 5,
    roomNumber: "B-102",
    block: "B",
    type: "AC",
    rent: 8000,
    floor: 1,
    capacity: 2,
    occupied: 1,
    isBooked: false,
    facilities: [
      "Air Conditioner",
      "Attached Washroom",
      "High-speed Wi-Fi",
      "Study Table & Chair",
      "Personal Wardrobe"
    ]
  },
  {
    id: 6,
    roomNumber: "B-201",
    block: "B",
    type: "Non-AC",
    rent: 5200,
    floor: 2,
    capacity: 3,
    occupied: 2,
    isBooked: false,
    facilities: [
      "High-speed Wi-Fi",
      "Ceiling Fan",
      "Shared Washroom",
      "Study Table & Chair",
      "Individual Cupboard"
    ]
  },
  {
    id: 7,
    roomNumber: "C-101",
    block: "C",
    type: "AC",
    rent: 9500,
    floor: 1,
    capacity: 2,
    occupied: 2, // Full room
    isBooked: false,
    facilities: [
      "Air Conditioner",
      "Attached Washroom",
      "Geyser Water Heater",
      "High-speed Wi-Fi",
      "Study Table & Chair",
      "Personal Wardrobe"
    ]
  },
  {
    id: 8,
    roomNumber: "C-201",
    block: "C",
    type: "AC",
    rent: 8800,
    floor: 2,
    capacity: 3,
    occupied: 1,
    isBooked: false,
    facilities: [
      "Air Conditioner",
      "Attached Washroom",
      "High-speed Wi-Fi",
      "Study Table & Chair",
      "Personal Wardrobe",
      "24/7 Power Backup"
    ]
  },
  {
    id: 9,
    roomNumber: "C-202",
    block: "C",
    type: "Non-AC",
    rent: 5800,
    floor: 2,
    capacity: 2,
    occupied: 0,
    isBooked: false,
    facilities: [
      "High-speed Wi-Fi",
      "Ceiling Fan",
      "Attached Washroom",
      "Study Table & Chair",
      "Individual Wardrobe"
    ]
  }
];

export { initialRooms };
export default initialRooms;
