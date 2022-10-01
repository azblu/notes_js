function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "world, ";
  }
}

const generateHello = helloWorld();
console.log(generateHello.next().value);
console.log(generateHello.next().value);
console.log(generateHello.next().value);
