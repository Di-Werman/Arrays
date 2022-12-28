let arr = [
  {
    id: 1,
    name: 'Samsung',
    price: 500,
  },
  {
    id: 2,
    name: 'Xiaomi',
    price: 200,
  },
  {
    id: 3,
    name: 'Oppo',
    price: 250,
  },
];

const result = arr.filter(phone => phone.price < 500);
console.log(result);
