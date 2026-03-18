const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rebate = sequelize.define('Rebate', {
    rebateId: {
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
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
        defaultValue: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = Rebate;