const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

// Log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`-> Server is listening on port ${PORT}`);
});
