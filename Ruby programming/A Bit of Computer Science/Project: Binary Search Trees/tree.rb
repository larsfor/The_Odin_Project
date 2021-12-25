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
    if root.data == value || next_node.data == value
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
    next_node = if root.data == value && prev_node.nil?
                  root.right
                else
                  prev_node.nil? ? next_node.right : next_node.left
                end
    return rearrange_node(root, next_node, prev_node, value) if next_node.left.data.nil?

    prev_node = next_node
    two_children(root, next_node, prev_node, value)
  end

  def directions(root, value)
    return root.left if root.data > value
    return root.right if root.data <= value
  end

  def childs(next_node)
    return 0 if next_node.left.data.nil? && next_node.right.data.nil?
    return 1 if next_node.left.data.nil? || next_node.right.data.nil?

    2
  end

  def rearrange_node(root, next_node, prev_node, value)
    delete_node = find_delete(root, value)
    temp_delete = delete_node.data > value ? delete_node.left : delete_node.right
    temp_root = root

    # Removing the node that's being moved
    prev_node.left = Node.new(nil)

    if root.data > value
      root.left = next_node
      next_node.right = temp_delete.right
      next_node.left = temp_delete.left
    elsif root.data < value
      root.right = next_node
      next_node.right = temp_delete.right
      next_node.left = temp_delete.left
    else
      root.data = next_node.data
      root.right = temp_root.right
      root.left = temp_root.left
    end
  end

  def find_delete(root, value)
    return root if root.data == value
    return root if root.left.data == value || root.right.data == value

    next_node = directions(root, value)
    find_delete(next_node, value)
  end

  def find(value, root = @root)
    next_node = directions(root, value)
    return root if root.data == value
    return next_node if next_node.data == value

    find(value, next_node)
  end

  def level_order(root = @root, visited = [], discovered = [])
    visited << root.data unless root.data.nil?
    discovered << root.left unless root.left.nil?
    discovered << root.right unless root.right.nil?
    next_node = discovered.shift

    return visited if discovered.length.zero?

    level_order(next_node, visited, discovered)
    visited
  end

  # <root><left><right>
  def preorder(root = @root, array = [])
    return array if root.nil?

    array << root.data unless root.data.nil?
    preorder(root.left, array)
    preorder(root.right, array)
    array
  end

  # <left><root><right>
  def inorder(root = @root, array = [])
    return array if root.nil?

    inorder(root.left, array)
    array << root.data unless root.data.nil?
    inorder(root.right, array)
    array
  end

  # <left><right><root>
  def postorder(root = @root, array = [])
    return array if root.nil?

    postorder(root.left, array)
    postorder(root.right, array)
    array << root.data unless root.data.nil?
    array
  end

  def height(node = @root, height = 0)
    return height if childs(node).zero?

    left = 0 if left.nil?
    left = height(node.left, height + 1) unless node.left.data.nil?
    height = 0 if left.positive?
    right = height(node.right, height + 1) unless node.right.data.nil?

    right = right.nil? ? 0 : right
    left = left.nil? ? 0 : left

    left >= right ? left : right
  end

  def depth(node = @root, goal_node = @root, depth = 0)
    return depth if goal_node.data == node.data

    goal_node = directions(goal_node, node.data)
    depth(node, goal_node, depth + 1)

    depth
  end

  def balanced?
    left = height(@root.left)
    right = height(@root.right)

    diff = (left - right).abs
    diff <= 1
  end

  def rebalance
    @root = build_tree(level_order)
  end

  def pretty_print(node = @root, prefix = '', is_left = true)
    pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
    puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
    pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
  end
end

# array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
# array = [50, 38, 62, 22, 49, 57, 100, 8, 25, 46, 51, 75, 882, 361, 997, 587, 945]
array = Array.new(15) { rand(1..100) }
bst = Tree.new(array)
# bst.insert(63)
# bst.insert(64)
p bst.balanced?
p bst.level_order
p bst.preorder
p bst.inorder
p bst.postorder
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
bst.insert(rand(101..1000))
p bst.level_order
# bst.pretty_print
p bst.balanced?
bst.rebalance
p bst.balanced?
p bst.level_order
p bst.preorder
p bst.inorder
p bst.postorder
