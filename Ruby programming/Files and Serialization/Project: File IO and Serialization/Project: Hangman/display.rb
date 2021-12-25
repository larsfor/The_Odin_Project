# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

# module with display information for game
module Display
  def show_word_covered(word, guessed_letters = [])
    word.chomp.split('').each do |letter|
      print '_ ' unless guessed_letters.include?(letter)
      print "#{letter} " if guessed_letters.include?(letter)
    end
    puts "\n\n"
  end
end
