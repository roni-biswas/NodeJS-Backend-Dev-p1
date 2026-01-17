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
// console.log("Read Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is new line added using appendFileSync");

const appendNewContent = fs.readFileSync(filePath, "utf-8");
// console.log("2nd Time read: \n", appendNewContent);

// async way to creating file

const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Hello, Async node js.", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully.");
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Read Content by async way: ", data);
    fs.appendFile(asyncFilePath, "\nThis new line is added!", (err) => {
      if (err) throw err;
      console.log("New line has been added!");
      fs.readFile(asyncFilePath, "utf-8", (err, updatedContent) => {
        if (err) throw err;
        console.log("New Updated Content: ", updatedContent);
      });
    });
  });
});
