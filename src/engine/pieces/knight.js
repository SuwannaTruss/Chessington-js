import Piece from './piece';
import Direction from './direction';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            new Direction(2, 1),
            new Direction(2, -1),
            new Direction(-2, 1),
            new Direction(-2, -1),
            new Direction(-1, 2),
            new Direction(1, -2),
            new Direction(-1, -2),
            new Direction(1, 2)
        ]
        return this.getNextAvailableMoves(board, directions, 2);
    }
}
