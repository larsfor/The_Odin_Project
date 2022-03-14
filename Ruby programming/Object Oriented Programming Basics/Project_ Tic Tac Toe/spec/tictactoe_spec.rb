# frozen_string_literal: true

# rubocop:disable Metrics/BlockLength

require_relative '../lib/tictactoe'

describe Play do
  describe '"valid_move' do
    context 'when you make a valid move' do
      subject(:game) { described_class.new(player, player, board) }
      let(:board) { Board.new }
      let(:player) { Player.new('X', 1) }

      it "doesn't show an error message" do
        valid_input = 1
        error_message = "Invalid move, try again! \n"
        expect(game).to_not receive(:puts).with(error_message)
        game.valid_move(valid_input, player)
      end
    end

    # context 'when you make an invalid move' do
    #   subject(:game) { described_class.new(player, player, board) }
    #   let(:board) { Board.new }
    #   let(:player) { Player.new('X', 1) }

    #   before do
    #     # board.instance_variable_set(:@cells, ['X', 2, 3, 4, 5, 6, 7, 8, 9])
    #     game.instance_variable_set(:@choices, [1, 2])
    #   end

    #   it 'returns an error message' do
    #     invalid_input = 2
    #     error_message = "Invalid move, try again! \n"
    #     expect(game).to receive(:puts).with(error_message)
    #     game.valid_move(invalid_input, player)
    #   end
    # end
  end

  describe '#game_won?' do
    subject(:game) { described_class.new(player, player, board) }
    let(:board) { Board.new }
    let(:player) { instance_double(Player) }

    context 'when the top row is all Xs' do
      before do
        board.instance_variable_set(:@cells, ['X', 'X', 'X', 4, 5, 'O', 'O', 8, 'O'])
      end

      it 'is game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(true)
      end
    end

    context 'when the left column is all Xs' do
      before do
        board.instance_variable_set(:@cells, ['X', 'X', 'O', 'X', 5, 'O', 'X', 8, 'O'])
      end

      it 'is game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(true)
      end
    end

    context 'when top left to bottom right diagonal is all Xs' do
      before do
        board.instance_variable_set(:@cells, ['X', 2, 'O', 4, 'X', 'O', 'O', 8, 'X'])
      end

      it 'is game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(true)
      end
    end

    context 'when none of the rows have been filled fully yet' do
      subject(:game) { described_class.new(player, player, board) }
      let(:board) { Board.new }
      let(:player) { instance_double(Player) }

      before do
        board.instance_variable_set(:@cells, ['X', 'X', 3, 4, 5, 'O', 'O', 8, 'O'])
      end

      it 'is not game over' do
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@game_won)
        expect(game_status).to eq(false)
      end
    end

    context 'when the game ends in a draw' do
      subject(:game) { described_class.new(player, player, board) }
      let(:board) { Board.new }
      let(:player) { instance_double(Player) }

      before do
        game.instance_variable_set(:@moves, 9)
      end

      it 'ends it a draw, and shows that on the screen' do
        draw_message = 'The game ended in a draw!'
        expect(game).to receive(:puts).with(draw_message)
        game.game_won?(board, player)
        game_status = game.instance_variable_get(:@draw)
        expect(game_status).to be(true)
      end
    end
  end
end

# rubocop:enable Metrics/BlockLength
