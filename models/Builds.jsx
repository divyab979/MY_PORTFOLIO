import mongoose from 'mongoose';
const buildsSchema = new mongoose.Schema
({
    buildTitle:{
        type: String,
        required: true,
    },
    buildDescription:{
        type: String,
        required: true,
    },
    buildImage:{
        type: String,
        required: true,
    },
    buildLink:{
        type: String,
        required: true,
    },


});
export default mongoose.models.Builds||mongoose.model('Builds',buildsSchema)