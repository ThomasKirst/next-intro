import dbConnect from '../dbConnect';
import Product from '../models/Product';

export async function getAllProducts() {
  await dbConnect(); // Connect to database

  const products = await Product.find().populate('category');

  const productArray = products.map(
    ({ id, name, description, price, category }) => {
      return {
        id,
        name,
        description,
        price,
        category: {
          id: category.id,
          name: category.name,
          description: category.description,
        },
      };
    }
  );

  return productArray;
}

export async function getProductById(productId) {
  await dbConnect();

  const product = await Product.findById(productId).populate('category');

  const { id, name, description, price, category } = product;

  return {
    id,
    name,
    description,
    price,
    category: {
      id: category.id,
      name: category.name,
      description: category.description,
    },
  };
}

export function addProduct(product) {
  products.push(product);
}
