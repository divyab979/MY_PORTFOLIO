import Experiences from '@/models/Experiences';
import connectDB from '../../utils/connectDB';


// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const experience1 = await Experiences.find().sort({ date: -1 });
            res.status(200).json({ success: true, data: experience1 });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}