function isPalindrome(word) {
        let word = words[k];
        let length = word.length - 1;
        for (let i = 0, j = length; i <= j; i++, j--) {

                if (word[i] !== word[j]) {
                        return false
                }
        }
        return true;
}

function firstPalindrome(words) {
        for (let k = 0; k < words.length; k++) {



        }
        return '';
}
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));