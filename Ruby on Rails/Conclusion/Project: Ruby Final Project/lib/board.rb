# frozen_string_literal: true

# The board that we play on
class Board
  attr_reader :cells

  def initialize
    @cells = [
      1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32,
      33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48,
      49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64
    ]
  end

  def show
    puts <<-HEREDOC
    8 \e[31m#{cells[0]}\e[0m
    7 #{cells[8]}
    6 #{cells[16]}
    5 #{cells[24]}
    4 #{cells[32]}
    3 #{cells[40]}
    2 #{cells[48]}
    1 #{cells[56]}
        a   b   c   d   e   f   g   h
    HEREDOC
  end

  # def update_board(player_input, player_symbol)
  #   @cells[]
  # end
end

board = Board.new
board.show
