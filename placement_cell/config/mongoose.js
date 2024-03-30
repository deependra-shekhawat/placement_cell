const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Company = require('../models/companySchema');
const Student = require('../models/studentSchema');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', async function () {
  try {
    // Check if data already exists in the database
    const existingStudents = await Student.find();
    const existingCompanies = await Company.find();

    if (existingStudents.length > 0 || existingCompanies.length > 0) {
      console.log('Sample data already exists. Skipping data addition.');
      throw Error; // Exit the script as data already exists
    }

    // Sample student data
    const studentsData = [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        college: 'XYZ University',
        placement: 'Placed',
        contactNumber: 1234567890,
        batch: 'Batch 1',
        dsa: 95,
        webd: 90,
        react: 85,
        interviews: [
          {
            company: 'Company A',
            date: '2023-12-20',
            result: 'Selected',
          },
        ],
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        college: 'ABC College',
        placement: 'Not Placed',
        contactNumber: 9876543210,
        batch: 'Batch 2',
        dsa: 85,
        webd: 80,
        react: 75,
        interviews: [
          {
            company: 'Company A',
            date: '2023-12-25',
            result: 'Pending',
          },
          {
            company: 'Company B',
            date: '2024-01-10',
            result: 'On Hold',
          },
        ],
      },
      // Add more student data as needed
      {
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        college: 'LMN Institute',
        placement: 'Placed',
        contactNumber: 2468013579,
        batch: 'Batch 2',
        dsa: 88,
        webd: 82,
        react: 79,
        interviews: [
          {
            company: 'Company C',
            date: '2024-02-15',
            result: 'Selected',
          },
        ],
      },
    ];

    // Sample company data
    const companiesData = [
      {
        name: 'Company A',
        students: [
          {
            studentEmail: 'johndoe@example.com',
            date: new Date('2023-12-20'),
            result: 'Selected',
          },
          {
            studentEmail: 'janesmith@example.com',
            date: new Date('2023-12-25'),
            result: 'Pending',
          },
          // Add more student-company mappings for Company A as needed
        ],
      },
      {
        name: 'Company B',
        students: [
          {
            studentEmail: 'janesmith@example.com',
            date: new Date('2024-01-10'),
            result: 'On Hold',
          },
          // Add more student-company mappings for Company B as needed
        ],
      },
      // Add more company data as needed
      {
        name: 'Company C',
        students: [
          {
            studentEmail: 'alicejohnson@example.com',
            date: new Date('2024-02-15'),
            result: 'Selected',
          },
          // Add more student-company mappings for Company C as needed
        ],
      },
    ];

    const savedStudents = await Student.create(studentsData);

    companiesData.forEach((company) => {
      company.students.forEach((studentInfo) => {
        const student = savedStudents.find((s) => s.email === studentInfo.studentEmail);
        if (student) {
          studentInfo.student = student._id;
        } else {
          console.error(`Student not found with email: ${studentInfo.studentEmail}`);
        }
      });
    });

    const savedCompanies = await Company.create(companiesData);

    console.log('Sample data added successfully!');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
});

db.once('open', function () {
  console.log('Connected to Database :: Mongodb');
});

module.exports = db;
