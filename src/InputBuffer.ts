import { Config } from "./Config";

/**
 * 桁数上限（合計8桁）を超える入力を拒否（追加を無視）。
 * 桁数は value から . と - を除いた文字数で算出。
 * pushDecimal() は既に小数点が存在する場合は無視。
 * "." 単独入力は "0." に変換。
 */

export class InputBuffer {
    /**
     * 入力中の文字列を保持する場所
     * 初期値は "" にしておくことで自然になる
     * 数字や "." を追加するときはここを更新
     */
    private value: string;

    /**
     * 桁数の上限を保持
     * コンストラクタで Config.MAX_DIGITS を受け取る
     * 入力追加時に digitCount() >= maxDigits なら追加を無視する
     */
    private maxDigits: number;
    constructor(maxDigits: number) {
        this.value = "";
        this.maxDigits = maxDigits;
    }
    
    /**
     * 数値を追加するメソッド
     * 現在の桁数をdigitCount()で取得
     * 桁数がmaxDigits以上なら追加を無視
     * それ以外の場合はd.toString()をvalueの末尾に追加
     */
    public pushDigit(d:number):void {
        if (this.digitCount() >= this.maxDigits){
            // 桁数が上限なら追加しない
            return;
        } else {
            // 上限に達していなければ追加
            this.value += d.toString();
        }
    }

    /**
     * 小数点を追加するメソッド
     * すでにvalueに "."がある場合は無視
     * valueが空文字列の場合は "0."に変換
     * それ以外は末尾に "."を追加
     */
    public pushDecimal():void {
        if (this.value.includes(".")) {
            // すでに小数点がある場合は何もしない
            return;
        } else if (this.value === "") {
            // 空文字列の場合は "0." にする
            this.value = "0.";
        } else {
            // それ以外は末尾に "." を追加
            this.value += ".";
        }
    }
    /**
     * value を空文字列 "" に戻す
     * Calculator 側で「C」ボタンを押したときに呼ぶ
     */
    public clear():void {
        this.value = "";
    }

    /**
     * 現在の value を数値に変換して返す。
     * parseFloat は "0." や "-0.5" にも対応。
     * 空文字列の場合は 0 を返す。
     */
    public toNumber():number {
        // 空文字列の場合は 0
        if (this.value === "") {
            return 0;
        }
        // 文字列を数値に変換して返す
        return parseFloat(this.value);

    }
    /**
     * value が空文字列かどうかを返す
     */
    public isEmpty():boolean {
        return this.value === "";
    }

    /**
     * 桁数を数えるメソッド
     * "." と "-" はカウントしない
     */
    public digitCount():number {
        return this.value.replace(".", "").replace("-", "").length;
    }
}

