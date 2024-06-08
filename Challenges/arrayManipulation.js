function hasSubarray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) {
                return true;
            }
            if (sum > target) {
                break;
            }
        }
    }
    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarray(arr, target));
