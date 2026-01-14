console.log("Node module wrapper from Explore!");

console.log("__Filename", __filename);
console.log("__Dirname", __dirname);

module.exports.greet = (name) => {
  console.log(`Hello ${name}`);
};
