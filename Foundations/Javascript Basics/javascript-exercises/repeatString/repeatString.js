const repeatString = function(word, number) {
    if (number < 0) {
        return 'ERROR';
    }

    let string = '';
    for (i = 0; i < number; i++) {
        string += word;
    }
    return string;
}

module.exports = repeatString
