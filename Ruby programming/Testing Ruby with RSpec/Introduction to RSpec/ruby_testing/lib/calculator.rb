# frozen_string_literal: true

class Calculator
  def add(*args)
    args.reduce { |acc, number| acc + number }
  end

  def mult(*args)
    args.reduce { |acc, number| acc * number }
  end

  def div(*args)
    args.reduce { |acc, number| acc / number }
  end
end
