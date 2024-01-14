import Abouts from '@/models/Abouts';
import connectDB from '../../utils/connectDB';


// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const about1 = await Abouts.find().sort({ date: -1 });
            res.status(200).json({ success: true, data: about1 });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}