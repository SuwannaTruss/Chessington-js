import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getNextAvailableMoves(board, directions, count) {
        const availableMoves = [];
        const isOccupied = [];
        const location = board.findPiece(this);

        directions.forEach(direction => {
            for (let i = 1; i < count; i++) {
                const nextMove = Square.at(location.row + i * direction.x, location.col + i * direction.y);

                if (nextMove.row < 8 && nextMove.row >= 0 && nextMove.col < 8 && nextMove.col >= 0) {
                    const occupiedPiece = board.getPiece(nextMove);

                    if (!occupiedPiece) {
                        availableMoves.push(nextMove);
                    } else { // check if it is the same player, if so break
                        if (occupiedPiece.player === this.player) {
                            break
                        } // check if it is king, if not add to availableMoves
                        if (occupiedPiece.constructor.name === "King") {
                            break;
                        }
                        availableMoves.push(nextMove);
                        break;
                    }
                }
            }
            // console.log(this.player) // Symbol(white)
            // console.log(occupiedPiece.player)
            // console.log(Object.keys(this)) // ['player']
            // console.log(Object.values(this)) // [Symbol(white)]
            // console.log(Object.is(this.player, occupiedPiece.player))
            // console.log(this.player === occupiedPiece)
            // isOccupied.push(nextMove); 
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
