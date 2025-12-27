const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("App is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
