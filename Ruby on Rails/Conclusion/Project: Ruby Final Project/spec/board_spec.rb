# frozen_string_literal: true

require_relative '../lib/board'
require_relative '../lib/pawn'
require_relative '../lib/game'
require_relative '../lib/display'

# rubocop:disable Metrics/BlockLength

describe Board do
  subject(:board) { described_class.new }

  describe '#update_board' do
    context 'when the board is new' do
      it 'updates cells[index]' do
        chess_piece = Pawn.new('w', 'a2')
        player_input = 'a3'
        board.update_board(player_input, chess_piece)
        updated_board = board.dummy_board
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

    context 'when white moves for the second time' do
      before do
        white_piece = Pawn.new('w', 'a2')
        black_piece = Pawn.new('b', 'a7')
        board.update_board('a3', white_piece)
        board.update_board('a6', black_piece)
      end

      it "should remove the previous piece's icon" do
        chess_piece = board.get_piece('a3')
        player_input = 'a4'
        board.update_board(player_input, chess_piece)
        updated_board = board.dummy_board
        updated_index_a_four = [
          ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
          [' ', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
          ['♟︎', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          ['♙', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
          ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
        ]
        expect(updated_board).to eq(updated_index_a_four)
      end
    end
  end

  describe '#valid_move?' do
    context 'the player picks an available move' do
      it 'should return true' do
        piece = board.get_piece('a2')
        move = 'a3'
        move_possible = board.move_possible?(piece, move)

        expect(move_possible).to eq(true)
      end
    end

    context 'the player attacks a piece with opposite color' do
      before do
        white_pawn = Pawn.new('w', 'a4')
        black_pawn = Pawn.new('b', 'b5')
        board.instance_variable_set(:@cells, [
                                      ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
                                      ['♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
                                      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                                      [' ', black_pawn, ' ', ' ', ' ', ' ', ' ', ' '],
                                      [white_pawn, ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                                      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                                      [' ', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
                                      ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
                                    ])
      end

      it 'should return true' do
        piece = board.get_piece('a4')
        move = 'b5'
        opposite_color = board.opposite_color?(piece, move)

        expect(opposite_color).to eq(true)
      end
    end

    #   context 'when white moves for the second time' do
    #     before do
    #       white_piece = Pawn.new('w', 'a2')
    #       black_piece = Pawn.new('b', 'a7')
    #       board.update_board('a3', white_piece)
    #       board.update_board('a6', black_piece)
    #     end

    #     it "should remove the previous piece's icon" do
    #       chess_piece = board.get_piece('a3')
    #       player_input = 'a4'
    #       board.update_board(player_input, chess_piece)
    #       updated_board = board.dummy_board
    #       updated_index_a_four = [
    #         ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    #         [' ', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎', '♟︎'],
    #         ['♟︎', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    #         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    #         ['♙', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    #         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    #         [' ', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    #         ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    #       ]
    #       expect(updated_board).to eq(updated_index_a_four)
    #     end
    #   end
  end

  # rubocop:enable Metrics/BlockLength
end
