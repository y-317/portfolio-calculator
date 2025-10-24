import { Operation } from "./Operation";
import { DivisionByZeroError } from "./DivisionByZeroError";
/**
 * compute(a, op, b) で四則演算を実施。
 * Divide かつ b === 0 の場合は DivisionByZeroError を throwする。
 * 丸め誤差は許容するため、特別な十進演算ライブラリは不使用。
 */

export class Evaluator {
    public compute(a: number, op: Operation, b: number): number{
        
    switch (op) {
        case Operation.Add:
            console.log("計算結果:", a + b);
            return a + b;
        case Operation.Minus:
            console.log("計算結果:", a - b);
            return a - b;
        case Operation.Multiply:
            console.log("計算結果:", a * b);
            return a * b;
        case Operation.Divide:
            if (b === 0) {
            throw new DivisionByZeroError("0で割ることはできません");
            }
            console.log("計算結果:", a / b);
            return a / b;
    
        default:
            throw new Error("不明な演算子です");
    }
    }
}