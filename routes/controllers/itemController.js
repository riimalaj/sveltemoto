import { Context } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import * as itemServices from "../../services/itemService.js";
import { renderFile } from "../../deps.js";
import { ensureDir } from "https://deno.land/std@0.54.0/fs/ensure_dir.ts";


var error = [];

const showMain = async ({ response }) => {
    response.body = await renderFile('../views/start.eta');
};

const addIdea = async ({ request, response }) => {
    try {
        console.log("Idean lisäys");
        const body = request.body();
        const formData = await body.value;
        const idea = formData.get("toive").trim();
        const esittaja = formData.get("esittaja").trim();
        var ideaStatus = Boolean(true);
        var orderStatus = Boolean(false);
        var deliveredStatus = Boolean(false);
        console.log('itemController -> ' + idea + ", " + esittaja + ",ideaStatus-> " + ideaStatus, " ,orderStatus->" + orderStatus + ", deliveredStatus->" + deliveredStatus);
        await itemServices.addIdea(idea, esittaja, ideaStatus, orderStatus, deliveredStatus);
        response.redirect('/ideas');
    }
    catch (err) {
        error.push(err);
    }
};

const getIdeas = async ({ response }) => {
    response.body = await renderFile("../views/ideas.eta", {
        ideas: await itemServices.fetchIdeas(),
    });
};

const getOrders = async ({ params, response }) => {
    try {
        console.log("itemController, getOrders -> params.id = " + params.id);
        response.body = await renderFile("../views/orders.eta", {
            ordered: await itemServices.fetchOrders(params.id),
        });
    }
    catch (err) {
        error.push(err);
    }
};

const getDelivered = async ({ params, response }) => {
    try {
        console.log("itemController, getDelivered -> params.id = " + params.id);
        response.body = await renderFile("../views/delivered.eta", {
            deliveries: await itemServices.fetchDelivered(params.id),
        });
    }
    catch (err) {
        error.push(err);
    }

};

const doDelete = async ({ response }) => {
    try {
        console.log("itemController, doDelete");
        response.body = await renderFile('../views/index.eta', {
            deleteResp: await itemServices.deleteAll(),
        });
    }
    catch (err) {
        error.push(err);
    }
}

const today = Date.now();

ensureDir("./errors")
.then(() => Deno.writeTextFile("./errors/appi_errors_" + Date() + ".log", error));


export { showMain, getIdeas, getOrders, getDelivered, addIdea, doDelete };
