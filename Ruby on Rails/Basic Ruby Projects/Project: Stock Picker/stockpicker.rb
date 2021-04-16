def stock_picker(array)
  result = 0
  best_days = []

  # Loop through each of the days checking the profit for each proceeding day minus current day
  # If the future day minus the current day is larger than current result, we replace the result
  # and the indices of the array "best_days"
  array.each_with_index {|day, day_index|
    array.each_with_index {|profit, profit_index|
      
      # You have to have bought before you can sell
      if profit_index > day_index

        # No need to do anything if we already have a better result
        if array[profit_index] - array[day_index] > result
          result = array[profit_index] - array[day_index]
          best_days = [day_index, profit_index]
         end
      end
    }
  }

  p "#{best_days} for a profit of $#{array[best_days[1]]} - $#{array[best_days[0]]} = #{result}"

end

stock_picker([17,3,6,9,15,8,6,1,10])