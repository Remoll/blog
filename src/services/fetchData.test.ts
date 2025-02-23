import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fetchData from "./fetchData";
import translations from "@/locates/pl/translations.json";

interface TestData {
  id: number;
  name: string;
}

describe("fetchData", () => {
  let globalFetch: typeof fetch;

  beforeEach(() => {
    globalFetch = global.fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.fetch = globalFetch;
  });

  it("should return error when response is not ok", async () => {
    const fakeResponse = {
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: vi.fn(),
    };

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(fakeResponse));

    const result = await fetchData<TestData>("");

    expect(result).toEqual({
      data: null,
      error: `${translations["errorHttp"]}: 404 - Not Found`,
    });
  });

  it("should return error when response JSON contains error field", async () => {
    const fakeData = { error: "Some error occurred" };
    const fakeResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(fakeData),
    };

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(fakeResponse));

    const result = await fetchData<TestData>("");

    expect(result).toEqual({
      data: null,
      error: fakeData.error,
    });
  });

  it("should return data when response is ok and JSON does not contain error field", async () => {
    const fakeData: TestData[] = [{ id: 1, name: "Test Item" }];
    const fakeResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(fakeData),
    };

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(fakeResponse));

    const result = await fetchData<TestData[]>("");

    expect(result).toEqual({
      data: fakeData,
      error: null,
    });
  });

  it("should return error when fetch throws an exception", async () => {
    const fakeError = new Error("Network failure");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(fakeError));

    const result = await fetchData<TestData>("");

    expect(result).toEqual({
      data: null,
      error: fakeError.message,
    });
  });

  it("should return default unknown error when error is not an instance of Error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue("Some non-error exception")
    );

    const result = await fetchData<TestData>("");

    expect(result).toEqual({
      data: null,
      error: translations["errorUnknown"],
    });
  });
});
