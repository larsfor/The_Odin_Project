# frozen_string_literal: true

require_relative 'display'

# Contains the logic to play the game
class Game
  include Display
  attr_reader :first_player, :second_player, :board, :current_player

  def initialize
    @board = Board.new
    @first_player = nil
    @second_player = nil
    @current_player = nil
  end

  def play
    game_set_up
    board.show
    player_turns
    conclusion
  end

  def create_player(number, symbol)
    puts display_name_prompt(number)
    name = gets.chomp
    Player.new(name, symbol)
  end

  def turn(player)
    cell = turn_input(player)
    board.update_board(cell, player.symbol)
    board.show
  end

  private

  def game_set_up
    puts display_intro
    @first_player = create_player(1, '⚪')
    @second_player = create_player(2, '⚫')
  end

  def player_turns
    @current_player = first_player
    until board.full?
      turn(current_player)
      break if board.game_over?

      @current_player = switch_current_player
    end
  end

  def turn_input(player)
    puts display_player_turn(player.name, player.symbol)
    number = gets.chomp.to_i
    return number if board.valid_move?(number)

    puts display_input_warning
    turn_input(player)
  end

  def switch_current_player
    current_player == first_player ? second_player : first_player
  end

  def conclusion
    if board.game_over?
      puts display_winner(current_player.name)
    else
      puts display.tie
    end
  end
end
