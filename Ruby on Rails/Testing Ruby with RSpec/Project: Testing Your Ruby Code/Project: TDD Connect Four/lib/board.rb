# frozen_string_literal: true

# Connect Four board
class Board
  
  attr_reader :cells

  def initialize
    @cells = [1, 2, 3, 4, 5, 6, 7,
              8, 9, 10, 11, 12, 13, 14,
              15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28,
              29, 30, 31, 32, 33, 34, 35,
              36, 37, 38, 39, 40, 41, 42]
  end

  # rubocop:disable Metrics/AbcSize
  def show
    puts <<-HEREDOC
    #{cells[0]}  | #{cells[1]}  | #{cells[2]}  | #{cells[3]}  | #{cells[4]}  | #{cells[5]}  | #{cells[6]}
    ---+----+----+----+----+----+----
    #{cells[7]}  | #{cells[8]}  | #{cells[9]} | #{cells[10]} | #{cells[11]} | #{cells[12]} | #{cells[13]}
    ---+----+----+----+----+----+----
    #{cells[14]} | #{cells[15]} | #{cells[16]} | #{cells[17]} | #{cells[18]} | #{cells[19]} | #{cells[20]}
    ---+----+----+----+----+----+----
    #{cells[21]} | #{cells[22]} | #{cells[23]} | #{cells[24]} | #{cells[25]} | #{cells[26]} | #{cells[27]}
    ---+----+----+----+----+----+----
    #{cells[28]} | #{cells[29]} | #{cells[30]} | #{cells[31]} | #{cells[32]} | #{cells[33]} | #{cells[34]}
    ---+----+----+----+----+----+----
    #{cells[35]} | #{cells[36]} | #{cells[37]} | #{cells[38]} | #{cells[39]} | #{cells[40]} | #{cells[41]}
    HEREDOC
  end
  # rubocop:enable Metrics/AbcSize

  def update_board(number, symbol)
    # TODO: Fix so that we can't place above first first row
    # For example when the entire first column is filled, you can't place more on
    # that column.

    taken_spots = [@cells[number - 1],
                   @cells[number + 6],
                   @cells[number + 13],
                   @cells[number + 20],
                   @cells[number + 27],
                   @cells[number + 34]]

    count = taken_spots.count { |x| ['⚪', '⚫'].include?(x) }
    placement = 42 - (6 * count) - 7 + number - count

    @cells[placement - 1] = symbol
  end

  def valid_move?(number)
    taken_spots = [@cells[number - 1],
                   @cells[number + 6],
                   @cells[number + 13],
                   @cells[number + 20],
                   @cells[number + 27],
                   @cells[number + 34]]

    count = taken_spots.count { |x| ['⚪', '⚫'].include?(x) }
    placement = 42 - (6 * count) - 7 + number - count

    return false if placement < 1
        
    number.between?(1, 7)
  end

  def full?
    cells.all? { |cell| cell =~ /[^1-42]/ }
  end

  def game_over?
    cells.each_with_index do |_, index|
      # Four connected horizontally
      return true if [cells[index], cells[index + 1], cells[index + 2], cells[index + 3]].uniq.length == 1

      # Four connected vertically
      return true if [cells[index], cells[index + 7], cells[index + 14], cells[index + 21]].uniq.length == 1

      # Four connected diagonally right to left
      next if [cells[index + 21], cells[index + 15], cells[index + 9], cells[index + 3]].uniq == [nil]
      return true if [cells[index + 21], cells[index + 15], cells[index + 9], cells[index + 3]].uniq.length == 1

      # Four connected diagonally right to left
      next if [cells[index], cells[index + 8], cells[index + 16], cells[index + 24]].uniq == [nil]
      return true if [cells[index], cells[index + 8], cells[index + 16], cells[index + 24]].uniq.length == 1
    end

    false
  end
end
