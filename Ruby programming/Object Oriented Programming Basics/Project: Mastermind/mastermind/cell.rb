# frozen_string_literal: true

# The initial code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

module Mastermind
  # A class that keeps tracks of a cell's value
  # The cell is initializes as an empty string
  class Cell
    attr_accessor :value

    def initialize(value = '')
      @value = value
    end
  end
end
