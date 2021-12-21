
import * as itemServices from "../../services/itemService.js";
import { renderFile } from "../../deps.js";



const showMain = async ({ response }) => {
    response.body = await renderFile('../views/layouts.eta', {
        hello : "Hello"
    });    
};


const addIdea = async({request, response}) => {
    console.log("Idean lisäys");
    const body = request.body();    
    const formData = await body.value;
    const idea = formData.get("idea").trim();
    const esittaja = formData.get("esittaja").trim();
    var ideaStatus = Boolean(true);
    var orderStatus = Boolean(false);
    var deliveredStatus = Boolean(false);
    console.log('itemController -> ' + idea + ", " + esittaja + ",ideaStatus-> " + ideaStatus, " ,orderStatus->" + orderStatus + ", deliveredStatus->" + deliveredStatus);
    await itemServices.addIdea(idea, esittaja, ideaStatus, orderStatus, deliveredStatus);
};

const getIdeas = async({response}) => {
    response.body = await renderFile("../views/ideas.eta", {
        ideas: await itemServices.fetchIdeas(),
    });
    response.redirect("/ideas");
};

//While fetching orders, changing boolean field flags
const getOrders = async({response}) => {
    Response.body = await renderFile("../views/orders.eta",{
    ordered : itemServices.fetchOrders(),
    });
    response.redirect("/ordered/");
};

//While fetching orders, changing boolean field flags
const getDelivered = async({response}) => {
    Response.body = await renderFile("../views/delivered.eta",{
    delivered : itemServices.fetchDelivered(),
    });
    response.redirect("/delivered/");
};



export {showMain, getIdeas, getOrders, getDelivered, addIdea};