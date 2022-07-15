import {
  saveCities,
  getCities,
  getAllTokens,
  UserAccount,
} from "lib/getTokens";

import { expectTypeOf } from "expect-type";

describe("saveCities", () => {
  it("should run and return truthy", async () => {
    const result = await saveCities();
    expect(result).toEqual(true);
  });
});

describe("getCities", () => {
  it("should getCities", async () => {
    const result = await getCities();
    expect(result).toEqual({
      capital: false,
      country: "USA",
      name: "San Francisco",
      population: 860000,
      regions: ["west_coast", "norcal"],
      state: "CA",
    });
  });
});

describe("getAllTokens(userId)", () => {
  it("should run", async () => {
    const result = await getAllTokens("yKXvQAcmByaCY5KGIsxm");
    console.log(`found ${result.length} tokens`);
    expect(result[0]).toHaveProperty("access_token");
    expect(result[0]).toHaveProperty("scope");
  });
});
