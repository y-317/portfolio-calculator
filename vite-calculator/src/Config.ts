/**
  * 電卓アプリ全体で共通する 設定値や制約をまとめるクラス
  * 例：
  * 入力桁数の上限（最大 8 桁）
  * 表示に使う最大桁数や指数表記の桁数
  * 何かしらの定数（例：初期値、メッセージなど）
 */

export class Config {
    static readonly MAX_DIGITS: number  = 8;
    static readonly ERROR_MESSAGE: string = "エラー"
    static readonly DEFAULT_VALUE: number = 0;
}
