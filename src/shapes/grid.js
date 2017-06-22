import {Shape, Point} from "sketchbook.js";

/**
 * @description Grid Class
 * @class Grid
 */
class Grid extends Shape {

  /**
   * @description Grid constructor.
   * @constructs Grid
   */
  constructor(options = {}) {
    super(options);
    this._init(options);
  }

  /**
   * @private
   * @description Init
   * @param {Object} options options
   * @method _init
   */
  _init(options = {}) {
    if (!('startWidth' in options)) {
      this._opt['startWidth'] = 0;
    }
    if (!('startHeight' in options)) {
      this._opt['startHeight'] = 0;
    }
    if (!('endWidth' in options)) {
      this._opt['endWidth'] = 0;
    }
    if (!('endHeight' in options)) {
      this._opt['endHeight'] = 0;
    }
    this.x = (this._opt['startWidth'] + this._opt['endWidth']) * 0.5;
    this.y = (this._opt['startHeight'] + this._opt['endHeight']) * 0.5;
  }

  /**
   * @description Get startWidth
   * @type {Number}
   * @member Grid#startWidth
   */
  get startWidth() {
    return this._opt.startWidth;
  }

  /**
   * @description Set startWidth
   * @type {Number}
   * @member Grid#startWidth
   */
  set startWidth(startWidth) {
    this._opt.startWidth = startWidth;
    this.x = (this._opt.startWidth + this._opt.endWidth) * 0.5;
  }

  /**
   * @description Get startHeight
   * @type {Number}
   * @member Grid#startHeight
   */
  get startHeight() {
    return this._opt.startHeight;
  }

  /**
   * @description Set startHeight
   * @type {Number}
   * @member Grid#startHeight
   */
  set startHeight(startHeight) {
    this._opt.startHeight = startHeight;
    this.y = (this._opt.startHeight + this._opt.endHeight) * 0.5;
  }

  /**
   * @description Get endWidth
   * @type {Number}
   * @member Grid#endWidth
   */
  get endWidth() {
    return this._opt.endWidth;
  }

  /**
   * @description Set endWidth
   * @type {Number}
   * @member Grid#endWidth
   */
  set endWidth(endWidth) {
    this._opt.endWidth = endWidth;
    this.x = (this._opt.startWidth + this._opt.endWidth) * 0.5;
  }

  /**
   * @description Get endHeight
   * @type {Number}
   * @member Grid#endHeight
   */
  get endHeight() {
    return this._opt.endHeight;
  }

  /**
   * @description Set endHeight
   * @type {Number}
   * @member Grid#endHeight
   */
  set endHeight(endHeight) {
    this._opt.endHeight = endHeight;
    this.y = (this._opt.startHeight + this._opt.endHeight) * 0.5;
  }

  /**
   * @description render
   * @param {Sketchbook} sketchbook Sketchbook
   * @member Grid#render
   */
  render(sketchbook) {
    let ctx = sketchbook.context;
    let start = sketchbook.convertPositionFromLocalCSToScreen(new Point([this.startWidth, this.startHeight]));
    let end = sketchbook.convertPositionFromLocalCSToScreen(new Point([this.endWidth, this.endHeight]));

    let startWidth = start.x;
    let startHeight = start.y;
    let endWidth = end.x;
    let endHeight = end.y;

    ctx.beginPath();

    // Vertical
    for (var verticalIdx = startWidth; verticalIdx < endWidth; verticalIdx += 10) {
      ctx.moveTo(verticalIdx + 0.5, startHeight);
      ctx.lineTo(verticalIdx + 0.5, endHeight);
    }

    // Horizontal
    for (var horizontalIdx = startHeight; horizontalIdx < endHeight; horizontalIdx += 10) {
      ctx.moveTo(startWidth, horizontalIdx + 0.5);
      ctx.lineTo(endWidth, horizontalIdx + 0.5);
    }

    if (this._opt.isStroked) {
      ctx.stroke();
    }
  }
}

export default Grid;
