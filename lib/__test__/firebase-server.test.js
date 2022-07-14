import { getExternalTokens } from "lib/firebase-server";

describe("getExternalTokens", () => {
  it("should return an array of tokens", async () => {
    const result = await getExternalTokens();
    expect(result).toBeInstanceOf(Array);
  });
});
