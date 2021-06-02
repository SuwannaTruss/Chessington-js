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
            getNextAvailableMove(currentRow + i, currentCol, stopUp, "up");
            getNextAvailableMove(currentRow - i, currentCol, stopDown, "down");
            getNextAvailableMove(currentRow, currentCol + i, stopRight, "right");
            getNextAvailableMove(currentRow, currentCol - i, stopLeft, "left");
        }

        function getNextAvailableMove(newRow, newCol, check, direction) {
            if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
                const nextMove = Square.at(newRow, newCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove);
                } else {
                    switch (direction) {  // check = true doesn't work, we tried a lot!!
                        case "up":
                            stopUp = true;
                            break;
                        case "down":
                            stopDown = true;
                            break;
                        case "right":
                            stopRight = true;
                            break;
                        case "left":
                            stopLeft = true;
                            break;
                    }
                }
            }
        }
        return availableMoves;
    }
}

