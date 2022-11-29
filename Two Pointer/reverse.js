let numbers = [5, 10, 15, 20, 25, 30, 35];

function reverse(arr) {
        let length = arr.length - 1;
        for (let i = 0, j = length; i <= j; i++, j--) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
        }
        return arr;
}

console.log(reverse(numbers));