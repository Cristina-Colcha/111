const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://admin:1751404730@98.82.9.250:27017/calculator?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected to EC2');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
