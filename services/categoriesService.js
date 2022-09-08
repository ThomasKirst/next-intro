import dbConnect from '../dbConnect';
import Category from '../models/Category';

export async function getAllCategories() {
  await dbConnect(); // asynchronous

  // From: complex Collection …
  const categories = await Category.find(); // 100M Categories

  // To: simple Array
  return categories.map(({ id, name, description }) => {
    return {
      id,
      name,
      description,
    };
  });
}

export async function getCategoryById(categoryId) {
  await dbConnect();

  const category = await Category.findById(categoryId);

  const { id, name, description } = category;

  return { id, name, description };
}
