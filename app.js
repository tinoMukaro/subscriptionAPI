import express from 'express';
import { PORT } from './config/env.js';

import AuthRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.router.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)
app.use('/api/v1/users', userRouter)

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

export default app;