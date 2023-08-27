
const asyncHandler = require("express-async-handler")


const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all things" });
});

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get a thing for ${req.params.id}` });
});

const createContact = asyncHandler(async (req, res) => {
  console.log("Testing the: ", req.body);
  const {name, email, age} = req.body;

if (name || !email || !age) {
    res.status(404);
    throw new Error("All fields are required")
}

  res.status(201).json({ message: "Create a thing" });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update a thing for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(204).json({ message: `Delete a thing for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
