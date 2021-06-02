import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;
        const availableMoves = [];

        let stopTopRight = false;
        let stopTopLeft = false;
        let stopDownRight = false;
        let stopDownLeft = false;

        for (let i = 1; i < 8; i++) {
            getNextAvailableMove(currentRow + i, currentCol + i, stopTopRight, "topRight");
            getNextAvailableMove(currentRow - i, currentCol + i, stopDownRight, "downRight");
            getNextAvailableMove(currentRow + i, currentCol - i, stopTopLeft, "topLeft");
            getNextAvailableMove(currentRow - i, currentCol - i, stopDownLeft, "downLeft");
        }

        function getNextAvailableMove(newRow, newCol, check, direction) {
            if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
                const nextMove = Square.at(newRow, newCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    switch (direction) {  // check = true doesn't work, we tried a lot!!
                        case "topRight":
                            stopTopRight = true;
                            break;
                        case "downRight":
                            stopDownRight = true;
                            break;
                        case "topLeft":
                            stopTopLeft = true;
                            break;
                        case "downLeft":
                            stopDownLeft = true;
                            break;
                    }
                }
            }
        }
        return availableMoves;
    }
}
