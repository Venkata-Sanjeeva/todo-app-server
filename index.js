const express = require("express");
const app = express();
const cors = require("cors"); 
const mongoose = require("mongoose");
const path = require("path")
const router = require("./routes/taskRoute")

const notFound = require("./middleware/notFound")
// used to send request from any server
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data

// Connecting to MongoDB
const dbUrl = "mongodb+srv://kuntumallavenkatasanjeeva2005:Sanjeeva%40123@nodetuts.gzjrr.mongodb.net/augmentixtodoapp?retryWrites=true&w=majority&appName=nodetuts";

mongoose.connect(dbUrl)
  .then(() => {
    // console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log("Listening on port 5000");
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Handle connection to the server

// Serve the HTML documentation on the base URL "/documentation"
const documentation = (req, res) => {
  res.sendFile(path.join(__dirname, "src", "public",'documentation.html'));
}

app.use("/api/documentation", documentation)

app.use("/api", router)

app.use(notFound);
// Get all tasks from the database

// Upload task to the database (should be POST) 

// Update task in the database

// Delete task from the database