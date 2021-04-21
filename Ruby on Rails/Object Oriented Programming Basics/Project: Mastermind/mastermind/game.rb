# frozen_string_literal: true

# Almost all of the code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

module Mastermind
  # The class where the game logic is handles
  class Game
    attr_reader :player1, :player2, :rounds, :color, :color_hash
    attr_accessor :board

    def initialize(player1, player2)
      @player1 = player1
      @player2 = player2
      @round = 1
      @board = Board.new
      @color = %i[r g b y br t]
      @color_hash = { r: 'red', b: 'blue', g: 'green', y: 'yellow', br: 'brown', t: 'teal' }
    end

    def play
      puts "Let's get ready to rumble!"

      # If the computer plays, it places four random colors on the hidden board
      # If not, let the Gamemaker decide the colors on the hidden board
      # After all the hidden spots have been filled, the game can be started
      computer_play? ? computer_place_hidden : manual_place_hidden

      puts 'Alright, lets start'
      board.print_hidden
    end

    private

    def computer_play?
      player1.name == 'CPU' || player2.name == 'CPU'
    end

    # If the computer plays, this method places a random color in a cell
    def place_hidden(iteration)
      random_color = color_hash[color[rand(5)]]
      board.set_cell(0, iteration, random_color, 'hidden')
    end

    def gamemaker_decides(col, color)
      chosen_color = color_hash[color.to_sym]
      board.set_cell(0, col, chosen_color, 'hidden')
      board.print_hidden
      manual_place_hidden
    end

    def computer_place_hidden
      (0..3).each { |i| place_hidden(i) }
    end

    # While the hidden board is not filled out, ask for a color
    def manual_place_hidden
      count = board.hidden[0].count { |x| x.value != '' }
      return unless count < 4

      puts "Hidden color #{count + 1} / 4. Choose from: (r)ed, (b)lue, (g)reen, (y)ellow, (br)own and (t)eal."
      color = gets.chomp
      if valid?(color)
        gamemaker_decides(count, color)
      else
        puts 'Invalid color, try again!'
        manual_place_hidden
      end
    end

    def valid?(color)
      @color.include?(color.to_sym)
    end
  end
end
