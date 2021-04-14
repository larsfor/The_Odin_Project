def caesar_cipher(word, rot) 
  letters = word.split("")
  special_characters = ["!",",","."," "]
  
  # Code each letter the corresponding ordinal value
  # plus the amount of charaters we're rotating
  ord_chars = letters.map do | letter |
    if special_characters.include?(letter)
      letter
    else
      letter.ord
    end
  end
  
  def check(ord)
    ord < 97 ? 65 : 97
  end

  def mod(n, m)
    (n % m + m) % m
  end

  # Decode the letter's ordinal value back to the 
  # corresponding character value, including z to a wrap
  chr_chars = ord_chars.map do | letter |
    if special_characters.include?(letter)
      letter
    else
      if (letter >= 65 && letter <= 90) || (letter >=97 && letter <= 122)
        (mod(letter + rot - check(letter), 26) + check(letter)).chr
      end
    end
  end

  # Puts the letters combined
  p chr_chars.join

end

caesar_cipher("What a string!", 5)