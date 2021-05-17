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
    return Node.new(array.first) if array.first.nil? && array.length < 2
    return Node.new(array.first, Node.new(nil), Node.new(nil)) if array.length < 2

    uniq_sort_arr = array.sort.uniq
    mid = uniq_sort_arr.length / 2

    root = Node.new(uniq_sort_arr[mid])
    root.left = build_tree(uniq_sort_arr[0..mid - 1])
    root.right = build_tree(uniq_sort_arr[mid + 1..-1])

    root
  end

  def insert(value, root = @root)
    return p 'That value already exist in the tree.' if @list.include?(value)

    next_node = directions(root, value)
    direction = directions(next_node, value)

    if direction.data.nil?
      @list << value
      return next_node.left = Node.new(value, Node.new(nil), Node.new(nil)) if next_node.data > value
      return next_node.right = Node.new(value, Node.new(nil), Node.new(nil)) if next_node.data < value
    end

    insert(value, next_node)
  end

  def delete(value, root = @root, prev_node = nil)
    return p "That value doesn't exist in the tree." unless @list.include?(value)

    # Base cases
    next_node = directions(root, value)
    if next_node.data == value
      @list.delete(value)
      return zero_children(root, value) if childs(next_node).zero?
      return one_child(root, next_node, value) if childs(next_node) == 1
      return two_children(root, next_node, nil, value) if childs(next_node) == 2
    end

    delete(value, next_node, prev_node)
  end

  def zero_children(root, value)
    root.left = Node.new(nil) if root.left.data == value
    root.right = Node.new(nil) if root.right.data == value
  end

  def one_child(root, next_node, value)
    switch_node = next_node.left.nil? ? next_node.right : next_node.left
    root.left = switch_node if root.left.data == value
    root.right = switch_node if root.right.data == value
  end

  def two_children(root, next_node, prev_node, value)
    next_node = prev_node.nil? ? next_node.right : next_node.left
    return rearrange_node(root, next_node, value) if next_node.left.data.nil?

    prev_node = next_node
    two_children(root, next_node, prev_node, value)
  end

  def directions(root, value)
    return root.left if root.data > value
    return root.right if root.data < value
  end

  def childs(next_node)
    return 0 if next_node.left.data.nil? && next_node.right.data.nil?
    return 1 if next_node.left.data.nil? || next_node.right.data.nil?

    2
  end

  def rearrange_node(root, next_node, value)
    delete_node = find_delete(root, value)
    temp_delete = delete_node.data > value ? delete_node.left : delete_node.right

    if root.data > value
      next_node.left = temp_delete.left
      next_node.right = Node.new(temp_delete.right.data, Node.new(nil), temp_delete.right.right)
      root.left = next_node
    elsif root.data < value
      next_node.right = Node.new(temp_delete.right.data, Node.new(nil), temp_delete.right.right)
      next_node.left = temp_delete.left
      root.right = next_node.right
    end
  end

  def find_delete(root, value)
    return root if root.data == value
    return root if root.left.data == value || root.right.data == value

    next_node = directions(root, value)
    find_delete(next_node, value)
  end

  def pretty_print(node = @root, prefix = '', is_left = true)
    pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
    puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
    pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
  end
end

array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
bst = Tree.new(array)

# bst.insert(6)
bst.insert(11)
bst.insert(10)
bst.insert(12)
bst.insert(13)
# bst.delete(324)
# bst.insert(9999)
# bst.insert(324)
# bst.delete(1)
# bst.delete(5)
bst.pretty_print
# bst.delete(11)
# bst.pretty_print
# bst.delete(67)
bst.delete(4)
bst.pretty_print
