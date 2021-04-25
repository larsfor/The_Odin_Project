# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

require './game_logic'
require './display'
require './text_content'

# Class for the new_game option
class NewGame
  attr_reader :word, :guess, :max_turns, :letter
  attr_accessor :guessed_letters

  include Display
  include TextContent
  include GameLogic

  def initialize
    @max_turns = 20
    @word = choose_random_word
    @guessed_letters = []
  end

  def choose_random_word
    word = random_word
    return word if word.length > 4

    choose_random_word
  end

  def random_word
    File.readlines('5desk.txt').sample
  end

  def start
    puts turn_message('start')
    puts word
    show_word_covered(word, guessed_letters)
    choose_letter
    game_over(word, guessed_letters)
  end

  def choose_letter
    turn = 1
    while turn <= max_turns
      puts turn_messages(turn)

      @letter = player_input
      guessed_letters.push(letter)
      turn += 1

      break if letter == 'quit'

      show_word_covered(word, guessed_letters)

      break if solved?(word, guessed_letters)
    end
  end

  def turn_messages(turn)
    puts turn_message('choose_letter', turn, max_turns)
    puts warning_message('last_turn') if turn == max_turns
  end

  def player_input
    letter = gets.chomp

    if guessed_letters.include?(letter)
      puts warning_message('already_guessed')
      player_input
    end

    return letter if letter.match(/^[a-z]$/)
    return letter if letter.match(/quit/)

    puts warning_message('turn_error')
    player_input
  end

  def game_over(word, guessed_letters)
    if solved?(word, guessed_letters)
      puts game_message('won')
    else
      puts warning_message('game_over')
      puts game_message('display_word', word)
    end
    repeat_game
  end
end
