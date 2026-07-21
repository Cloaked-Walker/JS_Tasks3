const promise = new Promise(
    (resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                resolve("Data Loaded Succesfully");
            } else {
                reject("Something went wrong!");
            }
        }, 3000);
    });

promise.then(s => console.log(s))
promise.catch(e => console.log(e));


const promise = new Promise((resolve) => {
    setTimeout(() => resolve("JavaScript"), 1000);
});
promise.then(result => console.log(result));
console.log("Learning..."); 

// First it goes through the promise and then hit the setTimeout function for 1 second.
// Without waiting the code is moved to the next step of console.log("  Learning...").
// Then after the given timer is finished it prints JavaScript.