import { getAllTokens, getCustomToken } from "lib/firebase-server";

describe("getAllTokens(userId)", () => {
  if (typeof process.env.A_USER_ID_FOR_JEST === "undefined")
    console.log("check .env.test");

  it("should run", async () => {
    const result = await getAllTokens(process.env.A_USER_ID_FOR_JEST);
    // console.log(`found ${result.length} tokens`);
    expect(result[0]).toHaveProperty("access_token");
    expect(result[0]).toHaveProperty("scope");
  });
});
