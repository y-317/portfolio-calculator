import { Config } from "./Config";
/**
 * 通常表示：toString() 相当をベースに 末尾の不要な 0 と小数点 を削除。
 * 8桁を超える場合は指数表記：toExponential(k) を用いる。
 * 全体が 8 文字以内に収まるよう桁数を決定（e+/-xx を含む）。
 * - と . は長さカウントから除外し、視認性を優先（UI 文言は仕様に従って微調整可能）。
 * 小数点以下の不要なゼロを消す
 * 桁が多すぎたら指数表記にする
 * 表示桁数の上限（maxDigits）を守る
 */

export class NumberFormatter {
    private maxDigits: number;
    
}