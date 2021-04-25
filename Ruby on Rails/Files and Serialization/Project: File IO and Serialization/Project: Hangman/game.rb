# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

require './text_instructions'
require './text_content'
require './display'

# The class that starts the game
class Game
  include TextInstructions
  include TextContent
  include Display

  def play
    # puts instructions
    start_choice = mode_selection
    new_play if start_choice == '1'
    load_game if start_choice == '2'
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

  def load_game
    saved_game = 'TODO, NOT IMPLEMENTED YET'
    puts saved_game
  end
end
