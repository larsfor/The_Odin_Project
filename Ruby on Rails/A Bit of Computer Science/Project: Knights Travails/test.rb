# frozen_string_literal: true

require_relative './knight'

# A class for the chess board
class Board
  attr_accessor :board

  def initialize
    @board = Array.new(8) { Array.new(8) }
  end

  def print_board
    board.each { |col| p col }
  end

  def knight_moves(start, stop)
    board[stop[0]][stop[1]] = 'X'
    goal_moves = moves([start])
    p goal_moves
  end

  private

  def moves(coords)
    p coords
    coords.each { |c| return coords if board[c[0]][c[1]] == 'X' }

    knight = Knight.new
    coords.each { |c| knight.pos_moves += possible_moves(knight.all_moves, c[0], c[1]) }

    knight.pos_moves.each { |c| knight.pos_moves += possible_moves(knight.all_moves, c[0], c[1]) }

    moves(knight.pos_moves)
    knight
  end

  def possible_moves(all_moves, move_a, move_b)
    possible_moves = []
    all_moves.each do |kni_i, kni_j|
      possible_moves << [kni_i + move_a, kni_j + move_b] if within_bounds?(kni_i, move_a, kni_j, move_b)
    end
    possible_moves
  end

  def within_bounds?(kni_i, start_a, kni_j, start_b)
    (kni_i + start_a) > -1 && (kni_i + start_a) < 8 && (kni_j + start_b) > -1 && (kni_j + start_b) < 8
  end
end

travails = Board.new

travails.knight_moves([0, 0], [3, 3])
# travails.print_board
