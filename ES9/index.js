const obj = {
  name: "Sammy",
  age: 32,
  country: "CO",
};

let { country, ...all } = obj;

console.log(all);
console.log(country);

const obj1 = {
  ...all,
  lastname: "Sammy",
};

const obj2 = {
  country,
  ...obj1,
};

console.log(obj1);
console.log(obj2);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((e) => {
    console.log("Funciono", e);
  })
  .catch(() => {
    console.log("Fallo");
  })
  .finally(() => console.log("Todo se termino"));
