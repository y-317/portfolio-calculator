/**
 * アプリケーションを司る中核
 * UI からの KeyToken を受け取り
 * InputBuffer / left / operator を更新
 * Evaluator で必要時に計算
 * NumberFormatter で表示文字列を生成
 * IDisplay に描画を依頼
 * 左から順評価を保証：演算子入力時点で、
 * left (op) buffer が揃っていれば即時計算 → 結果を新たな left として保持
 * エラー発生（例：0除算）で state = Error に遷移。
 * Clear または次の数値入力で回復方針を定義
 * InputBuffer:一時的に数値や入力を保持する変数
 * left:演算の左オペランドを保持する変数,InputBufferに数値がある状態で、新たな数値/演算子が入力されたら、InputBufferにある数値をleftが保持
 * operator:演算子入力の変数/関数。left 未設定で operator を押した場合：最後の演算子に置換。left と buffer が揃っていれば即時計算（左から順評価-順番に計算するってこと）
 * Evaluator:計算実行の関数。compute(a, op, b) で四則演算を実施。Divide かつ b === 0 の場合は DivisionByZeroError を throwする。丸め誤差は許容するため、特別な十進演算ライブラリは不使用
 * 状態遷移と評価タイミングを司る中核。UI からの KeyToken を受け取り、InputBuffer / left / operator を更新し、Evaluator で必要時に計算、NumberFormatter で表示文字列を生成して IDisplay に描画を依頼。
    左から順評価を保証：演算子入力時点で、left (op) buffer が揃っていれば即時計算 → 結果を新たな left として保持。
    エラー発生（例：0除算）で state = Error に遷移。Clear または次の数値入力で回復方針を定義。
 */

class Calculator {
    
}