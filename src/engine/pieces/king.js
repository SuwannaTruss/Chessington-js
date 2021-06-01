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

        // for (let r = -1; r <=1; r++) {
        //     for (let c = -1; c <= 1; c++) {
        //         let currentSquare = new Square.at(currentRow + r, currentCol + c)
        //         console.log(currentSquare)
        //         console.log(location)
        //         console.log(currentSquare !== location)
        //         if (currentSquare.row !== location.row && currentSquare.col !== location.col) {
        //         // if (c !== 0 && r !== 0) {
        //             availableMoves.push(currentSquare);

        //             // availableMoves.push(Square.at(currentRow + r, currentCol + c));
        //         // }
        //         }
        //     }
        // }

        return availableMoves;
    }
}
