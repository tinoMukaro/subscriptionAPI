import { Router } from "express";
import authorize from "../middlewares/auth.middleware";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=>{
    res.send("hello");
});

subscriptionRouter.get('/:id', ()=>{});

subscriptionRouter.post('/', authorize, createSubscription );

subscriptionRouter.put('/:id', ()=>{});

subscriptionRouter.delete('/:id', ()=>{});

subscriptionRouter.get('/user/:id',authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', ()=>{});

subscriptionRouter.get('/upcoming-renewals', ()=>{});

export default subscriptionRouter;