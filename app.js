import express from "express";
import tasksRouter from "./routes/tasks.route.js";
import errorHandler from "./middleware/task.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.use(errorHandler);

export default app;