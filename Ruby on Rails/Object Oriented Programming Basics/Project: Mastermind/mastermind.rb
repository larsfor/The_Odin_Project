# frozen_string_literal: true

# The initial code used here is copied from this blog: https://codequizzes.wordpress.com/2013/10/25/creating-a-tic-tac-toe-game-with-ruby/
# and the corresponding GitHub: https://github.com/MrPowers/tic_tac_toe.
# The logic behind the game is written by me.

require_relative 'mastermind/version'

# The module itself
module TicTacToe
end

require_relative './mastermind/core_extensions'
lib_path = __dir__
Dir["#{lib_path}/mastermind/**/*.rb"].sort.each { |file| require file }

computer = Mastermind::Player.new({ role: 'GM', name: 'CPU' })
lars = Mastermind::Player.new({ role: 'GB', name: 'Lars' })

Mastermind::Game.new(computer, lars).play
