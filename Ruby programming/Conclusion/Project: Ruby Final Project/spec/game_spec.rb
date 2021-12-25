# frozen_string_literal: true

require_relative '../lib/board'
require_relative '../lib/pawn'
require_relative '../lib/display'

describe Game do
  subject(:game) { described_class.new }

  context 'after not chosing a piece to move' do
    before do
      first_pick = 'a3'
      second_pick = 'a2'
      third_pick = 'a3'
      player = Player.new('white', 'w')
      allow(game(player)).to receive(:gets).and_return(first_pick, second_pick, third_pick)
    end

    it 'should give a warning and restart the picking process' do
      error = 'Sorry, that is an invalid input. Please, try again.'
      expect(game).to receive(error).once
    end
  end
end
