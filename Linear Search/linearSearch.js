let arr = [1, 5, 40, 30, 50];
let target = 30;

function linearSearch(arr, targetValue) {
        for (let i = 0; i < arr.length; i++) {
                if (arr[i] === targetValue) {
                        return i;
                }
        }
        return 'Target Value Not Found!'
}
console.log(linearSearch(arr, target));