# frozen_string_literal: true

require_relative './knight'

# A class for the chess board
class Board
  attr_accessor :board, :all_moves

  def initialize
    #                    upl       upr      rup    rdown   downr    downl    ldown     lup
    @all_moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [-1, -2], [1, -2]]
    @board = Array.new(8) { Array.new(8) }
  end

  def print_board
    board.each { |col| p col }
  end

  def knight_moves(start, stop)
    board[stop[0]][stop[1]] = 'X'
    goal_moves = moves([start])
    goal_path = shortest_path(goal_moves, stop)

    p goal_path
    # puts "You made it in #{goal_path[1]} moves! Here's your path:"
    # goal_path[0].each { |path| p path }
  end

  private

  def moves(coords, visited = [])
    moves = []
    coords.each { |c| return coords if board[c[0]][c[1]] == 'X' }

    coords.each do |coord|
      knight = Knight.new(coord)
      possible_moves = possible_moves(all_moves, coord.first, coord.last, knight) - visited
      visited << coord
      knight.pos_moves += moves(possible_moves, visited)
      moves << knight
    end
    moves
  end

  def possible_moves(all_moves, move_a, move_b, _knight)
    possible_moves = []
    all_moves.each do |kni_i, kni_j|
      next unless within_bounds?(kni_i, move_a, kni_j, move_b)

      possible_moves << [kni_i + move_a, kni_j + move_b]
    end
    possible_moves
  end

  def within_bounds?(kni_i, start_a, kni_j, start_b)
    (kni_i + start_a) > -1 && (kni_i + start_a) < 8 && (kni_j + start_b) > -1 && (kni_j + start_b) < 8
  end
end

travails = Board.new

travails.knight_moves([3, 3], [4, 3])
# travails.print_board
