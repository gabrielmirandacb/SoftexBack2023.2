import { Application } from "express";
import homeRoutes from "./home.routes";
import salaRoutes from "./sala.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/coworking", homeRoutes);
    app.use("/coworking", salaRoutes);

  }
}