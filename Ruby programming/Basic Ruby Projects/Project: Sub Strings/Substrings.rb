# frozen_string_literal: true

dictionary = %w[below down go going horn how howdy it i low own part partner sit]

def substrings(string, dictionary = ['below'])
  # Split the string into separate words
  words = string.split

  # Remove any special characters
  words.each { |word| word.gsub!(/[^0-9A-Za-z]/, '') }

  # Scan through the word, using match, for substrings
  # that corresponds to any word in the dictionary
  hash = Hash.new(0)

  dictionary.each do |dict_word|
    words.each do |string_word|
      hash[dict_word] += 1 if string_word.match(dict_word)
    end
  end
  p hash
end

# substrings("below", dictionary)
substrings("Howdy partner, sit down! How's it going?", dictionary)
