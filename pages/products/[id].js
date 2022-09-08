import Head from "next/head";
import ProductForm from "../../components/ProductForm";
import { getAllCategories } from "../../services/categoriesService";
import { getProductById } from "../../services/productsService";

export function getServerSideProps(context) {
  const { id } = context.params;
  const categories = getAllCategories();
  const product = getProductById(Number(id));

  return {
    props: {
      product,
      categories,
    },
  };
}

export default function Product({ product, categories }) {
  const { id, name, description } = product;

  function updateProduct(updatedProduct) {
    console.log(updatedProduct);
  }

  function deleteProduct() {
    console.log("deleted!");
  }

  return (
    <>
      <Head>
        <title>Product: {name}</title>
      </Head>
      <h1>Produkt: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
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
