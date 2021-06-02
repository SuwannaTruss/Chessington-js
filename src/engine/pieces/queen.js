import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const location = board.findPiece(this);
        const currentRow = location.row;
        const currentCol = location.col;

        let stopTopRight = false;
        let stopTopLeft = false;
        let stopDownRight = false;
        let stopDownLeft = false;
        let stopRight = false;
        let stopLeft = false;
        let stopUp = false;
        let stopDown = false;

        for (let i = 1; i < 8; i++) {
            getNextAvailableMove(currentRow + i, currentCol + i, stopTopRight, "topRight");
            getNextAvailableMove(currentRow - i, currentCol + i, stopDownRight, "downRight");
            getNextAvailableMove(currentRow + i, currentCol - i, stopTopLeft, "topLeft");
            getNextAvailableMove(currentRow - i, currentCol - i, stopDownLeft, "downLeft");
            getNextAvailableMove(currentRow + i, currentCol, stopUp, "up");
            getNextAvailableMove(currentRow - i, currentCol, stopDown, "down");
            getNextAvailableMove(currentRow, currentCol + i, stopRight, "right");
            getNextAvailableMove(currentRow, currentCol - i, stopLeft, "left");
        }

        function getNextAvailableMove(newRow, newCol, check, direction) {
            if (newRow < 8 && newRow >= 0 && newCol < 8 && newCol >= 0 && !check) {
                const nextMove = Square.at(newRow, newCol);
                if (!board.getPiece(nextMove)) {
                    availableMoves.push(nextMove)
                } else {
                    switch (direction) {  
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
