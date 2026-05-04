import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { server } from "./server.ts";

describe("server", () => {
  beforeAll(() => {
    server.start(0);
  });

  afterAll(() => {
    server.stop();
  });

  it("returns 'hello world' for GET /", async () => {
    const response = await fetch(`http://localhost:${server.port}/`);
    const text = await response.text();
    expect(response.status).toBe(200);
    expect(text).toBe("hello world");
  });
});
