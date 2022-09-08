import ProductForm from '../../components/ProductForm';
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
  async function handleSubmit(data) {
    // An API implementation follows here
    console.log(data);
  }

  return (
    <>
      <h1>Produkt hinzufügen</h1>
      <ProductForm onHandleSubmit={handleSubmit} categories={categories} />
    </>
  );
}
