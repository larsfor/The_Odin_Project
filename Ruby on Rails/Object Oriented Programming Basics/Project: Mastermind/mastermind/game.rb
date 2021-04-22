# frozen_string_literal: true

# Almost all of the code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

# A game of Mastermind
module Mastermind
  # The class where the game logic is handles
  class Game
    attr_reader :player1, :player2, :color, :color_hash
    attr_accessor :board

    def initialize(player1, player2)
      @player1 = player1
      @player2 = player2
      @board = Board.new
      @color = %i[r g b y br t]
      @color_hash = { r: 'red', b: 'blue', g: 'green', y: 'yellow', br: 'brown', t: 'teal' }
    end

    # If the computer plays, it places four random colors on the hidden board.
    # If not, let the Gamemaker decide the colors on the hidden board.
    # After all the hidden spots have been filled, the game can be started.
    # If the color is right, it gets an "O", if it's both the correct color
    # and the right place, it gets an "X".
    def play
      computer_play? ? computer_place_hidden : manual_place('hidden')

      # puts 'Alright, lets start'
      # board.print_hidden

      # For 12 rounds, the Gamebreaker choses fours colors
      @round = 0
      (0..11).each do |row|
        check_guesses(row, board) if row.positive?
        (0..3).each do |colu|
          @round += 1
          manual_place('board', @round, row, colu)
        end
      end
    end

    private

    def check_guesses(row, board)
      boar = board.print_board(row - 1)
      fed = board.print_guesses_feedback(row - 1)
      print boar, fed
      # board.print_hidden
      # board.print_guesses_feedback(row - 1)
    end

    # The computer places four color randomly
    def computer_place_hidden
      (0..3).each { |i| place_hidden(i) }
    end

    def manual_place(grid, round = 0, row = 0, colu = 0)
      case grid
      when 'hidden'
        hidden = board.hidden[0].count { |x| x.value != '' }
        return unless hidden < 4

        puts "Pick the hidden color # #{hidden + 1} / 4. Choose from: (r)ed, (b)lue, (g)reen, (y)ellow, (br)own and (t)eal."
        set_color(grid, round, row, hidden)
      when 'board'
        puts "Round #{row + 1}. Pick a color #{round % 5} / 4. Choose from: (r)ed, (b)lue, (g)reen, (y)ellow, (br)own and (t)eal."
        set_color(grid, round, row, colu)
      end
    end

    # "O" is correct color but wrong spot, "X" is both correct color and spot.
    def give_feedback(row, colu, grid)
      board.set_cell(row, colu, 'O', grid) if correct_color(row, colu)
      board.set_cell(row, colu, 'X', grid) if correct_spot(row, colu)
    end

    def correct_color(row, colu)
      board.hidden[0].any? { |cell| cell.value == board.grid[row][colu].value }
    end

    def correct_spot(row, colu)
      board.grid[row][colu].value == board.hidden[0][colu].value
    end

    def set_color(grid, round, row, colu)
      color = gets.chomp
      if valid?(color)
        pick_color(grid, color, row, colu)
      else
        puts 'Invalid color, try again!'
        manual_place(grid, round, row, colu)
      end
    end

    # The method for picking a color for a cell
    def pick_color(grid, color, row, colu)
      chosen_color = color_hash[color.to_sym]
      board.set_cell(row, colu, chosen_color, grid)
      give_feedback(row, colu, 'feedback')
      # board.print_board(row) if grid == 'board'
      # board.print_hidden
      manual_place('hidden') if grid == 'hidden'
    end

    # A check is the color is valid
    def valid?(color)
      @color.include?(color.to_sym)
    end

    # If the computer plays, this method places a random color in a cell
    def place_hidden(iteration)
      random_color = color_hash[color[rand(5)]]
      board.set_cell(0, iteration, random_color, 'hidden')
    end

    def computer_play?
      player1.name == 'CPU' || player2.name == 'CPU'
    end
  end
end
