import {secret} from "../config";
import {verify} from "jsonwebtoken";

export default req => {
  const token = req.cookies["auth-token"];
  try {
    const data = verify(token, secret);
    req.user = {
      userId: data.userId,
      userEmail: data.userEmail,
      userLogin: data.userLogin
    };
    // eslint-disable-next-line no-empty
  } catch {}
};
