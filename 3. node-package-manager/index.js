const lodash = require("lodash");

const names = ["rohim", "korim", "sokina", "afa", "alex"];

// const capitalize = lodash.map(names, lodash.capitalize);
const capitalize = names.map((name) => lodash.capitalize(name));

console.log(capitalize);
