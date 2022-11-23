let arr = [25, 20, 15, 12, 10, 5, 0, -3];
let arr1 = [3, 4, 5, 10, 12, 15, 20, 25];

function binarySearch(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid;
        let asc;
        if (arr[start] < arr[end]) {
                asc = true;
        }
        else {
                asc = false;
        }
        while (start <= end) {
                mid = Math.floor((start + end) / 2);
                if (target === arr[mid]) {
                        return 'Found at position ' + mid;
                }
                if (asc) {
                        if (target > arr[mid]) {
                                start = mid + 1;
                        }
                        else {
                                end = mid - 1;
                        }
                }
                else {
                        if (target > arr[mid]) {
                                end = mid - 1
                        }
                        else {
                                start = mid + 1
                        }
                }
        }
}
console.log(binarySearch(arr1, 3));