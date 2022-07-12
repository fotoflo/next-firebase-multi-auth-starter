import config from "next.config";

describe("next.config", () => {
  it("should be an object", () => {
    const result = config;
    console.log(result);
    expect(result).toBeInstanceOf(Object);
  });
});
