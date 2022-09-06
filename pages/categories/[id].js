import { getCategoryById } from '../../services/categoriesService';

export function getServerSideProps(context) {
  const { id } = context.query;
  const category = getCategoryById(Number(id));

  return {
    props: {
      category,
    },
  };
}

export default function Category({ category }) {
  const { id, name, description } = category;

  return (
    <>
      <h1>Kategorie: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
    </>
  );
}
