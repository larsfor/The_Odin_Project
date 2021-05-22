# frozen_string_literal: true
# rubocop:disable all

# My own enumerable module
module Enumerable
  def my_each
    return 'No block given' unless block_given?

    yield(self)
  end

  def my_each_with_index
    self.length.times do |i|
      yield self[i], i
    end
  end
end

puts 'my_each vs. each'
numbers = [1, 2, 3, 4, 5]
# numbers.my_each { |items| puts items }
# numbers.each { |items| puts items }
numbers.my_each_with_index { |items, index| puts items, index }
numbers.each_with_index { |items, index| puts items, index }

# rubocop:enable all