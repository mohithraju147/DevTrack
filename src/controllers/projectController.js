const getProjects = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "DevTrack",
      status: "active"
    }
  ]);
};

module.exports = {
  getProjects
};