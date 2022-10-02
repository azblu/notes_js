let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array);
console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));

let hello = "hello world        ";
console.log(hello);
console.log(hello.trimEnd());

//crear diccionario con 2 listas

let entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));
