import { getProductById } from '../../../services/productsService';
import Product from '../../../models/Product';

export default async function handler(request, response) {
  const { id } = request.query;

  switch (request.method) {
    case 'GET':
      const product = getProductById(id);
      response.status(200).json(product);
      break;
    case 'PUT': {
      const data = request.body;
      await Product.findByIdAndUpdate(id, data);
      response.status(200).json({ message: 'Product updated' });
      break;
    }
    case 'DELETE': {
      await Product.findByIdAndDelete(id);
      response.status(200).json({ message: 'Product deleted' });
      break;
    }
    default:
      response.status(405).json({ message: 'Message not allowed' });
  }
}
