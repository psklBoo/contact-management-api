const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/api/contacts", contactRoutes);

app.listen(process.env.PORT, () => {
console.log(`Server running on port ${process.env.PORT}`);
});