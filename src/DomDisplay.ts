import type { IDisplay } from "./IDsplay";

/**
 * IDislplayを実装したクラス
 * 実際に DOM の HTMLElement を使って画面に描画する具体的な処理を持つ
 * 内部に private el: HTMLElement を持っている
 * 結果を表示する画面要素（例：#screen）に対して render(text) / renderError(message) を提供
 * 視覚的なエラースタイル適用は CSS で表現
 * render(text):通常の表示内容を画面に描画する,public * 
 * :エラーを画面に表示する,public
 * HTMLElement:private,el(変数)
 */

class DomDisplay implements IDisplay {
    //elを定義して、DOMの表示対象を保持する
    //render系のメソッドからこの el にアクセスして表示内容を更新する
    private readonly el: HTMLInputElement; //メンバー変数

    constructor() {
        this.el = document.getElementById("display") as HTMLInputElement;
    }

    //通常の結果や入力を画面に表示するためのメソッド
    //戻り値は不要 → void
    render(text: string): void {
        //引数として渡された文字列を el に代入させる
        this.el.value = text;
    }

    renderError(message: string): void {
        this.el.value = message;
    }
}


