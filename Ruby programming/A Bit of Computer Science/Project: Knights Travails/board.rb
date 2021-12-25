# Frozen_string_literal: true

require_relative 'knight'

# Class defining the chessboard
class Board
  def initialize; end

  def knight_moves(start, stop)
    current = make_tree(start, stop)
    history = []
    make_history(current, history, start)
    print_knight_moves(history)
  end

  private

  def make_tree(start, stop)
    queue = [Knight.new(start)]
    current = queue.shift
    until current.position == stop
      current.next_moves.each do |move|
        current.children << knight = Knight.new(move, current)
        queue << knight
      end
      current = queue.shift
    end
    current
  end

  def make_history(current, history, start)
    until current.position == start
      history << current.position
      current = current.parent
    end
    history << current.position
  end

  def print_knight_moves(history)
    puts "You made it in #{history.size - 1} moves! Here's your path:"
    history.reverse.each { |move| puts move.to_s }
  end
end

knight_travails = Board.new
knight_travails.knight_moves([3, 3], [4, 3])
