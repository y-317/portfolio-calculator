/**
 * 例外処理
 */

export class DivisionByZeroError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DivisionByZeroError";
    }
    
}