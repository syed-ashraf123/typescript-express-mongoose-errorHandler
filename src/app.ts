import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
config();
import "./db";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

import Profile from "./routes/Profile.route";
app.use("/profile", Profile);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    status: err.status || 500,
  });
};

app.use(errorHandler);
const PORT: Number = Number(process.env.PORT) || 3000;
const server: Server = app.listen(PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
