const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Models/db");
AuthRouter = require("./Routes/AuthRouter");
ProductRouter = require("./Routes/ProductRouter");

connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Use your auth router here
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, (err) => {
  if (err) {
    if (err.code === "EACCES") {
      console.error(
        `Permission denied. You need elevated privileges to bind to port ${PORT}.`
      );
    } else if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use.`);
    } else {
      console.error("Error starting server:", err);
    }
    process.exit(1);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});
