import chai from "chai";
import * as graphPaper from "../src/index";

let assert = chai.assert;

describe('Index', () => {
  it('GraphPaper', () => {
    assert.property(graphPaper, "GraphPaper");
  });

  it('Grid', () => {
    assert.property(graphPaper, "Grid");
  });
});
