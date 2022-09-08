import ProductForm from '../../components/ProductForm';
import { getAllCategories } from '../../services/categoriesService';
import { getProductById } from '../../services/productsService';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const categories = await getAllCategories();
  const product = await getProductById(id);

  return {
    props: {
      product,
      categories,
    },
  };
}

export default function Product({ product, categories }) {
  const { id, name, description, category } = product;

  function updateProduct(updatedProduct) {
    console.log(updatedProduct);
  }

  function deleteProduct() {
    console.log('deleted!');
  }

  return (
    <>
      <h1>Produkt: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
      <h3>Kategorie</h3>
      <p>{category.name}</p>
      <hr />
      <h3>Produkt bearbeiten</h3>
      <ProductForm
        onHandleSubmit={updateProduct}
        categories={categories}
        product={product}
      />
      <button type="button" onClick={deleteProduct}>
        Produkt löschen
      </button>
    </>
  );
}
