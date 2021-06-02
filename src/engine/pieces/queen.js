import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;

        for (let i = 1; i < 8; i++) {
            //lateral
            if (currentRow + i < 8) {
                availableMoves.push(Square.at(currentRow + i, currentCol));
            }
            if (currentRow - i >= 0) {
                availableMoves.push(Square.at(currentRow - i, currentCol));
            }
            if (currentCol + i < 8) {
                availableMoves.push(Square.at(currentRow, currentCol + i));
            }
            if (currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow, currentCol - i));
            }

            //Diagonal
            if (currentRow + i < 8 && currentCol + i < 8) {
                availableMoves.push(Square.at(currentRow + i, currentCol + i));
            }
            if (currentRow - i >= 0 && currentCol + i < 8) {
                availableMoves.push(Square.at(currentRow - i, currentCol + i));
            }
            if (currentRow + i < 8 && currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow + i, currentCol - i));
            }
            if (currentRow - i >= 0 && currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow - i, currentCol - i));
            }
        }
        return availableMoves;
    }
}
