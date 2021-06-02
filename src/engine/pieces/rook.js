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

        let stopRight = false;
        let stopLeft = false;
        let stopUp = false;
        let stopDown = false;

        for (let i = 1; i < 8; i++) {
            getNextAvailableMove(currentRow + i, currentCol, stopUp);
            getNextAvailableMove(currentRow - i, currentCol, stopDown);
            getNextAvailableMove(currentRow, currentCol + i, stopRight);
            getNextAvailableMove(currentRow, currentCol - i, stopLeft);
        }

        function getNextAvailableMove(newRow, newCol, check) {
            console.log(`${newRow}, ${newCol}, ${check}`);
            debugger;
            if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
                const nextMove = Square.at(newRow, newCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove);
                    console.log(availableMoves)
                } else {
                    check = true;
                }
            }

        }

        //     let newRow = currentRow - i;     
        //     let newCol = currentCol;
        //     let check = stopDown;    
        //     if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
        //         const nextMove = Square.at(newRow, newCol);
        //         if (!board.getPiece(nextMove)) {
        //             availableMoves.push(nextMove);
        //         } else {
        //             check = true;
        //         }
        //     }

        //     let newRow = currentRow;     
        //     let newCol = currentCol + i;
        //     let check = stopRight;    
        //     if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
        //         const nextMove = Square.at(newRow, newCol);
        //         if (!board.getPiece(nextMove)) {
        //             availableMoves.push(nextMove);
        //         } else {
        //             check = true;
        //         }
        //     }


        //     if (currentRow - i >= 0 && !stopDown) {
        //         const nextMove = Square.at(currentRow - i, currentCol);
        //         if (!board.getPiece(nextMove)) {
        //             availableMoves.push(nextMove);
        //         } else {
        //             stopDown = true;
        //         }
        //     }
        //     if (currentCol + i < 8 && !stopRight) {
        //         const nextMove = Square.at(currentRow, currentCol + i);
        //         if (!board.getPiece(nextMove)) {
        //             availableMoves.push(nextMove);
        //         } else {
        //             stopRight = true;
        //         }
        //     }
        //     if (currentCol - i >= 0 && !stopLeft) {
        //         const nextMove = Square.at(currentRow, currentCol - i);
        //         if (!board.getPiece(nextMove)) {
        //             availableMoves.push(nextMove);
        //         } else {
        //             stopLeft = true;
        //         }
        //     }
        // }
        return availableMoves;
    }
}

