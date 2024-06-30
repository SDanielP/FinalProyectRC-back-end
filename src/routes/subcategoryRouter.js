const express = require('express');
const router = express.Router();
const Subcategory = require('../models/subcategoryModel');
const { getSubcategoryById } = require('../middlewares/subcategoryMiddleware');

// Obtener todas las subcategorías
router.get('/subcategories', async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener una subcategoría por ID
router.get('/subcategories/:id', getSubcategoryById, (req, res) => {
    res.json(res.subcategory);
});

// Obtener una subcategoría por nombre
router.get('/subcategories/:subcategory', async (req, res) => {
    try {
        const subcategory = await getSubcategoryById({ subcategory: req.params.subcategory });
        if (subcategory === null) {
            return res.status(404).json({ message: 'Subcategoría no encontrada' });
        }
        res.json(subcategory);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}), 


// Crear una nueva subcategoría
// router.post('/subcategories', async (req, res) => {
//     const subcategory = new Subcategory({
//         subcategories: req.body.subcategories
//     });

//     try {
//         const newSubcategory = await subcategory.save();
//         res.status(201).json(newSubcategory);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// Actualizar una subcategoría
// router.patch('/subcategories/:id', getSubcategoryById, async (req, res) => {
//     if (req.body.subcategories != null) {
//         res.subcategory.subcategories = req.body.subcategories;
//     }

//     try {
//         const updatedSubcategory = await res.subcategory.save();
//         res.json(updatedSubcategory);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// Eliminar una subcategoría
// router.delete('/subcategories/:id', getSubcategoryById, async (req, res) => {
//     try {
//         await res.subcategory.remove();
//         res.json({ message: 'Subcategoría eliminada' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

module.exports = router;
