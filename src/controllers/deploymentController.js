const pool = require("../config/database");

const getDeployments = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM deployments"
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database Error"
    });
  }
};

module.exports = {
  getDeployments
};