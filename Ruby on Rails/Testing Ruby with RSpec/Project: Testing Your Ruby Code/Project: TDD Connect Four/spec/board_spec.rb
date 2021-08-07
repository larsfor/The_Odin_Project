# frozen_string_literal: true

require_relative '../lib/board'

# rubocop:disable Metrics/BlockLength
describe Board do
  subject(:board) { described_class.new }

  describe '#update_board' do
    context 'when the board is new' do
      it 'updates cells[index]' do
        player_input = 36
        player_symbol = '⚪'
        board.update_board(player_input, player_symbol)
        updated_board = board.cells
        updated_index_thirtysix = [1, 2, 3, 4, 5, 6, 7,
                                   8, 9, 10, 11, 12, 13, 14,
                                   15, 16, 17, 18, 19, 20, 21,
                                   22, 23, 24, 25, 26, 27, 28,
                                   29, 30, 31, 32, 33, 34, 35,
                                   '⚪', 37, 38, 39, 40, 41, 42]
        expect(updated_board).to eq(updated_index_thirtysix)
      end
    end
    context 'when the board has been used' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end
      it 'updates cells[index]' do
        player_input = 37
        player_symbol = '⚫'
        board.update_board(player_input, player_symbol)
        updated_board = board.cells
        updated_index_thirtyseven = [1, 2, 3, 4, 5, 6, 7,
                                     8, 9, 10, 11, 12, 13, 14,
                                     15, 16, 17, 18, 19, 20, 21,
                                     22, 23, 24, 25, 26, 27, 28,
                                     29, 30, 31, 32, 33, 34, 35,
                                     '⚪', '⚫', 38, 39, 40, 41, 42]
        expect(updated_board).to eq(updated_index_thirtyseven)
      end
    end
  end

  describe '#valid_move?' do
    context 'when the board is new' do
      it 'is a valid move' do
        player_input = 36
        valid_move = board.valid_move?(player_input)
        expect(valid_move).to eq(true)
      end
    end

    context 'when the choosing a used space' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end

      it 'is not a valid move' do
        player_input = 36
        valid_move = board.valid_move?(player_input)
        expect(valid_move).to eq(false)
      end
    end

    context 'when the choosing an open space' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end

      it 'is not a move' do
        player_input = 37
        valid_move = board.valid_move?(player_input)
        expect(valid_move).to eq(true)
      end
    end
  end

  describe '#full?' do
    context 'when the board is new' do
      it 'is not full' do
        expect(board).to_not be_full
      end
    end

    context 'when the board is filled partly' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end
      it 'is not full' do
        expect(board).to_not be_full
      end
    end

    context 'when the entire board has been filled' do
      before do
        board.instance_variable_set(:@cells, ['⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪',
                                              '⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪',
                                              '⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪',
                                              '⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪',
                                              '⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪',
                                              '⚪', '⚫', '⚪', '⚫', '⚪', '⚫', '⚪'])
      end
      it 'is full' do
        expect(board).to be_full
      end
    end
  end

  describe '#game_over?' do
    context 'when the board is new' do
      it 'is not game over' do
        expect(board).to_not be_game_over
      end
    end

    context 'when the game is partly filled' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end
      it 'is not game over' do
        expect(board).to_not be_game_over
      end
    end

    context 'when there is four connected horisontally' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              '⚪', '⚪', '⚪', '⚪', 40, 41, 42])
      end
      it 'is game over' do
        expect(board).to be_game_over
      end
    end

    context 'when there is four connected vertically' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              '⚪', 16, 17, 18, 19, 20, 21,
                                              '⚪', 23, 24, 25, 26, 27, 28,
                                              '⚪', 30, 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end
      it 'is game over' do
        expect(board).to be_game_over
      end
    end

    context 'when there is four connected diagonally right to left' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, '⚪', 19, 20, 21,
                                              22, 23, '⚪', 25, 26, 27, 28,
                                              29, '⚪', 31, 32, 33, 34, 35,
                                              '⚪', 37, 38, 39, 40, 41, 42])
      end
      it 'is game over' do
        expect(board).to be_game_over
      end
    end

    context 'when there is four connected diagonally left to right' do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, '⚪', 19, 20, 21,
                                              22, 23, 24, 25, '⚪', 27, 28,
                                              29, 30, 31, 32, 33, '⚪', 35,
                                              36, 37, 38, 39, 40, 41, '⚪'])
      end
      it 'is game over' do
        expect(board).to be_game_over
      end
    end

    context "when there is four connected diagonally, but it's from a high index spilling into a low index" do
      before do
        board.instance_variable_set(:@cells, [1, 2, 3, 4, 5, 6, 7,
                                              '⚪', 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, '⚪', 27, 28,
                                              29, 30, 31, 32, 33, '⚪', 35,
                                              36, 37, 38, 39, 40, 41, '⚪'])
      end
      it 'is not game over' do
        expect(board).to_not be_game_over
      end
    end

    context "when there is four connected diagonally, but it's from a high index spilling into a low index" do
      before do
        board.instance_variable_set(:@cells, [1, '⚪', 3, 4, 5, 6, 7,
                                              '⚪', 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, '⚪', 33, 34, 35,
                                              36, 37, '⚪', 39, 40, 41, 42])
      end
      it 'is not game over' do
        expect(board).to_not be_game_over
      end
    end

    context "when there is four connected horizontally, but it's from a high index spilling into a low index" do
      before do
        board.instance_variable_set(:@cells, ['⚪', '⚪', 3, 4, 5, 6, 7,
                                              8, 9, 10, 11, 12, 13, 14,
                                              15, 16, 17, 18, 19, 20, 21,
                                              22, 23, 24, 25, 26, 27, 28,
                                              29, 30, 31, 32, 33, 34, 35,
                                              36, 37, 38, 39, 40, '⚪', '⚪'])
      end
      it 'is not game over' do
        expect(board).to_not be_game_over
      end
    end
  end
end
# rubocop:enable Metrics/BlockLength
