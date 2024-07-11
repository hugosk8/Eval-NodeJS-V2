import mongoose from 'mongoose';

const CompaniesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Company = mongoose.model('Company', CompaniesSchema);

export default Company;