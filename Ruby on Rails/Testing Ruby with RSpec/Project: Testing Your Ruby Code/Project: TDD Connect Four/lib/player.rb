# frozen_string_literal: true

def create_player(number, duplicate_symbol = nil)
  puts display_name.prompt(number)
  name = gets.chomp
  symbol = symbol_input(duplicate_symbol)
  Player.new(name, symbol)
end

def game_set_up
  puts display_intro
  @first_player = create_player('⚪')
  @second_player = create_player('⚫', first_player.symbol)
end
