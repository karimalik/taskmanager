import express, { Request, Response } from 'express';
import { env } from 'process';
import { sequelize } from './config/db';

const app = express();
const port = process.env.PORT || 4000;

//symchronize model with database
sequelize.sync().then(() => {
    console.log('Database synced!');
});

app.use(express.json());

//default route
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello world' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
