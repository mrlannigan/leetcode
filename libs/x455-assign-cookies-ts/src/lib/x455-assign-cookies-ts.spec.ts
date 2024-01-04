import { findContentChildren } from './x455-assign-cookies-ts';

describe('455 Assign Cookies TS', () => {
  it('should work', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toEqual(1);
    expect(findContentChildren([1, 2], [1, 2, 3])).toEqual(2);
    expect(findContentChildren(
          [356, 503, 493, 160, 153, 515, 455, 201, 168, 479, 426, 170, 454, 68, 311, 125],
          [511, 438, 141, 477, 336, 10, 472, 388, 2, 299, 372, 487]
        )).toEqual(10)
  });
});
