import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';
import data from './data.js';
import config from './config.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany();
    console.log('Existing products removed');

    // Insert products from data.js
    await Product.insertMany(data.products);
    console.log('Products added successfully');

    // Exit the process
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();