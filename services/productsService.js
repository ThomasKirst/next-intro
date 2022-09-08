import dbConnect from "../dbConnect";
import Product from "../models/Product";

export async function getAllProducts() {
  await dbConnect(); // Connect to database

  const products = await Product.find(); // Find collection "products" and return all values

  const productArray = products.map(
    ({ id, name, description, price, category }) => {
      return { id, name, description, price, category };
    }
  );

  return productArray;
}

export async function getProductById(productId) {
  await dbConnect();

  const product = await Product.findById(productId);

  const { id, name, description, price, category } = product;

  return { id, name, description, price, category };
}
