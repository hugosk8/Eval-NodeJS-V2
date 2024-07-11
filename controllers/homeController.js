import Furniture from '../models/FurnituresModel.js';
import Material from '../models/MaterialsModel.js';
import Company from '../models/CompaniesModel.js';

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const renderGuestHome = async (req, res) => {
    try {
        const furnitures = await Furniture.find().populate({
            path: 'materials',
            populate: {
                path: 'company'
            }
        });

        res.render('guest_home', { title: 'Accueil Guest', furnitures, removeAccents});
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}

export const renderAdminHome = async (req, res) => {
    try {
        const furnitures = await Furniture.find().populate({
            path: 'materials',
            populate: {
                path: 'company'
            }
        });
        res.render('admin_home', { title: 'Accueil Admin', furnitures, removeAccents});
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}