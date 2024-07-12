import Company from '../models/CompaniesModel.js';
import Materials from '../models/MaterialsModel.js';

export const addCompany = async (req, res) => {
    const { name } = req.body;
    try {
        const newCompany = new Company({
            name
        });
        await newCompany.save();
        res.status(201).redirect('/admin');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const findCompany = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const showCompanies = async (req, res) => {
    try {
        const companies = await Company.find();

        const companiesMaterials = await Promise.all(companies.map(async (company) => {
            const materials = await Materials.find({ company: company._id });
            return {
                ...company.toObject(),
                materials: materials.map(material => material.name) 
            };
        }));

        res.render('companies', { title: 'Liste des fournisseurs', companies: companiesMaterials });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}

export const renderAddCompanyPage = (req, res) => {
    res.render('addCompany', { title: 'Ajouter un fournisseur' });
}