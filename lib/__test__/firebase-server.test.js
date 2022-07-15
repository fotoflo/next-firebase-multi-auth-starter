import { getAllTokens, getCustomToken } from "lib/firebase-server";

describe("getAllTokens(userId)", () => {
  it("should run", async () => {
    const result = await getAllTokens("yKXvQAcmByaCY5KGIsxm");
    // console.log(`found ${result.length} tokens`);
    expect(result[0]).toHaveProperty("access_token");
    expect(result[0]).toHaveProperty("scope");
  });
});
