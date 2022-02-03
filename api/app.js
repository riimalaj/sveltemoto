import { Application, oakCors} from "./deps.js";
import * as middleware from "./middleware/middleware.js";
import routes from "./routes/routes.js";

const app = new Application();

app.use(async (context, next) => {
    console.log(context.request.method + " " + context.request.url);
    await next();
});

app.use(oakCors());
app.use(middleware.errorMiddleware);
app.use(middleware.time);
app.use(routes);

export { app };
