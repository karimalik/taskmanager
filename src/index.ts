import express, { Request, Response } from 'express';
import { sequelize } from './config/db';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = process.env.PORT || 4000;

//symchronize model with database
sequelize.sync().then(() => {
    console.log('Database synced!');
});

app.use(express.json());
app.use('tasks', taskRoutes);

//default route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
