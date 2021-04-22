# frozen_string_literal: true

# Almost all of the code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

# To check winning conditions and to give feedback to the Gamebreaker
class Array
  def all_correct?
    all? { |element| element == 'X' }
  end
end
