# frozen_string_literal: true

# A connect-the-four board
class Board
  attr_accessor :cells

  def initialize
    @cells = Array.new(6) { Array.new(7) }
  end
end
