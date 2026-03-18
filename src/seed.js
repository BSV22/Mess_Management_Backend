const sequelize = require('./config/db');
const Student = require('./models/Student');
const MessManager = require('./models/MessManager');
const Transaction = require('./models/Transaction');
const Rebate = require('./models/Rebate');

const seedData = async () => {
  try {
    // We use force: true here to reset the tables with our new columns (itemName, etc.)
    await sequelize.sync({ force: true }); 

    // 1. Create Test Student
    const student = await Student.create({
      rollNo: '240252',
      name: 'B Mahath',
      email: 'bmahath24@iitk.ac.in',
      password: 'password123',
      roomNo: 'B-101'
    });

    // 2. Create Test Manager
    await MessManager.create({
      adminId: 'ADMIN01',
      name: 'Siddhant Singh',
      password: 'adminpassword',
      role: 'Manager'
    });

    // 3. Create an "Extra Item" Transaction
    await Transaction.create({
      studentRollNo: '240252',
      amount: 25.00,
      type: 'Extra Item',
      itemName: 'Omelette',
      status: 'Completed'
    });

    // 4. Create a "Rebate" Request
    await Rebate.create({
      studentRollNo: '240252',
      startDate: '2026-04-01',
      endDate: '2026-04-05',
      reason: 'Going home for festival',
      status: 'Pending'
    });

    console.log('🌱 Database seeded with Extras and Rebates!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData();