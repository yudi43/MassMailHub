const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`-> Server is listening on port ${PORT}`);
});

// Log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});
