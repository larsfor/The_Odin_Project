# frozen_string_literal: true

require_relative './node'

# A class to handle the logic behind linked lists
# A basic representation [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> nil
class LinkedList
  attr_reader :head

  def initialize
    @head = nil
  end

  def append(value)
    if @head.nil?
      prepend(value)
    else
      tail.next_node = Node.new(value, nil)
    end
  end

  def prepend(value)
    @head = Node.new(value, @head)
  end

  def size
    return 0 if @head.nil?

    size = 1
    current_node = @head
    until current_node.next_node.nil?
      current_node = current_node.next_node
      size += 1
    end
    size
  end

  def tail
    current_node = @head
    current_node = current_node.next_node until current_node.next_node.nil?
    current_node
  end

  def at(index)
    return nil if index > size

    place = 0
    current_node = @head
    until place == index
      current_node = current_node.next_node
      place += 1
    end
    current_node
  end

  def pop
    current_node = @head
    current_node = current_node.next_node until current_node.next_node.next_node.nil?
    current_node.next_node = nil
  end

  def contains?(value)
    return true if @head.data == value

    current_node = @head
    until current_node.next_node.nil?
      current_node = current_node.next_node
      return true if current_node.data == value
    end
    false
  end

  def find(value)
    index = 0
    current_node = @head
    until current_node.next_node.nil?
      return index if current_node.data == value

      current_node = current_node.next_node
      index += 1
    end
    nil
  end

  def to_s
    node = @head
    until node.next_node.nil?
      print "( #{node.data} ) -> "
      node = node.next_node
    end
    puts 'nil'
  end

  def insert_at(value, index)
    return nil if index > size

    node_at_index = at(index)
    node_before = at(index - 1)
    node_before.next_node = Node.new(value, node_at_index)
  end

  def remove_at(index)
    return nil if index > size

    node_before = at(index - 1)
    node_after = at(index + 1)
    node_before.next_node = node_after
  end
end

linked_list = LinkedList.new
linked_list.append('append1')
linked_list.prepend('test')
linked_list.prepend('test2')
linked_list.append('append2')
linked_list.insert_at('computer', 2)
p linked_list.head
linked_list.remove_at(2)
p linked_list.head
