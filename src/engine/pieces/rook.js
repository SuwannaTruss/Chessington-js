import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const row = location.row;
        const col = location.col;
        const availableMoves = [];
        
        // horizontal rows
        for (let r = 0; r < 8; r++) {
            if (row !== r) {
                availableMoves.push(Square.at(r, col));
            }
        }
        // vertical collumns
        for (let c = 0; c < 8; c++) {
            if (col !== c) {
                availableMoves.push(Square.at(row, c));
            }
        }
        return availableMoves;
    }
}
