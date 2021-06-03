import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getNextAvailableMoves(board, directions) {
        const availableMoves = [];
        const location = board.findPiece(this);

        directions.forEach(direction => {
            for (let i = 1; i < 8; i++) {
                const nextMove = Square.at(location.row + i * direction.x, location.col + i * direction.y);
                if (nextMove.row < 8 && nextMove.row >= 0 && nextMove.col < 8 && nextMove.col >= 0) {
                    if (!board.getPiece(nextMove)) {
                        availableMoves.push(nextMove);
                    } else {
                        break;
                    }
                }
            }
        });
        
        return availableMoves;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
