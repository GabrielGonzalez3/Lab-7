import express from "express";
import tasksController from "../controller/tasks.controller.js";

// Test: GET http://localhost:3000/api/tasks
const router = express.Router();

router.get("/", tasksController.getTasks);

// Test: POST http://localhost:3000/api/tasks
router.post("/", tasksController.createTask); 

export default router;