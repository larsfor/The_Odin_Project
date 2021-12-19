# frozen_string_literal: true

# The logic behind the knight chess piece
class Knight
  attr_reader :color, :symbol, :starting_moves, :name
  attr_accessor :position

  def initialize(color, position)
    @name = 'knight'
    @position = position
    @color = color
    @symbol = choose_piece_color
    @all_moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]]
  end

  def moves
    @all_moves
  end

  def choose_piece_color
    return '♘' if color == 'w'
    return '♞' if color == 'b'
  end
end
