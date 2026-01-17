const fs = require("fs");
const path = require("path");

// create an folder or subfolder using file system
// console.log(__dirname);
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync("data")) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder Created!");
}

// create a file
const filePath = path.join(dataFolder, "example.txt");
// sync way to creating file
fs.writeFileSync(filePath, "Hello, World!");
// console.log("File created successfully!");

// sync way to read file
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("Read Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is new line added using appendFileSync");

const appendNewContent = fs.readFileSync(filePath, "utf-8");
console.log("2nd Time read: \n", appendNewContent);
