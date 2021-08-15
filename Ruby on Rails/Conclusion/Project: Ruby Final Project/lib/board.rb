# frozen_string_literal: true

require_relative 'pawn'

# The board that we play on
class Board
  attr_reader :cells

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/AbcSize
  def initialize
    @cells = [
      ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
      [Pawn.new('b', 'a7').symbol, Pawn.new('b', 'b7').symbol, Pawn.new('b', 'c7').symbol, Pawn.new('b', 'd7').symbol,
       Pawn.new('b', 'e7').symbol, Pawn.new('b', 'f7').symbol, Pawn.new('b', 'g7').symbol, Pawn.new('b', 'g7').symbol],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [Pawn.new('w', 'a2').symbol, Pawn.new('w', 'b2').symbol, Pawn.new('w', 'c2').symbol, Pawn.new('w', 'd2').symbol,
       Pawn.new('w', 'e2').symbol, Pawn.new('w', 'f2').symbol, Pawn.new('w', 'g2').symbol, Pawn.new('w', 'g2').symbol],
      ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ]
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/AbcSize

  def get_board_position(notation)
    column_char = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7 }
    input_row = notation[1].to_i
    input_col = column_char.fetch(notation[0].to_sym)
    [8 - input_row, input_col]
  end

  def update_board(player_input, chess_piece)
    symbol = chess_piece.symbol

    # Getting both the current and the next position
    col_curr, row_curr = get_board_position(chess_piece.position)
    col_move, row_move = get_board_position(player_input)

    # Moving the piece to the designated spot
    @cells[col_move][row_move] = symbol

    # Changing the spot the piece was in previosuly to a blank spot
    @cells[col_curr][row_curr] = ' '
  end

  def game_over?
    false
  end

  def valid_move?(move)
    true
  end

  def valid_piece?(player_input)
    col_move, row_move = get_board_position(player_input)
    @cells[col_move][row_move] != ' '
  end

  # rubocop:disable Metrics/AbcSize
  def show
    puts <<-HEREDOC
    8 | #{cells[0][0]} | #{cells[0][1]} | #{cells[0][2]} | #{cells[0][3]} | #{cells[0][4]} | #{cells[0][5]} | #{cells[0][6]} | #{cells[0][7]} |
      _________________________________
    7 | #{cells[1][0]} | #{cells[1][1]} | #{cells[1][2]} | #{cells[1][3]} | #{cells[1][4]} | #{cells[1][5]} | #{cells[1][6]} | #{cells[1][7]} |
      _________________________________
    6 | #{cells[2][0]} | #{cells[2][1]} | #{cells[2][2]} | #{cells[2][3]} | #{cells[2][4]} | #{cells[2][5]} | #{cells[2][6]} | #{cells[2][7]} |
      _________________________________
    5 | #{cells[3][0]} | #{cells[3][1]} | #{cells[3][2]} | #{cells[3][3]} | #{cells[3][4]} | #{cells[3][5]} | #{cells[3][6]} | #{cells[3][7]} |
      _________________________________
    4 | #{cells[4][0]} | #{cells[4][1]} | #{cells[4][2]} | #{cells[4][3]} | #{cells[4][4]} | #{cells[4][5]} | #{cells[4][6]} | #{cells[4][7]} |
      _________________________________
    3 | #{cells[5][0]} | #{cells[5][1]} | #{cells[5][2]} | #{cells[5][3]} | #{cells[5][4]} | #{cells[5][5]} | #{cells[5][6]} | #{cells[5][7]} |
      _________________________________
    2 | #{cells[6][0]} | #{cells[6][1]} | #{cells[6][2]} | #{cells[6][3]} | #{cells[6][4]} | #{cells[6][5]} | #{cells[6][6]} | #{cells[6][7]} |
      _________________________________
    1 | #{cells[7][0]} | #{cells[7][1]} | #{cells[7][2]} | #{cells[7][3]} | #{cells[7][4]} | #{cells[7][5]} | #{cells[7][6]} | #{cells[7][7]} |
      _________________________________
        a   b   c   d   e   f   g   h
    HEREDOC
  end
  # rubocop:enable Metrics/AbcSize
end

# player_input = 'a3'
# chess_piece = Pawn.new('w', 'a2')

# board = Board.new
# board.update_board(player_input, chess_piece)
# board.show
