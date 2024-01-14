import mongoose from 'mongoose';
const experiencesSchema = new mongoose.Schema
({
    experienceTitle:{
        type: String,
        required: true,
    },
    experiencePlace:{
        type: String,
        required: true,
    },
    experienceSkillUsed:{
        type: String,
        required: true,
    },
    experienceStartDate:{
        type: String,
        required: true,
    },
    experienceEndDate:{
        type: String,
        required: true,
    },
    experienceSummary:{
        type: String,
        required: true,
    },
    experienceCompanyImage:{
        type: String,
        required: true,
    },


});
export default mongoose.models.Experiences||mongoose.model('Experiences',experiencesSchema)