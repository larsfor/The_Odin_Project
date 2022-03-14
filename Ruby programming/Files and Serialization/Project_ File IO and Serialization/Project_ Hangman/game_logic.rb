# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

# Game logic for word and guessed letters
module GameLogic
  def solved?(word, guessed_letters = [])
    unique_word = word.chomp.downcase.split(//).uniq
    unique_guessed = guessed_letters.uniq

    same?(unique_word, unique_guessed)
  end

  def repeat_game
    puts game_message('repeat_prompt')
    play_again = gets.chomp
    puts game_message('̈́thanks') if play_again != 'y'
    Game.new.play if play_again.downcase == 'y'
  end

  def same?(unique_word, unique_guessed)
    unique_word.all? { |l| unique_guessed.include?(l) }
  end
end
