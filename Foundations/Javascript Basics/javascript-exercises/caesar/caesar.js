const caesar = function(string, rot) {
    // To make the looping easier for me, I make every letter lowercase
    let stringLower = string.toLowerCase(); 
    
    // Split the words so we can map each letter
    let cipher = stringLower.split("");

    // Forbidden characters
    let puncts = [",", "!", " "];

    // Make sure that you only rotate "inside" the alphabet
    let rotM = rot % 26;

    // Map through all the letters and assign them a character code and
    // convert them back to letters after rotating
    let coded = cipher.map( letter => {
        if (puncts.includes(letter)) {
            // If the character is not in the alphabet, just return it
            return letter;
        } else {
            let charCode = letter.charCodeAt();
            // If the character code is above 122, take it "back" to the start
            if (charCode + rotM > 122) {
                return String.fromCharCode(charCode + rotM - 26);
            }  
              // if the character code us below 97, take it "back" to the start 
              else if (charCode + rotM < 97) {
                return String.fromCharCode(charCode + rotM + 26);
            } else {
                return String.fromCharCode(charCode + rotM);
            }
        }
    });

    // If a letter originally was uppercase, bring them back to uppercase
    let decoded = []
    for (i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            decoded.push(coded[i].toUpperCase());
        } else {
            decoded.push(coded[i]);
        }
    }

    return decoded.join("");
}

module.exports = caesar
