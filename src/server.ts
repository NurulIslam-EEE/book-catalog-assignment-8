import { Server } from "http";
import app from "./app";
import config from "./config";

let server: Server;

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});

async function bootstrap() {
  try {
    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on("SIGTERM", () => {
  console.info("SIGTERM is received");
  if (server) {
    server.close();
  }
});
