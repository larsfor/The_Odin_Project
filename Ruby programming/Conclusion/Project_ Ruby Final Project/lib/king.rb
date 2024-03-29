# frozen_string_literal: true

# The logic behind the pawn chess piece
class King
  attr_reader :color, :symbol, :starting_moves, :name
  attr_accessor :position

  def initialize(color, position)
    @name = 'king'
    @position = position
    @color = color
    @symbol = choose_piece_color
    @all_moves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
  end

  def moves
    @all_moves
  end

  def choose_piece_color
    return '♔' if color == 'w'
    return '♚' if color == 'b'
  end
end
