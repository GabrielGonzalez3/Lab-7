import tasksService from "../services/tasks.service.js";

const getTasks = (req, res, next) => {
    try{
        const allTasks = tasksService.getAllTasks();
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
};

const createTask = (req, res, next) => {
    try{
        const newTask = tasksService.createTask(req.body);

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return newTask;
};


export default { getTasks, createTask }