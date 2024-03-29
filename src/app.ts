import cors from "cors";
import httpStatus from "http-status";
import express, { Application, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { UserRoute } from "./app/modules/users/user.route";
import { CategoryRoute } from "./app/modules/category/category.route";
import { BookRoute } from "./app/modules/books/books.route";
import { OrdersRoute } from "./app/modules/orders/orders.route";
import { AuthRoute } from "./app/modules/auth/auth.route";

const app: Application = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use("*", cors(corsOptions));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/profile", AuthRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/auth", UserRoute);
app.use("/api/v1/categories", CategoryRoute);
app.use("/api/v1/books", BookRoute);
app.use("/api/v1/orders", OrdersRoute);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to Book Catalog API",
  });
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
