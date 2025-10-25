/**
 * 「何をできるか（render, renderError）」だけを決める契約。実装には触れない
 * 外からは IDisplay として扱う
 * 内部で DOM 操作は DomDisplay に任せる
 * DomDisplayから受け取った render(text) / renderError(message) をHTMLに連携
 * Calculatorでの計算結果をHTMLに連携
 * 他のコードは IDisplay を通して操作するだけで、内部が DOM かどうか気にしなくてよい
 * 将来「コンソール表示用 Display」とか「テキストファイル用 Display」に変えたくなっても、外部コードを変える必要がない
 * DOM に依存する DomDisplay をテストするのは大変
 * IDisplay を使えば モック（偽物の表示クラス） を作ってテストできる
 * インターフェースを通じて他のクラスと統一的に扱える
 * 実装を変えても外からは同じメソッドで扱える
 */
export interface IDisplay {
    render(text: string):void, 
    renderError(message: string):void,
}
