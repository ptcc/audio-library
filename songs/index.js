const express = require("express");
const router = express.Router();
const { listRouteHandler } = require("./list");
const { metadataRequestHandler } = require("./metadata");
const { audioRequestHandler } = require("./audio");

router.get("/:file", metadataRequestHandler);
router.get("/:file/audio", audioRequestHandler);
router.get("/", listRouteHandler);

module.exports = router;
