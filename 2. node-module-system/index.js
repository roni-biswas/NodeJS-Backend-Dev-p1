// module.exports -> export
// require -> import

const firstModule = require("./first-module");

// console.log("Add", firstModule.add(4, 8));
// console.log("Subtract", firstModule.subtract(25, 8));
// console.log("Divide", firstModule.divide(100, 0));

try {
  console.log("Trying to divide by zero!");
  const result = firstModule.divide(30, 0);
  console.log(result);
} catch (error) {
  console.log("Caught an error : ", error.message);
}
