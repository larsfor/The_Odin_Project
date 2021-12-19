# frozen_string_literal: true

# The logic behind the pawn chess piece
class Pawn
  attr_reader :all_moves, :color, :symbol, :starting_moves, :name
  attr_accessor :position, :first_move

  def initialize(color, position)
    @name = 'pawn'
    @position = position
    @color = color
    @symbol = choose_piece_color
    @first_move = true
    @starting_moves = [[-2, 0], [2, 0], [-1, 0], [1, 0]]
    @all_moves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
  end

  def moves
    # first_move == true ? starting_moves : all_moves
    if first_move
      @first_move = false
      return starting_moves
    end
    @all_moves
  end

  def choose_piece_color
    return '♙' if color == 'w'
    return '♟' if color == 'b'
  end
end
