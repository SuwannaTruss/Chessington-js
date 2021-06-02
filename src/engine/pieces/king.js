import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;
        const availableMoves = [];

        availableMoves.push(Square.at(currentRow + 1, currentCol));
        availableMoves.push(Square.at(currentRow + 1, currentCol + 1));
        availableMoves.push(Square.at(currentRow + 1, currentCol - 1));
        availableMoves.push(Square.at(currentRow, currentCol + 1));
        availableMoves.push(Square.at(currentRow, currentCol - 1));
        availableMoves.push(Square.at(currentRow - 1, currentCol - 1));
        availableMoves.push(Square.at(currentRow - 1, currentCol));
        availableMoves.push(Square.at(currentRow - 1, currentCol + 1));
        
        return availableMoves;
    }
}
