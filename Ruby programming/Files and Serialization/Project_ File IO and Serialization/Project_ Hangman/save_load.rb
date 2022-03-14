# frozen_string_literal: true

require 'yaml'
require 'time'

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
                word: hash[:word],
                guessed_letters: Array.new(hash[:guessed_letters]),
                turn: hash[:turn]
              })
  end

  def from_yaml(filename)
    yaml_file = File.open("savefiles/#{filename}", 'r', &:read)
    data = YAML.safe_load(yaml_file) # Can't load symbols with 'safe_load' method
    [data[:word], data[:turn], data[:guessed_letters]]
  end
end
