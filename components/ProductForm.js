import { useState } from "react";
import styled from "styled-components";

export default function ProductForm({ categories, product, onHandleSubmit }) {
  const [name, setName] = useState(product.name ?? "");
  const [description, setDescription] = useState(product.description ?? "");
  const [price, setPrice] = useState(product.price ?? "");
  const [category, setCategory] = useState(
    product.categoryId ?? categories[0].id
  );

  function handleSubmit(event) {
    event.preventDefault();

    onHandleSubmit({
      name,
      description,
      price,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="description"
        type="number"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />

      <label htmlFor="category">Kategorie</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button type="submit">submit</button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 12px;
  margin-bottom: 12px;

  max-width: 500px;
`;
