import mongoose from 'mongoose';
const aboutsSchema = new mongoose.Schema
({
    aboutTitle:{
        type: String,
        required: true,
    },
    aboutDescription:{
        type: String,
        required: true,
    },
    aboutImage:{
        type: String,
        required: true,
    },


});
export default mongoose.models.Abouts||mongoose.model('Abouts',aboutsSchema)