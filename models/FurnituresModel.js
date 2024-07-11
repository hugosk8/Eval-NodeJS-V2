import mongoose from "mongoose";

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

const Furniture = mongoose.model('Furniture', FurnituresSchema);

export default Furniture;