# frozen_string_literal: true

# The game need two players
class Player
  attr_reader :name, :color

  def initialize(name, _symbol)
    @name = name
    @color = color
  end
end
