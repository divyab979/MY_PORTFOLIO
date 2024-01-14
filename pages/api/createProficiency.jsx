import Proficiency from "@/models/Proficiency";
import connectDB from "@/utils/connectDB";
connectDB();
export default async function handler(req, res) {

    try {
        const {
            profAmount,
            profImage } = req.body;
        const prof = new Proficiency({
            profAmount,
            profImage
        });

        await prof.save();
        res.status(200).json({ success: true, data: prof });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}