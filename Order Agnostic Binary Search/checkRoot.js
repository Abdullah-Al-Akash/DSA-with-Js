function checkRoot(x) {
        if (x === 1) {
                return x;
        }
        if (x === 0) {
                return 0;
        }
        let y = x;
        let z = (y + (x / y)) / 2;

        while (Math.abs(y - z) >= 0.00001) {
                y = z;
                z = (y + (x / y)) / 2;
        }
        return Math.floor(z);
}

console.log(checkRoot());