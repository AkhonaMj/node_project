import { compare } from "bcrypt";
import { getUserByEmailDB } from "../model/userDB.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const checkUser = async (req, res, next) => {
  try {
    const { emailAdd, userPass } = req.body; //destructuring
    console.log(emailAdd, userPass);

    let hashedPassword = await getUserByEmailDB(emailAdd);
    console.log(hashedPassword);

    if (!hashedPassword) {
      res.status(404).send("User not found");
      return;
    }

    compare(userPass, hashedPassword, (err, result) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }

      if (result == true) {
        let token = jwt.sign(
          { emailAdd: emailAdd },process.env.SECRET_KEY, { expiresIn: "1h" }
        );
        console.log(token);
        req.body.token = token;

        next();
        return;
      }
      res.status(401).send("Wrong password");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export { checkUser };