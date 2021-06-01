import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;
        const availableMoves = [];

        availableMoves.push(Square.at(currentRow + 2, currentCol + 1));
        availableMoves.push(Square.at(currentRow + 2, currentCol - 1));
        availableMoves.push(Square.at(currentRow - 2, currentCol + 1));
        availableMoves.push(Square.at(currentRow - 2, currentCol - 1));
        availableMoves.push(Square.at(currentRow + 1, currentCol + 2));
        availableMoves.push(Square.at(currentRow - 1, currentCol + 2));
        availableMoves.push(Square.at(currentRow + 1, currentCol - 2));
        availableMoves.push(Square.at(currentRow - 1, currentCol - 2));

        return availableMoves;
    }
}
