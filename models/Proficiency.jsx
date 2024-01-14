import mongoose from 'mongoose';
const profSchema = new mongoose.Schema
({
    profAmount:{
        type: String,
        required: true,
    },
    profImage:{
        type: String,
        required: true,
    },


});
export default mongoose.models.Proficiency||mongoose.model('Proficiency',profSchema)