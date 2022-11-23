let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 80;

function floorCeil(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid;
        let asc;
        if (start < end) {
                asc = true;
        }
        else {
                asc = false;
        }

        while (start <= end) {
                mid = Math.floor((start + end) / 2);

                if (target === arr[mid]) {
                        return `Floor is at ${mid - 1} and Ceiling is at ${mid + 1}`;
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
                                end = mid - 1;
                        }
                        else {
                                start = mid + 1;
                        }
                }
        }
}
console.log(floorCeil(arr, target));