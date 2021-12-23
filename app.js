import {
    Application,
    HttpServerStd,
    Router,
    Context,
} from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import routes from './routes/routes.js';
import { configure } from './deps.js';
import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";

configure({
    views: `${Deno.cwd()}/views/`,
});


const app = new Application({
    serverConstructor: HttpServerStd,
});

app.use(routes);

export {app};

/*
const handleRequest = async(request) =>{
    const url = new URL(request.url);

if (url.pathname === "/services" && request.method === "GET") {
    return new Response(`Redirecting to /services.`, {
      status: 303,
      headers: {
        "Location": "/services",
      },
    });
}
};

listenAndServe(":2000", handleRequest);
*/