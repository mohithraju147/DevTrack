const express = require("express");

const router = express.Router();

const {
  getDeployments
} = require("../controllers/deploymentController");

router.get("/", getDeployments);

module.exports = router;