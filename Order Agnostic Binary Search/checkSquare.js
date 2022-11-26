

function checkSquare(num) {
        if (num === 0) {
                return 0;
        }
        if (num === 1) {
                return true
        }
        for (let i = 0; i * i >= 0 && i * i <= num; i++) {
                if (i * i == num) {
                        return true;
                }
        }
        return false;

}

console.log(checkSquare());