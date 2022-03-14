# frozen_string_literal: true
# rubocop:disable all

# My own enumerable module
module Enumerable
  def my_each
    return 'No block given' unless block_given?

    self.length.times { |i| yield self[i] }
  end

  def my_each_with_index
    return 'No block given' unless block_given?

    self.length.times { |i| yield self[i], i }
  end

  def my_select
    return 'No block given' unless block_given?
    
    array = []
    self.my_each { |i| array << i if yield(i) }
    array
  end

  def my_all?
    return 'No block given' unless block_given?

    answer = true
    self.my_each do |i|
      unless yield(i)
        answer = false
        break
      end
    end
    answer
  end

  def my_any?
    return 'No block given' unless block_given?

    answer = false

    self.my_each do |i|
      if yield(i)
        answer = true
        break
      end
    end
    answer
  end

  def my_none?
    return 'No block given' unless block_given?

    answer = true

    self.my_each do |i|
      if yield(i)
        answer = false
        break
      end
    end
    answer
  end

  def my_count


    answer = 0
    self.my_each {|i| answer += 1 if yield(i)}
    answer
  end

  def my_map(map_proc)
    array = []
    unless block_given?
      self.my_each {|i| array << map_proc.call(i)}
      return array
    end

    self.my_each {|i| array << yield(i)}

    array
  end

  def my_inject(accumulator = 0)
    return 'No block given' unless block_given?

    self.my_each { |i| accumulator = yield(accumulator, i) }
    accumulator
  end

    def my_map_mod(map_proc)
    
    array = []
    self.my_each {|i| array << map_proc.call(i)}

    array
  end
end

def multiply_els(array = [])
  array.my_inject(1) {|sum, n| sum * n }
end

puts 'my_each vs. each'
numbers = [1, 2, 3, 4, 5, 6]
# numbers = [2, 4, 6]
# numbers = [1, 3, 5]
# numbers.my_each { |items| puts items }
# numbers.each { |items| puts items }
# numbers.my_each_with_index { |items, index| puts items, index }
# numbers.each_with_index { |items, index| puts items, index }
# p numbers.my_select {|num| num.even? }
# p numbers.select {|num| num.even? }
# p numbers.my_all? {|num| num.even? }
# p numbers.all? {|num| num.even? }
# p numbers.my_any? {|num| num.even? }
# p numbers.any? {|num| num.even? }
# p numbers.my_none? {|num| num.even? }
# p numbers.none? {|num| num.even? }
# p numbers.my_count {|num| num.even? }
# p numbers.count {|num| num.even? }
# p numbers.my_map {|num| num.even? }
# p numbers.map {|num| num.even? }
# p numbers.my_inject {|sum, n| sum + n  }
# p numbers.inject {|sum, n| sum + n }
# p multiply_els([2, 4, 5])

map_proc = Proc.new { |num| num.even? }
# p numbers.my_map_mod(map_proc)
p numbers.my_map(map_proc)
p numbers.map { |num| num.even? }


# rubocop:enable all