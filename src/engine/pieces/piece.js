import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getNextAvailableMoves(board, directions, count) {
        const isEmptySquare = [];
        const canTakePieces= [];
        const location = board.findPiece(this);
        directions.forEach(direction => {
            for (let i = 1; i < count; i++) {
                const nextSquare = Square.at(location.row + i * direction.x, location.col + i * direction.y);
                if (nextSquare.row < 8 && nextSquare.row >= 0 && nextSquare.col < 8 && nextSquare.col >= 0) {
                    const pieceOnNextSquare = board.getPiece(nextSquare);
                    if (!pieceOnNextSquare) {
                        isEmptySquare.push(nextSquare);
                    } else { 
                        // friendly piece
                        if (Object.is(this.player, pieceOnNextSquare.player)) {
                            break
                        } else { // opposing piece
                            if (pieceOnNextSquare.constructor.name === "King") {
                                break;
                            } else {
                                canTakePieces.push(nextSquare)
                                break
                            }
                        }  
                    }
                }
            }
        });
        return isEmptySquare.concat([...canTakePieces]);
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
