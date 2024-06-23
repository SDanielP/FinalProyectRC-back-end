// import mongoose from "mongoose";
const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Subcategory = mongoose.model('men-subcategories', subcategorySchema);

module.exports = Subcategory;