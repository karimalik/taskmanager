import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Task extends Model {
    public id!: number;
    public title!: string;
    public completed!: boolean;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },

        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }

    },

    {
        modelName: 'tasks',
        sequelize,
    }
);

export default Task;