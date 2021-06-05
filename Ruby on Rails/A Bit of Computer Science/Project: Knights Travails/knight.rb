# frozen_string_literal: true

# A class for the moves the moves the knight can do
class Knight
  attr_accessor :all_moves, :pos_moves, :curr_move, :visited

  def initialize(curr_move = [])
    @curr_move = curr_move
    @pos_moves = []
    @visited = []
  end
end
