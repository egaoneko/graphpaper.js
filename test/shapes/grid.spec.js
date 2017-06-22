import chai from "chai";
import Grid from "../../src/shapes/grid";


let assert = chai.assert;

describe('Grid', () => {
  let grid;

  beforeEach(() => {
    grid = new Grid();
  });

  describe('initialized Grid', () => {
    it('initialized start', () => {
      assert.strictEqual(grid._opt.startWidth, 0);
      assert.strictEqual(grid._opt.startHeight, 0);
    });

    it('initialized end', () => {
      assert.strictEqual(grid._opt.endWidth, 0);
      assert.strictEqual(grid._opt.endHeight, 0);
    });
  });

  describe('options', () => {
    it('initialized set options', () => {
      grid = new Grid({
        startWidth: 10,
        startHeight: 20,
        endWidth: 30,
        endHeight: 40
      });
      assert.strictEqual(grid._opt.startWidth, 10);
      assert.strictEqual(grid._opt.startHeight, 20);
      assert.strictEqual(grid._opt.endWidth, 30);
      assert.strictEqual(grid._opt.endHeight, 40);
      assert.strictEqual(grid._opt.x, (10 + 30) * 0.5);
      assert.strictEqual(grid._opt.y, (20 + 40) * 0.5);
    });
  });

  describe('methods', () => {
    it('get startWidth', () => {
      assert.strictEqual(grid.startWidth, 0);
    });

    it('get startHeight', () => {
      assert.strictEqual(grid.startHeight, 0);
    });

    it('get endWidth', () => {
      assert.strictEqual(grid.endWidth, 0);
    });

    it('get endHeight', () => {
      assert.strictEqual(grid.endHeight, 0);
    });

    it('set startWidth', () => {
      let startWidth = 50;
      grid.startWidth = startWidth;
      assert.strictEqual(grid._opt.startWidth, startWidth);
      assert.strictEqual(grid._opt.x, (0 + 50) * 0.5);
      assert.strictEqual(grid._position.x, (0 + 50) * 0.5);
    });

    it('set startHeight', () => {
      let startHeight = 50;
      grid.startHeight = startHeight;
      assert.strictEqual(grid._opt.startHeight, startHeight);
      assert.strictEqual(grid._opt.y, (0 + 50) * 0.5);
      assert.strictEqual(grid._position.y, (0 + 50) * 0.5);
    });

    it('set endWidth', () => {
      let endWidth = 50;
      grid.endWidth = endWidth;
      assert.strictEqual(grid._opt.endWidth, endWidth);
      assert.strictEqual(grid._opt.x, (0 + 50) * 0.5);
      assert.strictEqual(grid._position.x, (0 + 50) * 0.5);
    });

    it('set endHeight', () => {
      let endHeight = 50;
      grid.endHeight = endHeight;
      assert.strictEqual(grid._opt.endHeight, endHeight);
      assert.strictEqual(grid._opt.y, (0 + 50) * 0.5);
      assert.strictEqual(grid._position.y, (0 + 50) * 0.5);
    });
  });
});
