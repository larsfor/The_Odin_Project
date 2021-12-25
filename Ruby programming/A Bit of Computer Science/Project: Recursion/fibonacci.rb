# frozen_string_literal: true

def fibs(number)
  case number
  when 0
    puts 0
  when 1
    puts 1
  else
    fn_one = 1
    fn_two = 1
    fn = 0

    (number - 2).times do
      fn = fn_one + fn_two
      fn_one = fn_two
      fn_two = fn
    end
    puts fn
  end
end

fibs(10)

def fibs_rec(n)
  return 0 if n.zero?
  return 1 if n == 1

  fibs_rec(n - 1) + fibs_rec(n - 2)
end

p fibs_rec(3)
