# frozen_string_literal: true

# The initial code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

module Mastermind
  # The class to keep track of the players (codebraker and codemaker).
  # In addition you can decide if you want the computer to play
  class Player
    attr_reader :role, :name

    def initialize(input)
      @role = input.fetch(:role)
      @name = input.fetch(:name)
    end
  end
end
