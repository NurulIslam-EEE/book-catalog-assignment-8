import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        // throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
        res.send({
          success: false,
          statusCode: httpStatus.UNAUTHORIZED,
          message: "Not Authorized",
        });

        return;
      }

      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser; // role , userid

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        // throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
        res.send({
          success: false,
          statusCode: httpStatus.FORBIDDEN,
          message: "Forbidden",
        });

        return;
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
