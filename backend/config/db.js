import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
      try {
            const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold.underline);

      } catch (err) {
            console.error(`DB Error: ${err.message}`.bgRed)
            process.exit(1); //bad exit => crash the app.
      }
}

export default connectDB;