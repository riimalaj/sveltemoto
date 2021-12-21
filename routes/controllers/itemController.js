
import * as itemServices from "../../services/itemService.js";
import { renderFile } from "../../deps.js";


const showMain = async ({ response }) => {
    response.body = await rf('../views/index.eta');
    hello: 'Welcome';
};

const addItem = async({request, params, response}) => {
    console.log("Idean lisäys");
    const body = request.body();
    const formData = await body.value;
    const idea = formData.get("toive").trim();
    const esittaja = formData.get("esittaja").trim();
    console.log(idea +  ", " + esittaja);
    await itemServices.addIdea(params.idea, params.esittaja);
    response.redirect("/ideas/");
};

const getIdeas = async() => {
    response.body = await renderFile("../views/index.eta", {
        ideat: await itemServices.getNewIdea(),
      });

    response.redirect("/ideaa/");
};

const getOrders = async() => {
    Response.body = "Tilatut";
    response.redirect("/ordered/");
};

const getDelivered = async() => {
    Response.body = "Toimitetut";
    response.redirect("/delivered/");
};



export {showMain, getIdeas, getOrders, getDelivered, addItem};