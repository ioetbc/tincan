const DEFAULT_PORT = 3000;

function createApp() {
  let httpServer: ReturnType<typeof Bun.serve> | null = null;

  return {
    get port(): number {
      return httpServer?.port ?? DEFAULT_PORT;
    },
    start(port = DEFAULT_PORT): void {
      httpServer = Bun.serve({
        port,
        fetch() {
          return new Response("hello world", {
            headers: { "Content-Type": "text/plain" },
          });
        },
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
