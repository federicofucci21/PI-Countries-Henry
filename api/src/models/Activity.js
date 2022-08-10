const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha: true,
            notNull: true,
            notEmpty: true,
        }
        
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 1,
            max: 5,
            notNull: true,
            isNumeric: true,
        }
        },
    duration: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notNull: true,
            isNumeric: true,
        }

        },
    season: {
        type: DataTypes.ENUM('Summer','Autumn', 'Winter','Spring'),
        allowNull:false,
        validate:{
            isAlpha: true,
            notNull: true,
            notEmpty: true,
        }
        },
    }, {timestamps:false});
};
