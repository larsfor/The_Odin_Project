# frozen_string_literal: true

# The logic behind the pawn chess piece
class Pawn
  attr_reader :all_moves, :color, :symbol
  attr_accessor :position

  def initialize(color, position)
    @position = position
    @color = color
    @symbol = choose_piece_color
    @all_moves = [
      [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]
    ]
  end

  def possible_moves
    all_moves.each do |moves|
      p moves
    end
  end

  def choose_piece_color
    return '♙' if color == 'w'
    return '♟︎' if color == 'b'
  end
end
