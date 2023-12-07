import express, { Request, Response } from 'express';
import { sequelize } from './config/db';
import taskRoutes from './routes/taskRoutes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = process.env.PORT || 4000;

//symchronize model with database
sequelize.sync().then(() => {
    console.log('Database synced!');
});

app.use(express.json());

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'Your API Description',
        },
    },
    apis: ['./routes/*.ts'], // Specify the path to your route files
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use task routes
app.use('tasks', taskRoutes);

//default route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
