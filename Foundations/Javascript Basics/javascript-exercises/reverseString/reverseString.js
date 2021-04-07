const reverseString = function(string) {
    let reversedWord = '';
    for (i = (string.length - 1); i >= 0; i--) {
        reversedWord += string[i]
    }
    
    return reversedWord;
}

module.exports = reverseString
