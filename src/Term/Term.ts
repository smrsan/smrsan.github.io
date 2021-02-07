import $ from "jquery";

class Term {
  private _$root: JQuery<HTMLDivElement | HTMLElement>;
  private _$term: JQuery<HTMLDivElement | HTMLElement>;

  constructor(rootId: string) {
    this._$root = $(`#${rootId}`);
    this._$term = this._buildElem();
    this._$root.append(this._$term);
  }

  private _buildElem(): JQuery {
    return $(`<div>`).addClass("term").text("Terminal");
  }
}

export default Term;
