import { InputBuffer } from "./InputBuffer";
import { Config } from "./Config";
/**
 * HTML 側にあるボタン (<button data-value="1">1</button>) や表示欄 (#display) を取得する。
 * DOM 要素の「中身を操作」するのではなく、それを他のクラスに渡すために取得するだけ
 * 連携イメージ
 * ユーザー操作
    ↓
  KeyMapper → KeyToken
    ↓
  Calculator.handleInput(token)
    ↓
  Evaluatorで計算
    ↓
  NumberFormatter.formatForDisplay(result)
    ↓
  DomDisplay.render(formatted)
 */

  //HTML要素の取得
const display = document.getElementById('display') as HTMLElement;
const button = document.querySelectorAll<HTMLButtonElement>('.buttons button');
const buffer = new InputBuffer(Config.MAX_DIGITS);