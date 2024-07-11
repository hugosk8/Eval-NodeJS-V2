import Furniture from '../models/FurnituresModel.js';

export const addFurniture = async (req, res) => {
    const { name, category, materials } = req.body;
    try {
        const newFurniture = new Furniture({
            name,
            category,
            materials
        });
        await newFurniture.save();
        res.status(201).json(newFurniture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const findFurniture = async (req, res) => {
    try {
        const furnitures = await Furniture.find().populate('materials');
        res.status(200).json(furnitures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const showFurnitures = async (req, res) => {
    try {
        const furnitures = await Furniture.find().populate({
            path: 'materials',
            populate: {
                path: 'company'
            }
        });

        res.render('furnitures', { title: 'Liste des meubles', furnitures })
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
}