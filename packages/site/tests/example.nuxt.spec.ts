import { expect, describe, it } from "vitest";
import { useSum } from "layer/composables/useSum";
describe("Test unit", () => {
  const { sum } = useSum();
  it("should return 3", () => {
    expect(sum(2, 3)).toMatchInlineSnapshot('5');
  });
});
