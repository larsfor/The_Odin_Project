# frozen_string_literal: true

# The board on which we play tic tac toe
class Board
  attr_accessor :cells

  def initialize
    @cells = [1, 2, 3,
              4, 5, 6,
              7, 8, 9]
  end

  def print_board
    row = 0
    left_wall = '|_'
    right_wall = '_|'
    (0..2).each do |i|
      puts left_wall + cells[(i + row)..(i + 2 + row)].join('_|_') + right_wall
      row += 2
    end
    nil # To make it not show "(0..2)" in the console after running.
  end
end

# The person who is playing, and the person's move
class Player
  attr_reader :sign, :num, :name

  def initialize(sign, num)
    @sign = sign
    @num = num
    @name = %w[Lars Erik Haakon Truels Harald].sample
  end
end

# The class where all the logic are handled
class Play
  attr_reader :player1, :player2, :board

  # Initialize the players and the board
  def initialize(player1, player2, board)
    @player1 = player1
    @player2 = player2
    @board = board
    @moves = 0
    @choices = []
    @game_won = false
    @draw = false
  end

  # A method to switch between the players for each round
  # At the start, player1 is selected automatically
  def switch_player(previous_player)
    previous_player == player1 ? player2 : player1
  end

  # A loop that asks for a move until one player wins, or it's a draw
  def play(current_player = player1)
    while @game_won == false && @draw == false
      puts "Current player is #{current_player.name}"
      # board.print_board
      puts 'Which cell do you choose?'
      move = gets.to_i
      make_move(current_player, move, board) if valid_move(move, current_player)
      @choices.push(move)
      play(switch_player(current_player))
    end
  end

  # Method to place the player's marker at the chosen cell
  def make_move(current_player, move, board)
    board.cells[move - 1] = current_player.sign
    @moves += 1
    game_won?(board, current_player)
  end

  # Make sure that the moves are valid
  def valid_move(move, current_player)
    if @choices.include?(move)
      puts "Invalid move, try again! \n"
      play(current_player)
    elsif move < 1 || move > 9
      puts "Invalid move, try again! \n"
      play(current_player)
    else
      move
    end
  end

  # All the scenarios in which a player can win
  # If none of them are fulfilled, the game continues until we either have a winner
  # or the game is a draw.
  def game_won?(board, _current_player)
    # All the different combinations for a victory. There surely must be a better
    # way to check this. But this is the best I can do currently.

    # First line across
    if board.cells[0] == 'X' && board.cells[1] == 'X' && board.cells[2] == 'X' ||
       board.cells[0] == 'O' && board.cells[1] == 'O' && board.cells[2] == 'O' ||

       # Second line across
       board.cells[3] == 'X' && board.cells[4] == 'X' && board.cells[5] == 'X' ||
       board.cells[3] == 'O' && board.cells[4] == 'O' && board.cells[5] == 'O' ||

       # Third line across
       board.cells[6] == 'X' && board.cells[7] == 'X' && board.cells[8] == 'X' ||
       board.cells[6] == 'O' && board.cells[7] == 'O' && board.cells[8] == 'O' ||

       # First column
       board.cells[0] == 'X' && board.cells[3] == 'X' && board.cells[6] == 'X' ||
       board.cells[0] == 'O' && board.cells[3] == 'O' && board.cells[6] == 'O' ||

       # Second column
       board.cells[1] == 'X' && board.cells[4] == 'X' && board.cells[7] == 'X' ||
       board.cells[1] == 'O' && board.cells[4] == 'O' && board.cells[7] == 'O' ||

       # Third column
       board.cells[2] == 'X' && board.cells[5] == 'X' && board.cells[8] == 'X' ||
       board.cells[2] == 'O' && board.cells[5] == 'O' && board.cells[8] == 'O' ||

       # Diagonally left to right
       board.cells[0] == 'X' && board.cells[4] == 'X' && board.cells[8] == 'X' ||
       board.cells[0] == 'O' && board.cells[4] == 'O' && board.cells[8] == 'O' ||

       # Diagonally right to left
       board.cells[2] == 'X' && board.cells[4] == 'X' && board.cells[6] == 'X' ||
       board.cells[2] == 'O' && board.cells[4] == 'O' && board.cells[6] == 'O'

      # puts "The winner is #{current_player.name}!"
      # board.print_board
      @game_won = true
    elsif @moves > 8
      puts 'The game ended in a draw!'
      # board.print_board
      @draw = true
    else
      @game_won = false
    end
  end
end

# board = Board.new
# game = Play.new(Player.new('X', 1), Player.new('O', 2), board)
# game.play
