
import * as itemServices from "../../services/itemService.js";
import { renderFile } from "../../deps.js";



const showMain = async ({ response }) => {
    response.body = await renderFile('../views/start.eta', {
        hello : "Hello"
    });    
};


const addIdea = async({request, response}) => {
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
};

const getIdeas = async({response}) => {
    response.body = await renderFile("../views/ideas.eta", {
        ideas: await itemServices.fetchIdeas(),
    });
};

const getOrders = async({response}) => {    
    response.body = await renderFile("../views/orders.eta",{
    ordered: itemServices.fetchOrders(),
    });    
    //response.redirect("/ordered");
};

const getDelivered = async({response}) => {
    response.body = await renderFile("../views/delivered.eta",{
    delivered: itemServices.fetchDelivered(),
    });
    console.log(response.body);
};

const doDelete = async () => {
    await itemServices.deleteAll();
    console.log("All data erased");
    return new Response(await renderFile('index.eta', "Data erased"));
}

export {showMain, getIdeas, getOrders, getDelivered, addIdea, doDelete};