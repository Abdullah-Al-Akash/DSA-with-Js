let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 1;

function binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid;

        while (start <= end) {
                mid = Math.floor((start + end) / 2);
                if (arr[mid] === target) {
                        return 'Target Value Found at Position ' + mid
                }
                else if (target > arr[mid]) {
                        start = mid + 1;
                }
                else {
                        end = mid - 1;
                }
        }
        return 'Data Not Found';
}

console.log(binarySearch(arr, target));