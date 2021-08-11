
function compareTriplets(a, b) {
    // Write your code here
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            count1++ ;
        }
        else if (b[i] > a[i]){
            count2++
        }
        else {
            
        }
    }
    const result = (count1, count2);
    return result;
}

const a = [5, 6, 7];
const b = [3, 6, 10];
const results = compareTriplets(a, b);
console.log(results);