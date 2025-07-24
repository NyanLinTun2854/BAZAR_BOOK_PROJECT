import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import CONSTANT from "./constant";
import { PassportStatic } from "passport";
import { JwtPayload } from "jsonwebtoken";
import { VerifiedCallback } from "passport-jwt";
import { getUserByID } from "@models/authUser.model";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CONSTANT.JWT_ACCESS_SECRET as string,
};

export default (passport: PassportStatic): void => {
  passport.use(
    new JwtStrategy(
      opts,
      async (jwt_payload: JwtPayload, done: VerifiedCallback) => {
        try {
          const user = await getUserByID(jwt_payload.id);
          if (user) return done(null, user);
          return done(null, false);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
