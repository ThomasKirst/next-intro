import { getAllProducts, addProduct } from '../../../services/productsService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const products = getAllProducts();
    return response.status(200).json({ products });
  } else if (request.method === 'POST') {
    addProduct(request.body);
    return response.status(201).json({ message: 'Product was created' });
  }
}
