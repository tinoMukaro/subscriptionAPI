import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post('/sign-up', signUp);

AuthRouter.post('/sign-in', signIn);

AuthRouter.post('/sign-out', signOut);


export default AuthRouter;