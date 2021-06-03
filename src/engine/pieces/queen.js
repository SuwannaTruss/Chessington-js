import Piece from './piece';
import Square from '../square';
import Direction from './direction';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            new Direction(1, 1),
            new Direction(-1, 1),
            new Direction(1, -1),
            new Direction(-1, -1),
            new Direction(1, 0),
            new Direction(-1, 0),
            new Direction(0, 1),
            new Direction(0, -1)
        ]
        return this.getNextAvailableMoves(board, directions);
    }
}
