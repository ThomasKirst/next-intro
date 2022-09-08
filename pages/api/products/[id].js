import { getProductById } from '../../../services/productsService';

export default async function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(Number(id));
  return response.status(200).json({ product });
}
