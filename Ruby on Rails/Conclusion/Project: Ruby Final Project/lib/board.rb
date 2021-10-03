# frozen_string_literal: true

require_relative 'pawn'

# The board that we play on
class Board
  attr_reader :cells

  # rubocop:disable Metrics/MethodLength
  def initialize
    @cells = [
      ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
      [Pawn.new('b', 'a7'), Pawn.new('b', 'b7'), Pawn.new('b', 'c7'), Pawn.new('b', 'd7'),
       Pawn.new('b', 'e7'), Pawn.new('b', 'f7'), Pawn.new('b', 'g7'), Pawn.new('b', 'g7')],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [Pawn.new('w', 'a2'), Pawn.new('w', 'b2'), Pawn.new('w', 'c2'), Pawn.new('w', 'd2'),
       Pawn.new('w', 'e2'), Pawn.new('w', 'f2'), Pawn.new('w', 'g2'), Pawn.new('w', 'g2')],
      ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ]

    # white_king = King.new('w', 'e8')
    # black_king = King.new('b', 'e1')
  end
  # rubocop:enable Metrics/MethodLength

  def get_piece(position)
    row, col = get_board_position(position)
    @cells[row][col]
  end

  def get_board_position(notation)
    column_char = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7 }
    input_row = notation[1].to_i
    input_col = column_char.fetch(notation[0].to_sym)
    [8 - input_row, input_col]
  end

  def update_board(player_input, chess_piece)
    # Getting both the current and the next position
    row_curr, col_curr = get_board_position(chess_piece.position)
    row_move, col_move = get_board_position(player_input)

    # Moving the piece to the designated spot
    @cells[row_move][col_move] = chess_piece

    # Changing the spot the piece was in previosuly to a blank spot
    @cells[row_curr][col_curr] = ' '

    # Update the piece's position
    chess_piece.position = player_input
  end

  def game_over?
    false
  end

  def valid_move?(_piece, _move)
    # move_possible?(piece, move)
    # same_color?(piece, move)
    true
  end

  def move_possible?(piece, _move)
    # move = get_board_position(move)
    position = get_board_position(piece.position)
    piece.moves.each do |moveset|
      p "#{8 - position[0] + moveset[0]}, #{position[1] + moveset[1]}"
    end
  end

  def same_color?(_piece, move)
    move = get_board_position(move)
    p @cells[move[0]][move[1]]
  end

  def valid_piece?(player_input)
    col_move, row_move = get_board_position(player_input)
    @cells[col_move][row_move] != ' '
  end

  # rubocop:disable Metrics/AbcSize
  def show
    board = dummy_board

    puts <<-HEREDOC
    8 | #{board[0][0]} | #{board[0][1]} | #{board[0][2]} | #{board[0][3]} | #{board[0][4]} | #{board[0][5]} | #{board[0][6]} | #{board[0][7]} |
      _________________________________
    7 | #{board[1][0]} | #{board[1][1]} | #{board[1][2]} | #{board[1][3]} | #{board[1][4]} | #{board[1][5]} | #{board[1][6]} | #{board[1][7]} |
      _________________________________
    6 | #{board[2][0]} | #{board[2][1]} | #{board[2][2]} | #{board[2][3]} | #{board[2][4]} | #{board[2][5]} | #{board[2][6]} | #{board[2][7]} |
      _________________________________
    5 | #{board[3][0]} | #{board[3][1]} | #{board[3][2]} | #{board[3][3]} | #{board[3][4]} | #{board[3][5]} | #{board[3][6]} | #{board[3][7]} |
      _________________________________
    4 | #{board[4][0]} | #{board[4][1]} | #{board[4][2]} | #{board[4][3]} | #{board[4][4]} | #{board[4][5]} | #{board[4][6]} | #{board[4][7]} |
      _________________________________
    3 | #{board[5][0]} | #{board[5][1]} | #{board[5][2]} | #{board[5][3]} | #{board[5][4]} | #{board[5][5]} | #{board[5][6]} | #{board[5][7]} |
      _________________________________
    2 | #{board[6][0]} | #{board[6][1]} | #{board[6][2]} | #{board[6][3]} | #{board[6][4]} | #{board[6][5]} | #{board[6][6]} | #{board[6][7]} |
      _________________________________
    1 | #{board[7][0]} | #{board[7][1]} | #{board[7][2]} | #{board[7][3]} | #{board[7][4]} | #{board[7][5]} | #{board[7][6]} | #{board[7][7]} |
      _________________________________
        a   b   c   d   e   f   g   h
    HEREDOC
  end
  # rubocop:enable Metrics/AbcSize

  def dummy_board
    board = Array.new(8) { Array.new(8) }
    cells.each_with_index do |row, i|
      row.each_with_index do |piece, j|
        board[i][j] = get_symbol_to_dummy_board(piece)
      end
    end
    board
  end

  def get_symbol_to_dummy_board(piece)
    return piece.chomp if piece.instance_of?(String)
    return piece.symbol unless piece.instance_of?(String)
  end
end

# board = Board.new
