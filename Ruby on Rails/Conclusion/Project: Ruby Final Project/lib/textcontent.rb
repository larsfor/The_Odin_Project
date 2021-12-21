# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

# module only contains text for game
module TextContent
  def formatting(description, string)
    {
      'underline' => "\e[4;1m#{string}\e[0m",
      'red' => "\e[31;1m#{string}\e[0m"
    }[description]
  end

  def turn_message(message)
    {
      'start' => "Let the games begin! Choose your name and piece-color.\n\n",
      'load' => "To load a previous save state, chose one of the savefiles listed below:\n\n",
      'loaded' => "Successfully loaded a previous save state.\n\n",
      'choose_load' => "Enter the save file name below:\n\n",
      'saved' => "Game has been saved.\n\n"
    }[message]
  end

  def warning_message(message)
    {
      'answer_error' => formatting('red', "Enter '1' to start a new game or '2' to load a previously saved game.").to_s,
      'load_error' => formatting('red', 'No such save file, please try again.').to_s,
      'turn_error' => formatting('red',
                                 "Your guess should only be a single letter between a - z. Type 'quit' to exit.").to_s,
      'last_turn' => formatting('red', 'Choose carefully. This is your last chance to win!').to_s,
      'game_over' => "#{formatting('red', 'Game over. That was a hard word to guess!')} \n\n",
      'already_guessed' => "#{formatting('red', "You've already guessed that letter, try again!")} \n\n"
    }[message]
  end
end
