import { Application, oakCors} from "../deps.js";
import * as middleware from "./middleware/middleware.js";


import routes from "./routes/routes.js";
const app = new Application();

app.use(oakCors());
app.use(middleware.errorMiddleware);
app.use(routes);

export { app };
