import chai from "chai";
import {Sketchbook} from "sketchbook.js";
import GraphPaper from "../src/graphpaper";

let assert = chai.assert;

describe('GraphPaper', () => {
  let graphPaper;

  beforeEach(() => {
    graphPaper = new GraphPaper();
  });

  describe('initialized GraphPaper', () => {
    it('extend Sketchbook', () => {
      assert.isTrue(graphPaper instanceof Sketchbook);
    });
  });
});
