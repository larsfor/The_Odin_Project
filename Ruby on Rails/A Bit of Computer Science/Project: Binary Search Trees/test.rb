# frozen_string_literal: true

require_relative './node'

# A class for building the binary search tree
class Tree
  attr_accessor :list

  def initialize(array)
    @root = build_tree(array)
    @list = array.uniq
  end

  def build_tree(array)
    return Node.new(array.first) if array.length < 2

    uniq_sort_arr = array.sort.uniq
    mid = uniq_sort_arr.length / 2

    root = Node.new(uniq_sort_arr[mid])
    root.left = build_tree(uniq_sort_arr[0..mid - 1])
    root.right = build_tree(uniq_sort_arr[mid + 1..-1])

    root
  end

  def insert(value, root = @root)
    return if root.data == value

    goal_node = directions(value, root)
    return insert_leaf(value, root) if goal_node.data.nil?
    return insert_leaf(value, goal_node) if childs(goal_node).zero?

    leaf = value > root.data ? root.right : root.left
    insert(value, leaf)
  end

  def delete(value, root = @root)
    return p 'That value is not in the tree.' unless @list.include?(value)

    # Base cases
    curr_node = directions(value, root)
    goal_node = directions(value, curr_node)
    if goal_node.data == value
      # No children
      return no_children(curr_node, goal_node) if childs(goal_node).zero?

      # One child
      return one_child(value, curr_node, goal_node) if childs(goal_node) == 1

      # Two children
      return two_children(root, goal_node) if childs(goal_node) == 2
    end

    node = value > root.data ? root.right : root.left
    delete(value, node)
  end

  def no_children(curr_node, goal_node)
    curr_node.left = nil if goal_node.right.nil?
    curr_node.right = nil if goal_node.left.nil?
  end

  def one_child(value, curr_node, goal_node)
    next_node = goal_node.data >= value ? goal_node.right : goal_node.left
    curr_node.right = next_node if next_node.data > curr_node.data
    curr_node.left = next_node if next_node.data < curr_node.data
  end

  def two_children(_curr_node, _goal_node)
    #  if value != root.data
    p 'test2'
  end

  def childs(root)
    return 0 if root.left.nil? && root.right.nil?
    return 1 if root.left.nil? || root.right.nil?

    2
  end

  def directions(value, root)
    return root.left if root.right.nil?
    return root.right if root.left.nil?
    return root.left if root.data > value
    return root.right if root.data < value
  end

  def insert_leaf(value, root)
    list << value
    return root.left = Node.new(value) if root.data > value
    return root.right = Node.new(value) if root.data < value
  end

  def pretty_print(node = @root, prefix = '', is_left = true)
    pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
    puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
    pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
  end
end

array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
bst = Tree.new(array)

bst.insert(11)
# bst.insert(10)
bst.insert(24)
bst.pretty_print
