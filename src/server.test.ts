import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { server } from "./server.ts";

describe("server", () => {
  beforeAll(async () => {
    await server.start(0);
  });

  afterAll(async () => {
    await server.stop();
  });

  it("returns 'hello world' for GET /", async () => {
    const response = await fetch(`http://localhost:${server.port}/`);
    const text = await response.text();
    expect(response.status).toBe(200);
    expect(text).toBe("hello world");
  });
});
