import express from "express"
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import path from "path"
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  location: String,
  email: String,
  phone: String,
  status: String, // "lost" or "found"
  imagePath: String,
  date: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes

// POST route for Lost Items
app.post("/api/lost", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, location, email, phone } = req.body;
    const lostItem = new Item({
      title,
      description,
      category,
      location,
      email,
      phone,
      status: "lost",
      imagePath: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await lostItem.save();
    res.status(201).json(lostItem);
  } catch (err) {
    res.status(500).json({ message: "Error saving lost item", error: err });
  }
});

// POST route for Found Items
app.post("/api/found", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, location, email, phone } = req.body;
    const foundItem = new Item({
      title,
      description,
      category,
      location,
      email,
      phone,
      status: "found",
      imagePath: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await foundItem.save();
    res.status(201).json(foundItem);
  } catch (err) {
    res.status(500).json({ message: "Error saving found item", error: err });
  }
});

// GET route to fetch all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching items", error: err });
  }
});


// GET route to fetch filtered items
app.get("/api/items", async (req, res) => {
  try {
    const { type, category } = req.query;

    const filters = {};
    if (type) filters.status = type; // Filter by type (lost or found)
    if (category) filters.category = category; // Filter by category

    const items = await Item.find(filters).sort({ date: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching items", error: err });
  }
});



// app.get("/api/items", async (req, res) => {
//     try {
//       const items = await Item.find().sort({ date: -1 }); // Most recent first
//       res.status(200).json(items);
//     } catch (err) {
//       res.status(500).json({ message: "Error fetching items", error: err });
//     }
//   });
  

// Start Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
