"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";
const config = require(__dirname + '/../config/config.json')[process.env.NODE_ENV || 'development']
const db = new Sequelize(config.database, config.username, config.password, config)

type UserAttributes = {
  id: number;
  name: string;
  salary: number;
  department: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
    // name: string;
    // salary: any;
    // department: any;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize : db, //a sequelize object
    modelName: "User",
    tableName:"Users",
    timestamps: false,
  }
);

export default User;
