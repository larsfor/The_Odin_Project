# frozen_string_literal: true

# A class for the data and the left and right children of the binary search tree
class Node
  attr_accessor :data, :left, :right

  def initialize(data, left = nil, right = nil)
    @data = data
    @left = left
    @right = right
  end

  # Compare nodes using their data attribute.
  def comparable(node1, node2)
    puts node1.data, node2.data
  end
end
