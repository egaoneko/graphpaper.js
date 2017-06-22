import {Sketchbook} from "sketchbook.js";
import Grid from "./shapes/grid";

/**
 * @description GraphPaper Class
 * @class GraphPaper
 */
class GraphPaper extends Sketchbook {

  /**
   * @description GraphPaper constructor.
   * @constructs GraphPaper
   */
  constructor(param) {
    super(param);
  }

  /**
   * @description renderAll
   * @member GraphPaper#renderAll
   */
  renderAll() {
    new Grid({
      startWidth: 0,
      startHeight: 0,
      endWidth: this.canvas.width,
      endHeight: this.canvas.height
    }).renderShape(this);
    super.renderAll();
  }
}

export default GraphPaper;
