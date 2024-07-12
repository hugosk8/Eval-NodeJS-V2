import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FurnituresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    materials: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Material'
        }],
    CreationDate: {
        type: Date,
        default: Date.now
    }
})

const Furniture = mongoose.models.Furniture || model('Furniture', FurnituresSchema);

export default Furniture;