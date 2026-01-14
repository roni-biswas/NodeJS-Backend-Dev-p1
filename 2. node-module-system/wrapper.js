const wrapperTest = require("./wrapper-explorer");

console.log("Node module wrapper from wrapper");
console.log("__FileName", __filename);
console.log("__DirName", __dirname);
wrapperTest.greet("Roni");
