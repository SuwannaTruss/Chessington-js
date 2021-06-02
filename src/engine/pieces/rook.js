import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;
        const availableMoves = [];

        for (let i = 1; i < 8; i ++) {
            if (currentRow + i < 8) {
                availableMoves.push(Square.at(currentRow + i, currentCol))
            }
            if (currentRow - i >= 0) {
                availableMoves.push(Square.at(currentRow - i, currentCol))
            }
            if (currentCol + i < 8) {
                availableMoves.push(Square.at(currentRow, currentCol + i))
            }
            if (currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow, currentCol - i))
            }
        }
        return availableMoves;
    }
}
