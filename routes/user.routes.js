import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/',authorize, getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', ()=>{});

userRouter.put('/:id', ()=>{});

userRouter.delete('/:id', ()=>{});

export default userRouter;
