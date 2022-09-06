import Link from 'next/link';
import { getAllProducts } from '../services/productsService';

export function getServerSideProps() {
  const products = getAllProducts();

  return {
    props: {
      products: products,
    },
  };
}

export default function Products({ products }) {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
