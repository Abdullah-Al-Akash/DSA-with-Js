let arr = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target = 10;

function numberOfOccurrence(arr, target) {
        let start = 0;
        let end = arr.length - 1;
        let mid;
        while (start <= end) {
                let count = 0;
                //Calculate Mid Point:
                mid = Math.floor((start + end) / 2);

                //When Target Value Match:
                if (target === arr[mid]) {
                        count++;
                        //Check Count for left side:
                        for (let i = mid - 1; i >= 0; i--) {
                                if (target === arr[i]) {
                                        count++;
                                }
                        }
                        //Check Count for right side:
                        for (let i = mid + 1; i < arr.length; i++) {
                                if (target === arr[i]) {
                                        count++;
                                }
                        }
                        return count;
                }
                //Update Star and End Point for control loop:
                else if (target > arr[mid]) {
                        start = mid + 1;
                }
                else {
                        end = mid - 1;
                }
        }
        return 'Not Found!'
}

console.log(numberOfOccurrence(arr, target));