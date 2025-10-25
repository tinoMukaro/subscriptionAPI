import express from 'express';
import { PORT } from './config/env.js';

import AuthRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.router.js';
import userRouter from './routes/user.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';
// import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser);
app.use(arcjetMiddleware);

app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/workflows', workflowRouter)

app.use(errorMiddleware)

app.listen(PORT, async () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectToDatabase()
})

export default app;