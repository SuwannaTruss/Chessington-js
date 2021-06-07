import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const availableMoves = [];
        if (this.player === Player.WHITE) {
            if (location.row === 7) return availableMoves;
            const whiteNextMove = Square.at(location.row + 1, location.col);
            if (!board.getPiece(whiteNextMove)) {
                availableMoves.push(whiteNextMove);
                const whiteNextMove2 = Square.at(location.row + 2, location.col);
                if (location.row === 1 && !board.getPiece(whiteNextMove)) {
                    availableMoves.push(whiteNextMove2);
                }
            }
        } else {
            if (location.row === 0) return availableMoves;
            const blackNextMove = Square.at(location.row - 1, location.col);
            if (!board.getPiece(blackNextMove)) {
                availableMoves.push(blackNextMove);
                const blackNextMove2 = Square.at(location.row - 2, location.col); 
                if (location.row === 6 && !board.getPiece(blackNextMove2)) {
                    availableMoves.push(blackNextMove2);
                }
            }
        }
        return availableMoves;
    }
}
