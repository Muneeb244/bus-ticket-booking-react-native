export const locations = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Hyderabad",
  "Sialkot",
  "Bahawalpur",
  "Sargodha",
  "Gujranwala",
  "Abbottabad",
  "Mardan",
  "Sukkur",
  "Mirpur",
  "Muzaffarabad",
  "Rahim Yar Khan",
  "Dera Ghazi Khan",
];

export const buses = [
  {
    busId: "bus_001",
    company: "Daewoo Express",
    busType: "A/C Seater",
    price: 1200,
    originalPrice: 1350,
    rating: 4.5,
    totalReviews: 680,
    badges: ["Comfortable Ride", "Well Maintained"],
  },
  {
    busId: "bus_002",
    company: "Skyways",
    busType: "A/C Sleeper",
    price: 1400,
    originalPrice: 1550,
    rating: 4.6,
    totalReviews: 820,
    badges: ["Popular Choice", "New Bus"],
  },
  {
    busId: "bus_003",
    company: "Faisal Movers",
    busType: "Non-A/C Seater",
    price: 900,
    originalPrice: 1000,
    rating: 4.2,
    totalReviews: 750,
    badges: ["Affordable", "Reliable Service"],
  },
  {
    busId: "bus_004",
    company: "Kainat Travels",
    busType: "A/C Sleeper",
    price: 1500,
    originalPrice: 1650,
    rating: 4.8,
    totalReviews: 910,
    badges: ["Luxury Service", "Fast & Safe"],
  },
  {
    busId: "bus_005",
    company: "Bilal Travels",
    busType: "Non-A/C Sleeper",
    price: 1000,
    originalPrice: 1150,
    rating: 4.0,
    totalReviews: 600,
    badges: ["Budget Friendly", "Decent Comfort"],
  },
];

export const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= 28; i++) {
    let seatType;

    if (i > 24) {
      seatType = i % 4 === 1 ? "window" : "side";
    } else {
      seatType = i % 4 === 1 ? "window" : i % 4 === 2 ? "path" : "side";
    }

    seats.push({
      seat_id: i,
      type: seatType,
      booked: false,
    });
  }
  return Array(7)
    .fill()
    .map((_, row) => seats.slice(row * 4, row * 4 + 4));
};
