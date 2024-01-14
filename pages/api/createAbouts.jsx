import Abouts from "@/models/Abouts";
import connectDB from "@/utils/connectDB";
connectDB();
export default async function handler(req, res) {

    try {
        const { aboutTitle, aboutDescription, aboutImage } = req.body;
        const abouts = new Abouts({
            aboutTitle,
            aboutDescription,
            aboutImage
        });

        await abouts.save();
        res.status(200).json({ success: true, data: abouts });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}