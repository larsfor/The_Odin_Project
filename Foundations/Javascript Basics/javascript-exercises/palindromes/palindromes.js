const palindromes = function(string) {
    const puncts = [".",",",":","!","?"," "];
    let array = Array.from(string).filter((w) => !puncts.includes(w));
    if (array.length % 2 != 0) {
        let firstHalf = array.slice(0, (array.length / 2)).join("");
        let secondHalf = array.slice((array.length / 2) + 1, array.length).reverse().join("");
        return firstHalf.toLowerCase() === secondHalf.toLowerCase();
    } else {
        let firstHalf = array.slice(0, (array.length / 2) - 1).join("");
        let secondHalf = array.slice((array.length / 2) + 1, array.length).reverse().join("");
        return firstHalf.toLowerCase() === secondHalf.toLowerCase();
    }
}

module.exports = palindromes
