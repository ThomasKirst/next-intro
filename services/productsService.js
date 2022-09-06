const products = [
  {
    id: 1,
    name: 'Garnele',
    description: 'Lebt bevorzugt paarweise',
    price: 19,
    category: 'Wirbellose',
  },
  {
    id: 2,
    name: 'Anemonenfisch',
    description: 'Nemo',
    price: 60,
    category: 'Meerwasser',
  },
  {
    id: 3,
    name: 'Pracht-Anemone',
    description: 'Ist prächtig',
    price: 90,
    category: 'Korallen und Blumentiere',
  },
  {
    id: 4,
    name: 'Mördermuschel',
    description: 'Ist hübscher als ihr Name',
    price: 125,
    category: 'Muscheln',
  },
  {
    id: 5,
    name: 'Kaiserfisch',
    description: 'Ein tagaktiver Einzelgänger',
    price: 90,
  },
  {
    id: 6,
    name: 'Guppy',
    description: 'Klein aber fein',
    price: 5,
    category: 'Süsswasser',
  },
  {
    id: 7,
    name: 'Regenbogenfisch',
    description: 'In allen Farben und bunt',
    price: 12,
    category: 'Süsswasser',
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
