# frozen_string_literal: true

# Almost all of the code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

module Mastermind
  # The class where the game logic is handles
  class Game
    attr_reader :player1, :player2, :rounds
    attr_accessor :board

    def initialize(player1, player2)
      @player1 = player1
      @player2 = player2
      @round = 1
      @board = Board.new
    end

    def play
      puts "Let's get ready to rumble!"
      puts board.print_all
    end
  end
end
