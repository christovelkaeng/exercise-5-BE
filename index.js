const express = require("express");
const bodyParser = require("body-parser");
const staticFiles = require("./middleware/staticFiles");
const fileUpload = require("./middleware/fileUpload");
const corsHandler = require("./middleware/corsHandler");
const morganLogger = require("./middleware/morganLogger");
const path = require("./middleware/path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(staticFiles);

app.use(fileUpload);

app.use(corsHandler);

app.use(morganLogger);

app.get("/data", (req, res) => {
  res.json({ message: "Data dari server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});