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

            const whiteNextMove = Square.at(location.row + 1, location.col);

            if (typeof (board.getPiece(whiteNextMove)) !== "object") {
                availableMoves.push(whiteNextMove);
                
                // only for the first move 
                const whiteNextMove2 = Square.at(location.row + 2, location.col);
                if (location.row === 1 && typeof(board.getPiece(whiteNextMove2)) !== "object") {
                    availableMoves.push(whiteNextMove2);
                }
            }

        } else {
            // Player.BLACK
            const blackNextMove = Square.at(location.row - 1, location.col);
            if (typeof (board.getPiece(blackNextMove)) !== "object") {
                availableMoves.push(blackNextMove);

                // only for the first move
                const blackNextMove2 = Square.at(location.row - 2, location.col); 
                if (location.row === 6 && typeof(board.getPiece(blackNextMove2)) !== "object") {
                    availableMoves.push(blackNextMove2);
                }
            }
        }
        return availableMoves;
    }
}
