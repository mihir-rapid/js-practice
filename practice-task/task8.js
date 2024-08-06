// difference between maximum & minimum element in array

function difference(arr) {
    let min = Infinity;
    let max = -Infinity;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return max - min;
}

console.log(difference([10, 20, 30, 40, 50, 60]));