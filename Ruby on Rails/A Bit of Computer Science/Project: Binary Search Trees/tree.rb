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
    # goal_node = find_node(value, root)
    # p goal_node
    return insert_leaf(value, root) if goal_node.data.nil?
    return insert_leaf(value, goal_node) if childs(value, goal_node).zero?

    leaf = value > root.data ? root.right : root.left
    insert(value, leaf)
  end

  def delete(value, root = @root)
    return p 'That value is not in the tree.' unless @list.include?(value)

    # Base cases
    goal_node = find_node(value, root)
    curr_node = directions(value, root)
    if goal_node.data == value
      # No children
      return no_children(value, curr_node, goal_node) if childs(value, curr_node).zero?

      # One child
      return one_child(value, curr_node, goal_node) if childs(value, curr_node) == 1

      # Two children
      return two_children(root, goal_node) if childs(value, curr_node) == 2
    end

    node = value > root.data ? root.right : root.left
    delete(value, node)
  end

  def no_children(value, curr_node, _goal_node)
    curr_node.left = Node.new(nil) if curr_node.data > value
    curr_node.right = Node.new(nil) if curr_node.data < value
  end

  def one_child(value, curr_node, goal_node)
    next_node = directions(value, goal_node)
    curr_node.right = next_node if next_node.data > curr_node.data
    curr_node.left = next_node if next_node.data < curr_node.data
  end

  def two_children(_curr_node, _goal_node)
    #  if value != root.data
    p 'test2'
  end

  def childs(value, root)
    goal_node = directions(value, root)
    return 0 if goal_node.left.nil? && goal_node.right.nil? || root.left.nil? && root.right.nil?
    return 1 if goal_node.left.nil? || goal_node.right.nil? 

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
    next_node = directions(value, root)
    return next_node.left = Node.new(value) if root.data < value
    return next_node.right = Node.new(value) if root.data > value
  end

  def find_node(value, root)
    curr_node = directions(value, root)
    return curr_node if curr_node.data == value

    directions(value, curr_node)
  end

  def pretty_print(node = @root, prefix = '', is_left = true)
    pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
    puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
    pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
  end
end

array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
bst = Tree.new(array)

bst.pretty_print
# bst.insert(11)
# bst.insert(10)
# bst.delete(11)
bst.delete(5)
bst.delete(7)
bst.pretty_print
# bst.delete(67)
