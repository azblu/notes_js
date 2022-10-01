let fruitName3 = (name, price) => {
  console.log(name, price);
};

fruitName3("Banana", 500);

let saludo = (name) => {
  console.log(`Hola ${name}`);
};

saludo("Steven", 500);

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
