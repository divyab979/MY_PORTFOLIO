import Experiences from "@/models/Experiences";
import connectDB from "@/utils/connectDB";
connectDB();
export default async function handler(req, res) {

    try {
        const {
            experienceTitle,
            experiencePlace,
            experienceSkillUsed,
            experienceStartDate,
            experienceEndDate,
            experienceSummary,
            experienceCompanyImage } = req.body;
        const experiences = new Experiences({
            experienceTitle,
            experiencePlace,
            experienceSkillUsed,
            experienceStartDate,
            experienceEndDate,
            experienceSummary,
            experienceCompanyImage
        });

        await experiences.save();
        res.status(200).json({ success: true, data: experiences });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}