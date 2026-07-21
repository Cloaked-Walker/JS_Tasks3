// Convert Promise to Async/Await

function fetchStudent() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Rahul");
        }, 2000);
    });
}
async function getData() {
    const data = await fetchStudent();
    console.log(data);
}
getData();


// Create an async function called getStudent()

function fetchStudent() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Rahul",
                course: "BCA"
            })
        }, 2000);
    });
}
async function getStudent() {
    const student = await fetchStudent();
    console.log(student);
}
getStudent();


// Create another async function called displayStudent() that:

function fetchStudent() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Rahul",
                course: "BCA"
            })
        }, 1000);
    });
}
async function displayStudent() {
    try{
        const student = await fetchStudent();
        console.log(student);
    } catch(error) {
        console.log(error)
    }
}
displayStudent() 