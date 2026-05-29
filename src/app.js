const express = require("express");

const app = express();

const projectRoutes = require("./routes/projectRoutes");
const healthRoutes = require("./routes/healthRoutes");

app.use(express.json());

app.use("/projects", projectRoutes);
app.use("/health", healthRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "DevTrack API Running 🚀"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});