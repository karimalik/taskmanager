import express, { Request, Response } from 'express';
import { env } from 'process';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello world' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
