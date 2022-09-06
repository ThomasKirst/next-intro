import Link from 'next/link';
import { getAllCategories } from '../services/categoriesService';

export function getServerSideProps() {
  const categories = getAllCategories();

  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`categories/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
