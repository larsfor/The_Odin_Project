# frozen_string_literal: true

# unsorted_array = [5, 2, 1, 3, 6, 4]
unsorted_array = [4, 8, 6, 2, 1, 7, 5, 3]

def merge_sort(array)
  # Sort and return the array, based on which cell has the smallest amount
  # This is the base case
  if array.length < 3
    return array if array.length == 1
    return array[0], array[1] if array[0] < array[1]
    return array[1], array[0] if array[1] < array[0]
  end

  # 1 Divide: Split the array into two halves
  left_half = array[0..array.length / 2 - 1]
  right_half = array[array.length / 2..-1]

  # 2 Conquer: recursively sort the two smaller arrays and append them to a
  # a temporary sorted array
  left_half = merge_sort(left_half)
  right_half = merge_sort(right_half)

  # 3 Combine: Merge the two sorted, smaller arrays into a single sorted array.
  # Here we have to sort again, which is separated from the sorting done previously
  sorted_array = []

  loop do
    if right_half.first.nil?
      sorted_array << left_half
      break
    end

    if left_half.first.nil?
      sorted_array << right_half
      break
    end

    sorted_array << if left_half.first > right_half.first
                      right_half.shift
                    else
                      left_half.shift
                    end
  end
  sorted_array.flatten
end

p merge_sort(unsorted_array)
