const data = {
  frontend: "Sammy",
  backend: "Luis",
  design: "Anna",
};

const entries = Object.entries(data);
console.log(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));
