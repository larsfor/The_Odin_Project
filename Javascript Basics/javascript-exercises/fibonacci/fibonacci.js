const fibonacci = function(n) {
    if (n < 0) {return "OOPS";}
    if (n === 0) {return 0;}
    if (n < 3 && n > 0) {return 1;}
    else {
        let a = 1;
        let b = 1;
        let c = 0;
    
        for (i = 0; i < (n - 2); i++) {
            c = a + b;
            a = b;
            b = c;
        }
    return c;
    }
};

module.exports = fibonacci
