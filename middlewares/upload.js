const { Module } = require("module");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "users-app/public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
