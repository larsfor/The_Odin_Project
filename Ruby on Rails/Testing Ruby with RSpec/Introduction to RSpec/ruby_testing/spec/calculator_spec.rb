# frozen_string_literal: true

require './lib/calculator'

describe Calculator do
  describe '#add' do
    it 'returns the sum of two numbers' do
      calculator = Calculator.new
      expect(calculator.add(5, 2)).to eql(7)
    end

    it 'returns the sum of more than two numbers' do
      calculator = Calculator.new
      expect(calculator.add(2, 5, 7)).to eql(14)
    end
  end

  describe '#mult' do
    it 'return the product of several numbers' do
      calculator = Calculator.new
      expect(calculator.mult(2, 3, 4)).to eql(24)
    end
  end

  describe '#div' do
    it 'return the result of two numbers divided' do
      calculator = Calculator.new
      expect(calculator.div(3, 2)).to eql(1)
    end

    it 'return the result of two numbers divided' do
      calculator = Calculator.new
      expect(calculator.div(3.0, 2.0)).to eql(1.5)
    end

    it 'return the result of two numbers divided' do
      calculator = Calculator.new
      expect(calculator.div(3.0, 2)).to eql(1.5)
    end

    it 'return the result of two numbers divided' do
      calculator = Calculator.new
      expect(calculator.div(6.0, 9)).to eql(0.6666666666666666)
    end
  end
end
