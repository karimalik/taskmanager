import { Request, Response } from 'express';
import Task from '../models/Task';


/**
 * get all task in storage
 * @author karimalik <karimkompissi@gmail.com>
 * @param req 
 * @param res 
 */
export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.findAll();
        res.json({
            message: "Task fected successfully",
            tasks
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};


/**
 * create new instance in storage
 * @author karimalik <karimkompissi@gmail.com>
 * @param req 
 * @param res 
 */
export const createTask = async (req: Request, res: Response): Promise<void> => {

    const { title } = req.body;

    try {
        const newTask = await Task.create({ title, completed: false });

        //return the response
        res.status(201).json({ message: "Task has been created successfully", newTask });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

/**
 * update specific instance in storage
 * @author karimalik <karimkompissi@gmail.com>
 * @param req 
 * @param res 
 */
export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    try {
        const task = await Task.findByPk(taskId);

        if (task) {
            await task.update({
                title: req.body.title || task.title,
                completed: req.body.completed !== undefined ? req.body.completed : task.completed,
            });

            res.status(200).json({
                message: "Task has been updated successfully",
                task
            });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}


export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    const taskId = parseInt(req.params.id);

    try {
        const task = await Task.findByPk(taskId);
        if (task) {
            await task.destroy();

            res.status(200).json({ message: "Task has been deleted successfully !" });
        } else {
            res.status(404).json({ message: "Task not found!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}