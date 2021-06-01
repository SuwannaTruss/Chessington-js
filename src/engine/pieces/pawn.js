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
            availableMoves.push(Square.at(location.row + 1, location.col));

            // only for the first move 
            if (location.row === 1) {
                availableMoves.push(Square.at(location.row + 2, location.col));
            }

        } else {
            availableMoves.push(Square.at(location.row - 1, location.col));

            // only for the first move 
            if (location.row === 6) {
                availableMoves.push(Square.at(location.row - 2, location.col));
            }
        }       
    return availableMoves;
    }
}
