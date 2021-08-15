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
    "Which color do you want to play with? Input 'w' for white and 'b' for black."
  end

  def display_first_color(duplicate)
    "It can't be '#{duplicate}'"
  end

  def display_input_warning
    "\e[31mSorry, that is an invalid answer. Please, try again.\e[0m"
  end

  def display_player_pick_piece(name)
    "#{name}, please pick a cell (eg. 'a2' without apostrophe) with a piece that you want to move."
  end

  def display_player_pick_move(name, piece)
    "#{name}, please pick a cell (eg. 'a3' without apostrophe) that you want to move the #{piece} to. Or press 'x' to choose a new piece to move."
  end

  def display_winner(player)
    "GAME OVER! #{player} is the winner!"
  end

  def display_tie
    "It's a draw."
  end
end
