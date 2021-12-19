# frozen_string_literal: true

# The logic behind the bishop chess piece
class Queen
  attr_reader :color, :symbol, :starting_moves, :name
  attr_accessor :position

  def initialize(color, position)
    @name = 'queen'
    @position = position
    @color = color
    @symbol = choose_piece_color
    @all_moves = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
                  [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0],
                  [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
                  [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
                  [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
                  [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7],
                  [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7],
                  [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]]
  end

  def moves
    all_moves
  end

  def choose_piece_color
    return '♕' if color == 'w'
    return '♛' if color == 'b'
  end
end
