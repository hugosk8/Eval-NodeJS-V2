import mongoose from "mongoose";

const MaterialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
})

const Material = mongoose.model('Material', MaterialsSchema);

export default Material;