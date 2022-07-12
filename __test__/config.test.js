import config from "next.config";

describe("next.config", () => {
  it("should be an object and accessable to Jest", () => {
    const result = config;
    expect(result).toBeInstanceOf(Object);
  });
});

describe("NODE_ENV and some variables in .env.test", () => {
  it('NODE_ENV should be "test" and be accessable to Jest', () => {
    const result = process.env.NODE_ENV;
    expect(result).toEqual("test");
  });
  it("FIRESTORE_EMULATOR_HOST and should be accessable to Jest", () => {
    const result = process.env.FIRESTORE_EMULATOR_HOST;
    expect(result).toEqual("localhost:8080");
  });
});
