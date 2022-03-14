# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

require_relative './game'
require_relative './display'
require_relative './new_game'
require_relative './text_content'
require_relative './text_instructions'

Game.new.play
