import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

const getUserprofile = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.getUserprofile(req?.user?.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User getched successfully",
      data: result,
    });
  } catch (err) {
    res.send({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      data: err,
    });
  }
};

export const AuthController = {
  getUserprofile,
};
