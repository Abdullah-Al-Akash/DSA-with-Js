

function checkSquare(num) {
        if (num === 1) {
                return true;
        }
        let start = 0;
        let mid = Math.floor((start + num) / 2);


        if (start > mid) {
                for (let i = start; i <= mid; i++) {
                        if (mid * mid === num) {
                                return true;
                        }
                        else if (mid * mid > num) {
                                mid = mid - 1;
                        }
                        else {
                                start = mid + 1;
                        }
                }
                return false
        }
        else {
                for (let i = start; i <= mid; i--) {
                        if (mid * mid === num) {
                                return true;
                        }
                        else if (mid * mid > num) {
                                mid = mid - 1;
                        }
                        else {
                                start = mid + 1;
                        }
                }
                return false
        }
}

console.log(checkSquare(99));