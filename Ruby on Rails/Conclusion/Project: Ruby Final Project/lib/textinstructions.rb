# frozen_string_literal: true

# This file is inspired by the solution for the "Project: Mastermind" presented by Rachel Moser
# at https://github.com/rlmoser99/ruby_Mastermind.

# Module only for presenting the instrucions of the game
module TextInstructions
  def instructions
    <<~HEREDOC
      #{formatting('underline', 'How to play Chess:')}
      This is a 2 player game between two persons in a game of chess.
      You start with 16 pieces - 8 pawns, 2 rooks, 2 knights, 2 bishops, 1 queen and 1 king.
      The same with your adveraery. You pick your name and a piece-color (black or white)-
      The first to lose their king loses.
      #{formatting('underline', 'Progress:')}
      White starts by picking a piece and a spot in which to place the picked piece.
      Next, it's the black's turn, to do the excact same thing.#{' '}
      #{formatting('underline', 'Rules:')}
      Standard rules. You lose when your king is removed from the board.
      #{formatting('underline', "It's time to play!")}
      Would you like to be start a new game or load a previously saved game?
      Press '1' to start a new game
      Press '2' to load a previously saved game
    HEREDOC
  end
end
