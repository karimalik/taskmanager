import { Request, Response } from 'express';
import Task from '../models/Task';



//get all tasks
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
}


//create new tasks
export const createTask = async (req: Request, res: Response): Promise<void> => {

    const { title } = req.body;

    try {
        const newTask = await Task.create({ title, completed: false });

        //return the response
        res.status(201).json({ message: "Task has been created successfully", newTask });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}