const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  subcategories: { type: String },
  productName: [{
    name: String,
    about_item: String,
    product_details: String,
    safety_information: String,
    usage_directions: String,
    description: String,
    UserId: String,
    documentId: String,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date
  }],
  documentId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  publishedAt: { type: Date }
});

module.exports = mongoose.model('Category', CategorySchema);
