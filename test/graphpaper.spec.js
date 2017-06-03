import chai from "chai";
import GraphPaper from "../src/graphpaper";

let assert = chai.assert;

describe('GraphPaper', () => {
  let graphPaper;

  beforeEach(() => {
    graphPaper = new GraphPaper();
  });

  describe('initialized GraphPaper', () => {
    it('smoke test', () => {
      assert.strictEqual("Smoke test", 1234);
    });
  });
});
