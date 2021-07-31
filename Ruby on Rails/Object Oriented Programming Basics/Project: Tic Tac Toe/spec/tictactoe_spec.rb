# frozen_string_literal: true

# rubocop:disable Metrics/BlockLength

require_relative '../lib/tictactoe'

describe Play do
  describe '#game_won?' do
    context 'when the top row is all Xs' do
      subject(:game) { described_class.new(player, player, board) }
      let(:board) { Board.new }
      let(:player) { Player.new('X', 1) }

      before do
        board.instance_variable_set(:@cells, ['X', 'X', 'X', 4, 5, 'O', 'O', 8, 'O'])
      end

      it 'is game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(true)
      end
    end

    context 'when none of the rows have been filled yet' do
      subject(:game) { described_class.new(player, player, board) }
      let(:board) { Board.new }
      let(:player) { Player.new('X', 1) }

      before do
        board.instance_variable_set(:@cells, ['X', 'X', 3, 4, 5, 'O', 'O', 8, 'O'])
      end

      it 'is not game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(false)
      end
    end
  end
end
