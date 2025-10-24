/**
 * このクラスは「ボタンを押したときに、そのボタンが何を意味するか」を教えてくれる役割を持ちます。
 * ボタンの data-value から Map<string, KeyToken> で意味に変換。
 * 数字キーは動的生成（"0".."9"）
 * Map<string, KeyToken>↓↓
 * "1" → { kind: "digit", value: 1 }
 * "+" → { kind: "op", value: Operation.Add }
 * この辞書を使うとどのボタンが押されたかを簡単にkeytokenに変換できる
 * "0" から "9" までの数字は全部手で書かなくても、自動でMapに追加できる
 * つまりループや繰り返しで "0" → { kind: "digit", value: 0 } のように作る
 */



