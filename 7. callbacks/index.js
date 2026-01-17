const fs = require('fs')

// Example 1st 
const person = (name, callbackFn) => {
    console.log(`Name: ${name}`);
    callbackFn()
}

const address = () => {
    console.log("Address: Khoksa, Kushtia.");
}

person("Roni Biswas", address);

// another example

fs.readFile('input.txt', 'utf-8', (err, data)=> {
    if(err) throw err;
    console.log("Read File Content: ", data);
})