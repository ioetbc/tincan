import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";

const DEFAULT_PORT = 3000;

function createApp() {
  let httpServer: Server | null = null;

  const requestHandler = (_req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  };

  return {
    get port(): number {
      const addr = httpServer?.address();
      if (addr && typeof addr === "object") return addr.port;
      return DEFAULT_PORT;
    },
    start(port = DEFAULT_PORT): Promise<void> {
      httpServer = createServer(requestHandler);
      return new Promise((resolve) => {
        httpServer!.listen(port, resolve);
      });
    },
    stop(): Promise<void> {
      return new Promise((resolve) => {
        if (httpServer) {
          httpServer.close(() => resolve());
          httpServer = null;
        } else {
          resolve();
        }
      });
    },
  };
}

export const server = createApp();
