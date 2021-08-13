# frozen_string_literal: true

# Text needed to play chess
module Display
  def display_intro
    "Let's play a game of chess in the console! \n\n"
  end

  def display_name_promt(number)
    "What is the name of player ##{number}?"
  end

  def display_color_prompt
    'Which color do you want to play with?'
  end

  def display_first_color(duplicate)
    "It can't be '#{duplicate}'"
  end

  def display_input_warning
    "\e[31mSorry, that is an invalid answer. Please, try again.\e[0m"
  end

  def display_player_turn(name)
    "#{name}, please pick a position on the board that is available for the pirce to place on."
  end

  def display_winner(player)
    "GAME OVER! #{player} is the winner!"
  end

  def display_tie
    "It's a draw."
  end
end
