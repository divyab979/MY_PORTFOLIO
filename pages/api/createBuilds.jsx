import Builds from "@/models/Builds";
import connectDB from "@/utils/connectDB";
connectDB();
export default async function handler(req, res) {

    try {
        const { buildTitle, buildDescription, buildImage, buildLink } = req.body;
        const builds = new Builds({
            buildTitle,
            buildDescription,
            buildImage,
            buildLink,
        });

        await builds.save();
        res.status(200).json({ success: true, data: builds });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}