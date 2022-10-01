let fruits = [
  { name: "apple", price: 800 },
  { name: "banana", price: 300 },
  { name: "pineapple", price: 1000 },
  { name: "cherry", price: 500 },
  { name: "avocado", price: 2000 },
];

for (let i = 0; i < fruits.length; i++) {
  let fruit_temp = fruits[i];
  console.log(`The fruit ${fruit_temp.name} has price ${fruit_temp.price}`);
}

//filter

let fruit_less_price = fruits.filter((f) => {
  return f.price <= 500;
});

console.log(fruit_less_price);

//map
let fruit_name = fruits.map((f) => {
  return f.name;
});

console.log(fruit_name);

let fruitName2 = fruits.map((item) => item.name);

console.log(fruitName2);

//find
let find_fruits = fruits.find((f) => {
  return f.name === "avocado";
});

console.log(find_fruits);

//forEach
fruits.forEach((f) => {
  console.log(f.name);
});

// Spread Operator
let alphabet = ["A", "B", "C", "D"];
let vowels = ["a", "e", "i", "o", "u"];
let numbers = [1, 2, 3, 4, 5];

let f = [...alphabet, ...vowels, ...numbers];
console.log(f);
