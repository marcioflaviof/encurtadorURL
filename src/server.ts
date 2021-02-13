import dotenv from "dotenv";
import express from "express";
import { createConnection } from "typeorm";
import routes from "./routes";

dotenv.config();

const port = 8081;

(async () => {
  const app = express();
  app.use(express.json());
  app.use(routes);

  await createConnection();
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
})();
