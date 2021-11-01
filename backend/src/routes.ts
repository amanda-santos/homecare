import express from "express";
import CaregiversController from "./controllers/CaregiversController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const caregiversController = new CaregiversController();
const connectionsController = new ConnectionsController();

routes.get("/caregivers", caregiversController.index);
routes.post("/caregivers", caregiversController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
