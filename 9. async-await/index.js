
const delayFn = time => {
    return new Promise(resolve => setTimeout(resolve, time))
}

const delayedGreet = async (name) => {
    console.log("Starts");
    await delayFn(2000)
    console.log(`Hello, ${name}`);
}

delayedGreet("Ronnie");