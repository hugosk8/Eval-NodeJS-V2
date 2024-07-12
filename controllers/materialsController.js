import Material from '../models/MaterialsModel.js';
import Furniture from '../models/FurnituresModel.js';
import Company from '../models/CompaniesModel.js';

export const showMaterials = async (req, res) => {
    try {
        const materials = await Material.find().populate('company');

        const materialsFurnitures = await Promise.all(materials.map(async (material) => {
            const furnitures = await Furniture.find({ materials: material._id });
            return {
                ...material.toObject(),
                furnitures: furnitures.map(furniture => furniture.name) 
            };
        }));

        res.render('materials', { title: 'Liste des materiaux', materials: materialsFurnitures });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}

export const renderMaterialsPage = async (req, res) => {
    try {
        const materials = await Material.find();
        res.render(`materials`, { title: 'Liste de nos matériaux', materials, removeAccents });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}

const materials = {
    frene: 'frene',
    noyer: 'noyer', 
    chene: 'chene', 
    acier: 'acier', 
    aluminium: 'aluminium', 
    plastique: 'plastique'
};

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const renderMaterialPage = (req, res) => {
    const materialName = req.params.name;
    const title = materials[materialName] || 'Materiau inconnu';
    res.render(`materials/${materialName}`, { title });
}

export const renderAddMaterialPage = async (req, res) => {
    const companies = await Company.find();
    res.render('addMaterial', { title: 'Ajouter un matériau', companies });
}

export const addMaterial = async (req, res) => {
    const { name, company } = req.body;
    let type;
    switch (company) {
        case '668fb3c77cf985caf88dea2c':
            type = "Bois";
            break;
        case '668fb3c77cf985caf88dea2d':
            type = "fer";
            break;
        case '668fb3c77cf985caf88dea2e':
            type = "plastique";
            break;
        default:
            type = 'unknown';
            break;
    }

    try {
        const newMaterial = new Material({
            name,
            type,
            company
        });
        await newMaterial.save();
        res.status(201).redirect('/materiaux');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const findMaterial = async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}