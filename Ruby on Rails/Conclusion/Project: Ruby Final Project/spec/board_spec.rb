# frozen_string_literal: true

require_relative '../lib/board'
require_relative '../lib/pawn'

describe Board do
  subject(:board) { described_class.new }

  describe '#update_board' do
    context 'when the board is new' do
      it 'updates cells[index]' do
        chess_piece = Pawn.new('w', 'a2')
        player_input = 'a3'
        board.update_board(player_input, chess_piece)
        updated_board = board.cells
        updated_index_a_three = [
          ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
          ['♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          ['♙', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
          ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
        ]

        expect(updated_board).to eq(updated_index_a_three)
      end
    end
  end
end
