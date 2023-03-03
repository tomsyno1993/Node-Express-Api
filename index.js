import express from "express";

import usersRoutes from './routes/users.js';


const app = express();

app.use( express.json());

app.use('/users', usersRoutes);

app.get("/", async(req, res) => { res.send("Hello from Hmepage.");
});



export default app;
