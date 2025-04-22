import dotenv from "dotenv";
import mongoose from "mongoose";
import { buses, generateSeats, locations } from "./seedData.js";
import Bus from "./models/bus.js";

dotenv.config();

const generateRandomTime = (baseData) => {
  const hour = Math.floor(Math.random() * 12) + 6;
  const minute = Math.random() > 0.5 ? 30 : 0;

  const dateTime = new Date(baseData);
  dateTime.setHours(hour, minute, 0, 0);

  return dateTime;
};

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: "bus_booking"
    });
    console.log("Connected to mongodb");

    const busesToInsert = [];

    for (let i = 0; i < locations.length; i++) {
      for (let j = i + 1; j < locations?.length; j++) {
        const from = locations[i];
        const to = locations[j];

        const baseDate = new Date();

        for (let dayOffSet = 0; dayOffSet < 7; dayOffSet++) {
          const travelDate = new Date(baseDate);
          travelDate.setDate(travelDate.getDate() + dayOffSet);

          const returnDate = new Date(travelDate);
          returnDate.setDate(travelDate.getDate() + 1);

          buses.forEach((bus) => {
            const departureTime = generateRandomTime(travelDate);
            const arrivalTime = generateRandomTime(returnDate);

            busesToInsert.push({
              busId: `${bus.busId}_${from}_${to}_${dayOffSet}`,
              from,
              to,
              departureTime,
              arrivalTime,
              duration: "9h 30m",
              availableSeats: 28,
              price: bus.price,
              originalPrice: bus.originalPrice,
              company: bus.company,
              busType: bus.busType,
              rating: bus.rating,
              totalReviews: bus.totalReviews,
              badges: bus.badges,
              seats: generateSeats(),
            });

            busesToInsert.push({
              busId: `${bus.busId}_${to}_${from}_${dayOffSet + 1}`,
              from: to,
              to: from,
              departureTime: generateRandomTime(returnDate),
              arrivalTime: generateRandomTime(returnDate),
              duration: "9h 30m",
              availableSeats: 28,
              price: bus.price,
              originalPrice: bus.originalPrice,
              company: bus.company,
              busType: bus.busType,
              rating: bus.rating,
              totalReviews: bus.totalReviews,
              badges: bus.badges,
              seats: generateSeats(),
            });
          });
        }
      }
    }

    console.log(busesToInsert)
    await Bus.insertMany(busesToInsert);
    console.log("database seeded successfully");
  } catch (error) {
    console.log("Error seeding database", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
