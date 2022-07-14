import { saveCities, getCities, getAllTokens } from "lib/getTokens";

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
    const result = await getAllTokens("8VRl5Kv8iBwzlPEmGBKu");
    console.log(result);
    expect(result[0]).toHaveProperty("access_token");
  });
});
