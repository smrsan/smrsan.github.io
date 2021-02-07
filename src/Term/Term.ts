import $ from "jquery";
import { encode as encodeHtml } from "html-entities";

class Term {
  private _$root: JQuery<HTMLDivElement | HTMLElement>;
  private _$term: JQuery<HTMLDivElement | HTMLElement>;
  private _$eofChar: JQuery<HTMLSpanElement | HTMLElement>;
  private _$cursor: JQuery<HTMLSpanElement | HTMLElement>;
  private _cursorIndex: number = 0;
  private _charsCount: number = 0;
  private _isAtNewLine: boolean = true;

  private readonly _termClassName: string = "term";
  private readonly _cursorClassName: string = "term-cursor";

  constructor(rootId: string) {
    this._$root = $(`#${rootId}`);
    this._$term = this._buildTermElem();
    this._$eofChar = this._buildEofChar();
    this._$cursor = this._$eofChar;

    this._$term.append(this._$cursor);
    this._$root.append(this._$term);
  }

  private _buildTermElem(): JQuery {
    return $(`<div>`).addClass(this._termClassName);
  }

  private _buildEofChar(): JQuery {
    return $(`<span>&nbsp</span>`).addClass(this._cursorClassName);
  }

  private _createCharElem(char: string): JQuery {
    let escapedChar: string;

    this._isAtNewLine = false;

    switch (char) {
      case "\n":
        escapedChar = "<br/>";
        this._isAtNewLine = true;
        break;
      default:
        escapedChar = encodeHtml(char, { mode: "extensive" }).replace(
          " ",
          "&nbsp"
        );
    }

    const $char = $(`<span>${escapedChar}</span>`);
    return $char;
  }

  private _appendChar(char: string) {
    const $char = this._createCharElem(char);
    this._$cursor.before($char);
    this._charsCount += 1;
    this._cursorIndex += 1;
  }

  public clearChar() {
    if (!this._cursorIndex) return;
    this._cursorIndex -= 1;
    this._$cursor.prev().remove();
    this._charsCount -= 1;
    this._isAtNewLine =
      !this._cursorIndex ||
      !!this._$term.children().eq(this._cursorIndex).find("br").length;
  }

  public clearLine() {
    if (this._isAtNewLine) {
      this.clearChar();
    }
    while (!this._isAtNewLine) {
      this.clearChar();
    }
  }

  public log(...strs: string[]) {
    for (const str of strs) {
      for (const char of str) {
        this._appendChar(char);
      }
    }
  }

  public moveCursorTo(pos: number | "last" | "first" | "right" | "left") {
    let isLastChar = false;

    if (typeof pos === "string") {
      switch (pos) {
        case "last":
          pos = this._charsCount;
          break;
        case "first":
          pos = 0;
          break;
        case "right":
          pos = this._cursorIndex + 1;
          break;
        case "left":
          pos = this._cursorIndex - 1;
          break;
        default:
          return;
      }
    }

    if (pos < 0) {
      pos = 0;
    } else if (pos >= this._charsCount) {
      pos = this._charsCount;
      isLastChar = true;
    }

    this._$cursor.removeClass(this._cursorClassName);

    this._$cursor = isLastChar
      ? this._$eofChar
      : this._$term.children().eq(pos);

    this._$cursor.addClass(this._cursorClassName);

    this._cursorIndex = pos;
  }

  public delChar() {
    this.moveCursorTo(this._cursorIndex + 1);
    this.clearChar();
  }
}

export default Term;
