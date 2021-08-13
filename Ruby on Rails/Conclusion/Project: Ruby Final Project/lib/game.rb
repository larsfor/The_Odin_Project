# frozen_string_literal: true

require_relative 'display'

# The logic of the game
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

  def create_player(number, duplicate_color = nil)
    puts display_name_promt(number)
    name = gets.chomp
    color = color_input(duplicate_color)
    Player.new(name, color)
  end

  def turn(player)
    cell = turn_input(player)
    board.update_board(cell, player.symbol)
    board.show
  end

  private

  def game_set_up
    puts display_intro
    @first_player = create_player(1)
    @second_player = create_player(2, first_player.color)
  end

  def color_input(duplicate)
    player_color_prompts(duplicate)
    input = gets.chomp.downcase.to_s
    return input if input.match?(/^[wb]$/) && input != duplicate

    puts display_input_warning
    color_input(duplicate)
  end

  def player_color_prompts(duplicate)
    puts display_color_prompt
    puts display_first_color(duplicate) if duplicate
  end

  def player_turns
    @current_player = first_player
    until board.game_over?
      turn(current_player)
      @current_player = switch_current_player
    end
  end

  def turn_input(player)
    puts display_player_turn(player.name)
    move = gets.chomp.to_s
    return move if board.valid_move?(move)

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
