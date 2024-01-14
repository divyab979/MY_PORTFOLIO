import Proficiency from '@/models/Proficiency';
import connectDB from '../../utils/connectDB';


// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const prof1 = await Proficiency.find().sort({ date: -1 });
            res.status(200).json({ success: true, data: prof1 });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}