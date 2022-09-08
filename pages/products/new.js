import { useRouter } from 'next/router';
import ProductForm from '../../components/ProductForm';
import { useFetch } from '../../hooks/useFetch';
import { getAllCategories } from '../../services/categoriesService';

export async function getServerSideProps() {
  const categories = await getAllCategories();

  return {
    props: {
      categories: categories,
    },
  };
}

export default function CreateProduct({ categories }) {
  const router = useRouter();
  const fetchApi = useFetch();

  async function handleSubmit(data) {
    await fetchApi('/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    router.push('/products');
  }

  return (
    <>
      <h1>Produkt hinzufügen</h1>
      <ProductForm onHandleSubmit={handleSubmit} categories={categories} />
    </>
  );
}
