
const arr = [0, 1];
function missingNumber(nums) {
        const ascNums = nums.sort();

        let missNumber = ascNums[0];
        for (let i = 0; i <= ascNums.length; i++) {
                if (ascNums[i] == missNumber) {
                        missNumber++
                }
        }
        return missNumber;

}
console.log(missingNumber(arr));