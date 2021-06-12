# frozen_string_literal: true

def bubble_sort(array)
  # To reduce the number of iterations, we reduce the amount of elements checked
  # in the array for each iteration. This is because the previous last element
  # in the array will be the largest number, meaning we don't have to check this number.

  n_loops = array.length - 2
  n_checks = array.length - 1

  n_loops.times do |_i|
    n_checks.times do |j|
      # Assign current element and element + 1 to variables
      curr = array[j]
      future = array[j + 1]

      # If the element + 1 is larger than the current element, they switch places
      if curr > future
        array[j] = future
        array[j + 1] = curr
      end
    end
    n_checks -= 1
  end

  # Print the array to the console
  p array
end

# bubble_sort([4,3,78,2,0,2])
bubble_sort([6, 5, 3, 1, 8, 7, 2, 4])
