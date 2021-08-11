# frozen_string_literal: true

require_relative '../lib/board'

describe Board do
  subject(:board) {described_class.new}

  describe '#update_board' do
    context 'when the board is new' do
      it 'updates cells[index]' do
        player_input = 'a3'
        player_symbol = '♟︎'
        update_board(player_input, player_symbol)
        updated_board = board.cells
        updated_index_forty_one = [
          1, 2, 3, 4, 5, 6, 7, 8,
          9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32,
          33, 34, 35, 36, 37, 38, 39, 40,
          '♟︎', 42, 43, 44, 45, 46, 47, 48,
          49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 59, 60, 61, 62, 63, 64
        ]

        expect(updated_board).to eq(updated_index_forty_one)
      end
    end
  end
end