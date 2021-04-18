const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const userRouter = require('./routers/user');
const Userstting = require('./models/userSttings');
const usersttingRouter = require('./routers/userStting');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(usersttingRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})