import { getProductById } from '../../services/productsService';

export function getServerSideProps(context) {
  const { id } = context.params;
  const product = getProductById(Number(id));

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const { id, name, description } = product;

  return (
    <>
      <h1>Produkt: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
    </>
  );
}
