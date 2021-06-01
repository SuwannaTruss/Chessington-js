import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this)
        const currentRow = location.row;
        const currentCol = location.col;
        const availableMoves = [];

        // Forwards diagonal
        const min = Math.min(currentRow, currentCol);
        const minForwardDiagonalRow = currentRow - min; 
        const minForwardDiagonalCol = currentCol - min; 
        let row = minForwardDiagonalRow;
        let col = minForwardDiagonalCol;
        
        while (row < 7 || col < 7) {
            if (row !== currentRow && col !== currentCol) {
                availableMoves.push(Square.at(row, col))
            }
            row++;
            col++;
        }

        //Backwards diagonal
        row = currentRow;
        col = currentCol;        
        while (row >= 0 && col < 8 ) {
            if (row !== currentRow && col !== currentCol) {
                availableMoves.push(Square.at(row, col))
            }
            row--;
            col++;
        }
        row = currentRow;
        col = currentCol;        
        while (row < 8 && col >= 0 ) {
            
            if (row !== currentRow && col !== currentCol) {
                availableMoves.push(Square.at(row, col))
            }
            row++;
            col--;
        }
        return availableMoves;
    }
}
