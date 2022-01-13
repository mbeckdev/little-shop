import uniqid from 'uniqid';

import pic1 from './assets/items/plant1.jpg';
import pic2 from './assets/items/plant2.jpg';
import pic3 from './assets/items/plant3.jpg';
import pic4 from './assets/items/plant4.jpg';
import pic5 from './assets/items/plant5.jpg';
import pic6 from './assets/items/plant6.jpg';
import pic7 from './assets/items/plant7.jpg';
import pic8 from './assets/items/plant8.jpg';

const initialItems = [
  {
    name: 'Tall Leafy',
    img: pic1,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Leaf Monster',
    img: pic2,
    price: 9.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Serrated Cobra',
    img: pic3,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Round Leaf',
    img: pic4,
    price: 29.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Droopy',
    img: pic5,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Hanging Green',
    img: pic6,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Office Plant',
    img: pic7,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
  {
    name: 'Flower Power',
    img: pic8,
    price: 19.99,
    altText: 'picture of a plant',
    id: uniqid(),
    qty: 0,
  },
];

export default initialItems;
