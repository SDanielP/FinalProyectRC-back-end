// import mongoose from "mongoose";
const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    subcategory: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Subcategory = mongoose.model('subcategories', subcategorySchema);

module.exports = Subcategory;