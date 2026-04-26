import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

// SHOW ALL
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("students/index", { students });
});

// CREATE
router.post("/", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/view/students");
});

// EDIT PAGE
router.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("students/edit", { student });
});

// UPDATE
router.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/view/students");
});

// DELETE
router.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/view/students");
});

export default router;