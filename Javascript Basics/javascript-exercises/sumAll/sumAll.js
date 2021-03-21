const sumAll = function(x, y) {
    let sum = 0;

    /* If the first number is negative, return an error */
    if (x < 0 || y < 0) {
        return 'ERROR';
    }

    /* If any parameters are non-numbers, return an error */
    if (x !== parseInt(x) || y !== parseInt(y)) {
        return 'ERROR';
    }     
    
    /* If the first number is larger, start with first number
    and reduce downwards toward the second numbers. Else just
    sum from the first to the second number */ 
    if (x > y) {
        for (i = x; i >= y; i--) {
            sum += i;
        }
        return sum;
    } else {
        for (i = x; i < (x + y); i++) {
            sum += i;
        }
        return sum;
    }
}

module.exports = sumAll
