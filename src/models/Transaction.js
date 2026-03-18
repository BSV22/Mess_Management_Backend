const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
    transactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentRollNo: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Students',
            key: 'rollNo'
        }
    },
    
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('Monthly Fee', 'Extra Item', 'Rebate'),
        allowNull: false
    },
    
    itemName: {
        type: DataTypes.STRING, // e.g., "Extra Egg", "Special Sweet"
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Completed', 'Failed'),
        defaultValue: 'Completed'
    }
});

module.exports = Transaction;