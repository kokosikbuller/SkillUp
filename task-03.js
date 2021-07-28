const findLongestWord = function(string) {
    const arrWords = string.split(' ');
    let count = arrWords[0].length;
    let name = arrWords[0];
    for(word of arrWords) {
        if(count < word.length) {
            count = word.length;
            name = word;
        }
    }
    return name;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'