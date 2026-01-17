const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    const contentUpdateToUpperCase = data.toUpperCase();
    fs.writeFile('input.txt', contentUpdateToUpperCase, (err) => {
        if(err) throw err;
        fs.readFile('input.txt', 'utf-8', (err, data) => {
            if(err) throw err;
            console.log("Updated Content: ", data);
        })
    })
})