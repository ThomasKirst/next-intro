import dbConnect from '../../../dbConnect';
import Product from '../../../models/Product';
import { getAllProducts } from '../../../services/productsService';

export default async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const products = await getAllProducts();
      return response.status(200).json({ products });

    case 'POST':
      const data = request.body;

      await Product.create(data);

      return response.status(201).json({ message: 'Product was created' });
  }
}
