import {Context} from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import * as itemServices from "../../services/itemServiceTryCatch.js";
import { renderFile } from "../../deps.js";

const getIdeas = async({response}) => {
    response.body = await renderFile("../views/ideas.eta", {
        ideas: await itemServices.fetchIdeas(),
    });
};

const getOrders = async({params, response}) => {        
    console.log("itemController, getOrders -> params.id = " + params.id);
    response.body = await renderFile("../views/orders.eta", {
        ordered: await itemServices.fetchOrders(params.id),
    });
};

const getDelivered = async({params, response}) => {    
        console.log("itemController, getDelivered -> params.id = " + params.id);
        response.body = await renderFile("../views/delivered.eta",{
        deliveries: await itemServices.fetchDelivered(params.id),
        });            
};

const doDelete = async ({response}) => {
    console.log("itemController, doDelete");
    response.body = await renderFile('../views/index.eta', {
        deleteResp : await itemServices.deleteAll(),
    });
    
    
}

export {showMain, getIdeas, getOrders, getDelivered, addIdea, doDelete};
