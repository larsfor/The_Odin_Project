# frozen_string_literal: true

# A class for the moves the moves the knight can do
class Knight
  attr_accessor :all_moves, :pos_moves, :curr_move

  def initialize(curr_move = [])
    #                    upl       upr      rup    rdown   downr    downl    ldown     lup
    @all_moves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [-1, -2], [1, -2]]
    @curr_move = curr_move
    @pos_moves = []
  end
end
