# frozen_string_literal: true

require 'yaml'
require 'time'
# require_relative 'board'

# A module to save the game for future plays
module SaveLoad
  def save_file(hash)
    save_info = to_yaml(hash)
    random_name = (0..4).map { rand(65..90).chr }.join
    Dir.mkdir('savefiles') unless Dir.exist?('savefiles')
    File.open("savefiles/save_file_#{random_name} #{Time.now.asctime}.txt", 'w') do |save_file|
      save_file.puts save_info
    end
  end

  def load_files
    Dir.entries('savefiles')
  end

  def list_save_files
    Dir.entries('savefiles').each { |save| puts save if save.length > 3 }
    'End of files'
  end

  def to_yaml(hash)
    YAML.dump({

                player1: hash[:player1],
                player2: hash[:player2],
                board: Array.new(hash[:board]),
                current_player: hash[:current_player]
              })
  end

  def from_yaml(filename)
    yaml_file = File.open("savefiles/#{filename}", 'r', &:read)
    data = begin
      YAML.safe_load(yaml_file, [Symbol, Player])
    rescue StandardError
      YAML.load(yaml_file) # Can't load symbols with 'safe_load' method
    end

    [data[:player1], data[:player2], data[:board], data[:current_player]]
  end
end
