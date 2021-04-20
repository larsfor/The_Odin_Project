# frozen_string_literal: true

require_relative 'mastermind/version'

# The module itself
module TicTacToe
end

require_relative './mastermind/core_extensions'
lib_path = __dir__
Dir["#{lib_path}/mastermind/**/*.rb"].sort.each { |file| require file }

computer = Mastermind::Player.new({ role: 'GM', name: 'test' })
lars = Mastermind::Player.new({ role: 'GB', name: 'Lars' })

Mastermind::Game.new(computer, lars).play
