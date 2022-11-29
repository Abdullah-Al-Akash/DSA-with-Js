let word = "wooooow";

function checkPalindrome(word) {
        let length = word.length - 1;

        for (let i = 0, j = length; i <= j; i++, j--) {
                if (word[i] !== word[j]) {
                        return 'False';
                }
        }
        return 'True';
}
console.log(checkPalindrome(word));