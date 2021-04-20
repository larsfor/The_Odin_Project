# frozen_string_literal: true

# Almost all of the code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

module Mastermind
  # The board should manage the grid by setting and getting
  # grid values and checking of the game has ended in a win or a loss.
  class Board
    attr_reader :grid, :hidden

    def initialize(input = {})
      @grid = input.fetch(:grid, decoding_board)
      @hidden = input.fetch(:grid, hidden_pattern)
    end

    def get_cell(round, color)
      grid[round][color]
    end

    def set_cell(round, color, value)
      get_cell(round, color).value = value
    end

    def print_all
      print_board
      print_pattern
    end

    def print_board
      puts 'Decoding board:'
      grid.each do |row|
        puts row.map { |cell| cell.value.empty? ? '[]' : cell.value }.join(' ')
      end
      nil # To hide the return statement from the Object
    end

    def print_pattern
      puts 'Hidden pattern:'
      hidden.each do |row|
        puts row.map { |cell| cell.value.empty? ? '[]' : cell.value }.join(' ')
      end
      nil # To hide the return statement from the Object
    end

    private

    # The default grid is a 4x12 board, where the gamebreaker tries to
    # guess the pattern of the gamemaker.
    def decoding_board
      Array.new(12) { Array.new(4) { Cell.new } }
    end

    # The pattern the codemaker decides, and the codebreaker is supposed
    # to figure out
    def hidden_pattern
      Array.new(1) { Array.new(4) { Cell.new } }
    end
  end
end
