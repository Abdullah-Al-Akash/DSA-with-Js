let arr = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];
let target = 8;

function numberOfOccurrence(nums, target) {
        const arr = nums.sort();
        let start = 0;
        let end = arr.length - 1;
        let mid;
        while (start <= end) {
                let count = [];
                //Calculate Mid Point:
                mid = Math.floor((start + end) / 2);

                //When Target Value Match:
                if (target === arr[mid]) {
                        count.push(mid);
                        //Check Count for left side:
                        for (let i = mid - 1; i >= 0; i--) {
                                if (target === arr[i]) {
                                        count.push(i);
                                }
                        }
                        //Check Count for right side:
                        for (let i = mid + 1; i < arr.length; i++) {
                                if (target === arr[i]) {
                                        count.push(i);
                                }
                        }
                        return count.sort();
                }
                //Update Star and End Point for control loop:
                else if (target > arr[mid]) {
                        start = mid + 1;
                }
                else {
                        end = mid - 1;
                }
        }
        return [];
}

console.log(numberOfOccurrence(arr, 8));