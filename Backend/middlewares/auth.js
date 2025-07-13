import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate dashboard users
export const isAdminAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.adminToken;
    if (!token) {
      return next(
        new ErrorHandler("Dashboard User is not authenticated!", 401)
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (!req.user || req.user.role !== "Admin") {
      return next(
        new ErrorHandler("Admin not authorized for this resource!", 403)
      );
    }
    next();
  }
);

export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (!req.user || req.user.role !== "Patient") {
      return next(
        new ErrorHandler("Patient not authorized for this resource!", 403)
      );
    }
    next();
  }
);

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(
        new ErrorHandler("User not allowed to access this resource!", 403)
      );
    }
    next();
  };
};

