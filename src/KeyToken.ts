import { Operation } from "./Operation";
/**
 * HTML の <button> が持つ文字列（"0"～"9"、"+", "-", "*", "/", "=", "C", "."）を
 * プログラム内部で扱いやすい オブジェクト に変換する
 * Calculator が「数字か演算子か」「何の値か」をすぐ判断できるようにする
 */

const KEY_DIGIT = "digit";
const KEY_DECIMAL = "decimal";
const KEY_OP = "op";
const KEY_EQUAL = "equal";
const KEY_CLEAR = "clear";

export type KeyToken =
    | { kind: "digit"; value: number }
    | { kind: "decimal" }
    | { kind: "op"; value: Operation } //enumでOperationを定義
    | { kind: "equal" }
    | { kind: "clear" };