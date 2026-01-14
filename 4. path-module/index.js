const path = require("path");

console.log("Directory Name: ", path.dirname(__filename));
console.log("File Name: ", path.basename(__filename));
console.log("File extension Name: ", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "project");
console.log("Join Path: ", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("Resolve Path: ", resolvePath);

const normalizePath = path.normalize("/user/.documents/../projects");
console.log("Normalize Path: ", normalizePath);
