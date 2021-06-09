import Piece from './piece';
import Direction from './direction'

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            new Direction(1, 0),
            new Direction(-1, 0),
            new Direction(0, 1),
            new Direction(0, -1)
        ]
        const result = this.getNextAvailableMoves(board, directions, 8);
        console.log(result)
        return result
        // return this.getNextAvailableMoves(board, directions, 8);
    }
}

