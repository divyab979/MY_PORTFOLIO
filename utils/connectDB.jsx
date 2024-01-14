import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://divyab979:imdedfr12@clusterportfolio.0rdbi8g.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected successfully');
    } catch (error) {
        console.error('failed to connect', error);
        return;
    }
}; connectDB();
export default connectDB;