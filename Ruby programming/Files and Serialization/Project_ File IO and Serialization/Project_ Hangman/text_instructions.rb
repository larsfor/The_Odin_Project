# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

# Module only for presenting the instrucions of the game
module TextInstructions
  def instructions
    <<~HEREDOC
      #{formatting('underline', 'How to play Hangman:')}
      This is a 1-player game against the computer.
      You are given a random word between 5 and 12 characters long, and your mission is to figure out the word in five or less tries.
      The pool of words are English only.
      #{formatting('underline', 'Progress:')}
      At the start, you will be shown a number of underscores, separated by a space, that corresponds to the length of the word.
      As you find correct letters, the underscores will be replaced by the given letter.
      #{formatting('underline', 'Rules:')}
      #1 You have five tries to guess the word. You will be given a count to show how many more incorrect guesses
      you can have before the game ends.
      #2 If you guess a letter more than once, you won't be penalized for it.
      #{formatting('underline', "It's time to play!")}
      Would you like to be start a new game or load a previously saved game?
      Press '1' to start a new game
      Press '2' to load a previously saved game
    HEREDOC
  end
end
