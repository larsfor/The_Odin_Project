# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

require './text_instructions'
require './text_content'
require './display'
require './save_load'

# The class that starts the game
class Game
  include TextInstructions
  include TextContent
  include Display
  include SaveLoad

  def play
    # puts instructions
    start_choice = mode_selection
    new_play if start_choice == '1'
    load_play if start_choice == '2'
  end

  def mode_selection
    choice = gets.chomp
    return choice if choice.match(/^[1-2]$/)

    puts warning_message('answer_error')
    mode_selection
  end

  def new_play
    new_game = NewGame.new
    new_game.start
  end

  def load_play
    puts turn_message('load')
    list_save_files
    puts turn_message('choose_load')
    filename = gets.to_s.chomp
    if load_files.include?(filename)
      word, turn, guessed_letters = from_yaml(filename)
      new_game = NewGame.new
      new_game.start(word, turn, guessed_letters)
    else
      puts warning_message('load_error')
      load_play
    end
  end
end
