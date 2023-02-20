const { Router } = require("express");

const userRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRouter = require("./tags.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router();

routes.use("/users" , userRoutes);
routes.use("/notes" , notesRoutes);
routes.use("/tags" , tagsRouter);
routes.use("/sessions" , sessionsRoutes);

module.exports = routes;
