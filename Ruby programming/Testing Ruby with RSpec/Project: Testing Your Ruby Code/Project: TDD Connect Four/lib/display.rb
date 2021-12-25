# frozen_string_literal: true

# Text for progression in Connect Four
module Display
  def display_intro
    "Let's play a simple Connect Four game in the console \n\n"
  end

  def display_name_prompt(number)
    "What is the name of the player ##{number}?"
  end

  def display_input_warning
    "\e[31mSorry, that is an invalid answer. Please try again.\e[0m"
  end

  def display_player_turn(name, symbol)
    "#{name}, please enter a number (1-7) that is available to place an '#{symbol}'"
  end

  def display_winner(player)
    "GAME OVER! #{player} is the winner!"
  end

  def display_tie
    "It's a draw."
  end
end
