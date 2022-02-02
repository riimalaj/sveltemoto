import { Application, oakCors } from "../deps.js";
import * as middlewares from "./middlewares/middlewares.js";
import routes from "./routes/routes.js";

const app = new Application();
app.use(oakCors());

app.use(middlewares.errorMiddleware);
app.use(routes);

export { app };
