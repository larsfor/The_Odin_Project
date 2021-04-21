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

    # If the computer plays, it places four random colors on the hidden board
    # If not, let the Gamemaker decide the colors on the hidden board
    # After all the hidden spots have been filled, the game can be started
    def play
      computer_play? ? computer_place_hidden : manual_place('hidden')

      puts 'Alright, lets start'
      board.print_hidden

      # For 12 rounds, the Gamebreaker choses fours colors
      @round = 0
      (0..11).each do |rows|
        (0..3).each do |colu|
          @round += 1
          manual_place('board', @round, rows, colu)
        end
      end
    end

    private

    def computer_play?
      player1.name == 'CPU' || player2.name == 'CPU'
    end

    def manual_place(grid, round = 0, rows = 0, colu = 0)
      if grid == 'hidden'
        hidden = board.hidden[0].count { |x| x.value != '' }
        return unless hidden < 4

        puts "Pick the hidden color # #{hidden + 1} / 4. Choose from: (r)ed, (b)lue, (g)reen, (y)ellow, (br)own and (t)eal."
        set_color(grid, rows, hidden)
      end
      puts "Round #{rows + 1}. Pick a color #{round % 5} / 4. Choose from: (r)ed, (b)lue, (g)reen, (y)ellow, (br)own and (t)eal."
      set_color(grid, rows, colu)
    end

    def set_color(grid, rows, colu)
      color = gets.chomp
      if valid?(color)
        pick_color(grid, color, rows, colu)
      else
        puts 'Invalid color, try again!'
        manual_place('hidden')
      end
    end

    # The method for picking a color for a cell
    def pick_color(grid, color, rows, colu)
      chosen_color = color_hash[color.to_sym]
      board.set_cell(rows, colu, chosen_color, grid)
      board.print_board(rows) if grid == 'board'
      board.print_hidden
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

    # The computer places four color randomly
    def computer_place_hidden
      (0..3).each { |i| place_hidden(i) }
    end
  end
end
