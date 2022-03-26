import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI =
      process.env.NODE_ENV !== "production"
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;
    const conn = await mongoose.connect(URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
