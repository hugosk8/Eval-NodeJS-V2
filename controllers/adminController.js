import Material from '../models/MaterialsModel.js';
import Furniture from '../models/furnituresModel.js';

export const renderStatisticsPage = async (req, res) => {
    try {
        const materialsCount = await Furniture.aggregate([
            { $unwind: "$materials" },
            { $group: { _id: "$materials", count: { $sum: 1 } } }
        ]);

        const materials = await Material.find({ _id: { $in: materialsCount.map(m => m._id) } });

        const materialData = materialsCount.map(mc => {
            const material = materials.find(m => m._id.equals(mc._id));
            return {
                name: material ? material.name : 'Inconnu',
                quantity: mc.count
            };
        });

        res.render('statistics', { title: 'Statistiques des meubles', materialData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur du serveur');
    }
};
