const arraWithNegative = [23, 43, 43, 53 ,63, 55, 42, 2, 8];

for (let i = 0; i <arraWithNegative.length; i++) {
    const number = arraWithNegative[i];
    if (number < 0){
        break;
    }
    console.log(number);
}