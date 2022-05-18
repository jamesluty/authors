const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "authors_db"

// MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// import mongoose server and routes
require("./config/mongoose.config")(DB);
require("./routes/author.routes")(app);

// server listening on server
app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));