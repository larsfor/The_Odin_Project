# frozen_string_literal: true

require_relative 'display'
require_relative 'board'
require_relative 'saveload'
require_relative 'textcontent'
require_relative 'textinstructions'

# The logic of the game
class Game
  include Display
  include SaveLoad
  include TextContent
  include TextInstructions

  attr_reader :first_player, :second_player, :board, :current_player, :save_game_info

  def initialize
    @board = Board.new
    @first_player = nil
    @second_player = nil
    @current_player = nil

    @save_game_info = {
      player1: nil,
      player2: nil,
      board: [],
      current_player: nil
    }
  end

  def start(first_player, second_player, board, current_player)
    unless current_player.nil?
      puts turn_message('loaded')
      update_game_info(first_player, second_player, board, current_player)
      play
    end

    puts instructions
    start_choice = mode_selection
    play if start_choice == '1'
    load_play if start_choice == '2'
  end

  def update_save_game_info(first_player, second_player, board, current_player)
    @save_game_info[:player1] = first_player
    @save_game_info[:player2] = second_player
    @save_game_info[:board] = board
    @save_game_info[:current_player] = current_player
  end

  def update_game_info(first_player, second_player, board, current_player)
    @first_player = first_player
    @second_player = second_player
    @current_player = current_player
    @board = board
  end

  def play
    game_set_up if @current_player.nil?
    board.show
    player_turns
    conclusion
  end

  def mode_selection
    choice = gets.chomp
    return choice if choice.match(/^[1-2]$/)

    puts warning_message('answer_error')
    mode_selection
  end

  def load_play
    puts turn_message('load')
    begin
      list_save_files
    rescue StandardError => e
      puts e
      start(nil, nil, [], nil)
    end

    puts turn_message('choose_load')
    filename = gets.to_s.chomp
    if load_files.include?(filename)
      player1, player2, board, current_player = from_yaml(filename)
      new_game = Game.new
      new_game.start(player1, player2, board, current_player)
    else
      puts warning_message('load_error')
      load_play
    end
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
      game(current_player)
      update_save_game_info(@first_player, @second_player, @board, @current_player)
      @current_player = switch_current_player
    end
  end

  def game(player)
    position = pick_piece(player)
    piece = board.get_piece(position)
    move = move_piece(player, piece)
    board.update_board(move, piece)
    board.show
  end

  def pick_piece(player)
    puts display_player_pick_piece(player.name)
    piece = gets.chomp.to_s
    if 'save'.include?(piece)
      save(save_game_info) if piece == 'save'
      start(nil, nil, [], nil)
    end
    return piece if board.valid_piece?(piece, player)

    puts display_input_warning
    pick_piece(player)
  end

  def move_piece(player, piece)
    puts display_player_pick_move(player.name, piece.name)
    move = gets.chomp.downcase.to_s
    if move == 'x'
      game(player)
      @current_player = switch_current_player
      game(current_player)
    end
    return move if board.valid_move?(piece, move)

    puts display_input_warning
    move_piece(player, piece)
  end

  def switch_current_player
    current_player == first_player ? second_player : first_player
  end

  def save(save_game_info)
    puts turn_message('saved')
    save_file(save_game_info)
  end

  def conclusion
    if board.game_over?
      @current_player = switch_current_player
      puts display_winner(current_player.name)
    else
      puts display.tie
    end
  end
end
