import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Schema: Welche Datentypen und welche Requirements
// Model: Hat nicht nur was, sondern das kann auch was
// CRUD: CREATE / READ / UPDATE / DELETE
const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
