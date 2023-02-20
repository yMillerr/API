const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");


const tagsController = new TagsController();

tagsRoutes.get("/" , ensureAuthenticated ,tagsController.index)

module.exports = tagsRoutes;