import { Hono } from "hono";

const DEFAULT_PORT = 3000;

const app = new Hono();

app.get("/", (c) => c.text("hello world"));

function createApp() {
  let httpServer: ReturnType<typeof Bun.serve> | null = null;

  return {
    get port(): number {
      return httpServer?.port ?? DEFAULT_PORT;
    },
    start(port = DEFAULT_PORT): void {
      httpServer = Bun.serve({
        port,
        fetch: app.fetch,
      });
    },
    stop(): void {
      if (httpServer) {
        httpServer.stop(true);
        httpServer = null;
      }
    },
  };
}

export const server = createApp();
