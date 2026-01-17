const delayFn = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}


delayFn(2000).then(()=> console.log("After 2sec promise resolve."))
console.log("End");

// Another exp.

const divideFn = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2 === 0) {
            reject("Can not perform division by 0.")
        }
        else {
            resolve(num1/num2)
        }
    })
}

divideFn(10, 0)
    .then(result => console.log("Result: ", result))
    .catch(err => console.log("Error catch: ", err))