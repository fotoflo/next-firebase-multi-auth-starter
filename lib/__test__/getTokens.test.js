import { saveCities } from "lib/getTokens";

describe("saveCities", () => {
  it("should run", async () => {
    const result = await saveCities();
    expect(result).toEqual(true);
  });
});
