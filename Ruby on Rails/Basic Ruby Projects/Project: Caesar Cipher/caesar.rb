# frozen_string_literal: true

class Caesar
  def caesar_cipher(word, rot)
    letters = word.split('')
    special_characters = ['!', ' ', ',', '.', '"', '#', '¤', '%', '&', '/', '(', ')', '=', '¡',
                          '@', '£', '$', '½', '¥', '{', '[', ']', '}', '±', '´']

    # Code each letter the corresponding ordinal value
    # plus the amount of charaters we're rotating
    ord_chars = letters.map do |letter|
      if letter.match?(/[[:alpha:]]/)
        letter.ord
      else
        letter
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
    chr_chars = ord_chars.map do |letter|
      if special_characters.include?(letter)
        letter
      elsif letter.chr.match?(/[[:alpha:]]/)
        (mod(letter + rot - check(letter), 26) + check(letter)).chr
      end
    end

    # Puts the letters combined
    chr_chars.join
  end
end

# caesar = Caesar.new

# p caesar.caesar_cipher('XYZ', 3)
