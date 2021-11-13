# frozen_string_literal: true

require_relative 'pawn'
require_relative 'display'

# The board that we play on
class Board
  include Display

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

    # Changing the spot the piece was in previosuly to a blank spot (removeig the piece)
    @cells[row_curr][col_curr] = ' '

    # Update the piece's position
    chess_piece.position = player_input
  end

  def valid_move?(piece, move)
    return false unless move.match?(/[a-zA-Z][0-8]/) && (move.length == 2)
    return false unless move_possible?(piece, move)
    return false unless opposite_color?(piece, move)
    return false if pawn_illegal_diagonally?(piece, move) && piece.name == 'pawn'
    return false if pawn_backwards?(piece, move) && piece.name == 'pawn'

    true
  end

  def pawn_backwards?(piece, move)
    current_position = get_board_position(piece.position)
    future_position = get_board_position(move)

    return current_position.first < future_position.first if piece.color == 'w'
    return current_position.first > future_position.first if piece.color == 'b'

    false
  end

  def pawn_illegal_diagonally?(piece, move)
    current_position = get_board_position(piece.position)
    future_position = get_board_position(move)

    # Change the move modifier based on the color of the pawn
    moves = piece.color == 'w' ? [[-1, 1], [-1, -1]] : [[1, 1], [1, -1]]

    # Getting the possible diagonal moves for the pawn
    diagonally_moves = moves.map { |x, y| [current_position.first + x, current_position.last + y] }

    # If the future move isn't a diagonally one, just return false
    return false unless diagonally_moves.include?(future_position)

    # If the spot is empty, the piece can't move to that location
    return true if get_piece(move) == ' '

    false
  end

  def game_over?
    false
  end

  def move_possible?(piece, move)
    move_pos = get_board_position(move)
    piece_pos = get_board_position(piece.position)
    piece.moves.each.any? do |place|
      row = piece_pos[0] + place[0]
      column = piece_pos[1] + place[1]
      move_pos == [row, column]
    end
  end

  def opposite_color?(piece, move)
    position = get_board_position(move)
    board_cell = @cells[position[0]][position[1]]
    cell_color = board_cell == ' ' ? board_cell : get_piece(move).color
    piece.color != cell_color
  end

  def valid_piece?(player_input)
    return false unless player_input.match?(/[a-zA-Z][0-8]/) && (player_input.length == 2)

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
