let array = [1, 104, 22, 75, 305, 231, 12, 8890, 23, 74];

// for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     console.log(element);
// }

// display all element using for of 

for (let number of array) {
    console.log(number);
}

// display only greater than 80  

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element > 80){
        console.log(element);
    }
}