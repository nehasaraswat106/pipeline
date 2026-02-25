const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Pipeline is Working Successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

"scripts": {
  "start": "node index.js"
}