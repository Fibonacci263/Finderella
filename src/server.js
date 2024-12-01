// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection string
// const dbURI = 'mongodb://localhost:27017/'; 

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Schema for Lost Items
// const lostItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   category: String,
//   location: String,
//   dateLost: String,
//   postedBy: String,
//   email: String,
//   phone: String,
//   status: String,
//   claimedBy: String,
// });

// // Model
// const LostItem = mongoose.model('LostItem', lostItemSchema);

// // Route to handle form submission (POST request)
// app.post('/api/lost-item', (req, res) => {
//   const { title, description, category, location, dateLost, postedBy, email, phone, status, claimedBy } = req.body;

//   const newLostItem = new LostItem({
//     title,
//     description,
//     category,
//     location,
//     dateLost,
//     postedBy,
//     email,
//     phone,
//     status,
//     claimedBy,
//   });

//   newLostItem.save()
//     .then(() => {
//       res.status(201).json({ message: 'Lost item saved successfully!' });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: 'Failed to save lost item' });
//     });
// });

// // Start server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
