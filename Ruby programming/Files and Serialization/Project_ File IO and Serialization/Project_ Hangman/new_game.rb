# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

require './game_logic'
require './display'
require './text_content'
require './save_load'

# Class for the new_game option
class NewGame
  attr_reader :word, :guess, :max_turns, :letter
  attr_accessor :guessed_letters, :save_game_info

  include Display
  include TextContent
  include GameLogic
  include SaveLoad

  def initialize
    @max_turns = 20
    @word = choose_random_word
    @guessed_letters = []
    @save_game_info = {
      word: '',
      guessed_letters: [],
      turn: 0
    }
  end

  def choose_random_word
    word = random_word
    return word if word.length > 4

    choose_random_word
  end

  def random_word
    File.readlines('5desk.txt').sample
  end

  def start(word = '', turn = 1, guessed_letters = [])
    if turn > 1
      puts turn_message('loaded')
      play_previous_game(word, turn, guessed_letters)
    else
      puts turn_message('start')
      play_new_game(@word)
    end
    save(save_game_info) if letter == 'save'
    game_over(word, guessed_letters) if letter == 'quit'
  end

  def play_previous_game(word, turn, guessed_letters)
    @guessed_letters = guessed_letters
    show_word_covered(word, @guessed_letters)
    choose_letter(word, turn)
  end

  def play_new_game(word)
    puts word
    show_word_covered(word, guessed_letters)
    choose_letter(word)
  end

  def choose_letter(word = '', turn = 1)
    while turn <= max_turns
      puts turn_messages(turn)
      letter = player_input
      @guessed_letters.push(letter)
      update_save_game_info(word, letter, turn)
      turn += 1

      if %w[quit save].include?(letter)
        save(save_game_info) if letter == 'save'
        game_over(word, guessed_letters) if letter == 'quit'
        break
      end

      show_word_covered(word, @guessed_letters)

      if solved?(word, @guessed_letters)
        game_over(word, guessed_letters)
        break
      end
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

    return letter if letter.match(/^[a-z]$/) || letter.match(/quit/) || letter.match(/save/)

    puts warning_message('turn_error')
    player_input
  end

  def game_over(word, guessed_letters)
    if solved?(word, guessed_letters)
      puts game_message('won')
    else
      puts warning_message('game_over')
      puts game_message('display_word', @word)
    end
    repeat_game
  end

  def save(save_game_info)
    puts save_game_info
    save_file(save_game_info)
  end

  def update_save_game_info(word, letter, turn)
    save_game_info[:word] = word.chomp
    save_game_info[:guessed_letters].push(letter) if letter != 'save'
    save_game_info[:turn] = turn
  end
end
