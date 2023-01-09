import jwt from "jsonwebtoken";
import User from "../models/User";
import { config } from "dotenv";

config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res
        .status(403)
        .json({ status: 401, message: "Por favor, inicie sesión" });
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = decoded.id;
    const user = await User.findById(decoded.id, { password: 0 });
    if (!user)
      return res
        .status(404)
        .json({ status: 404, message: "Por favor, inicie sesión" });
    next();
  } catch (error) {
    res.status(401).json({ status: 401, message: "Unhautorized" });
  }
};

export const isAdmin = async (req, res, next) => {
	const user = await User.findOne({ id: req.userId });
	if (!user.admin) return res.status(401).json({status: 401, message: 'Missing permissions'});
	next();
}

export const isMod = async (req, res, next) => {
	const user = await User.findOne({ id: req.userId });
	if (user.admin) return next();
	if (!user.mod) return res.status(401).json({status: 401, message: 'Missing permissions'});
	next();
}


