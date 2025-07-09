const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./src/db/db");
const noteModel = require("./src/models/note.model");
dotenv.config();

const app = express();
app.use(express.json());
connectToDb();

// add data to database!
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({
    title: title,
    content: content,
  });
  res.json({
    message: "note created!",
  });
});
// show or fetch data from database ,
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: "notes fetched successfully!",
    notes: notes,
  });
});

// delete data from database
app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  await noteModel.findByIdAndDelete(id);
  res.json({
    message: "note deleted successfully!",
  });
});

// update data to database
app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await noteModel.findByIdAndUpdate(id, req.body);
  res.json({
    message: "note updated successfully!",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
