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
        let availableMoves = [];

        let stopRight = false;
        let stopLeft = false;
        let stopUp = false;
        let stopDown = false;
        let nextMove;

        for (let i = 1; i < 8; i++) {
            if (currentRow + i < 8 && !stopUp) {
                nextMove = Square.at(currentRow + i, currentCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    stopUp = true;
                }
            }
            if (currentRow - i >= 0 && !stopDown) {
                nextMove = Square.at(currentRow - i, currentCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    stopDown = true;
                }
            }
            if (currentCol + i < 8 && !stopRight) {
                nextMove = Square.at(currentRow, currentCol + i);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    stopRight = true;
                }
            }
            if (currentCol - i >= 0 && !stopLeft) {
                nextMove = Square.at(currentRow, currentCol - i);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    stopLeft = true;
                }
            }
        }

        // const filterAvailableMoves = availableMoves.filter(square => !board.getPiece(square));
        // availableMoves.forEach(square => console.log(!!board.getPiece(square)));

        // console.log({filterAvailableMoves});
        
        return availableMoves;
    }
}
