
import {client} from "../database/db.js";

const addIdea = async(idea, esittaja, ideaStatus, orderStatus, deliveredStatus) => {
    console.log('Syötetään lista tauluun -> ' +  idea + ", " + esittaja + ",ideaStatus-> " + ideaStatus, " ,orderStatus->" + orderStatus + ", deliveredStatus->" + deliveredStatus);
    await client.connect();
    await client.queryArray('INSERT INTO lista (toive, esittaja, ideastatus, orderstatus, deliveredstatus) VALUES($1, $2, $3, $4, $5)', idea, esittaja, ideaStatus, orderStatus, deliveredStatus);
    await client.end();
    await fetchIdeas();
}

const fetchIdeas = async () => {
    console.log("ideoiden haku");
    await client.connect();
    const res = await client.queryArray('SELECT * from lista WHERE ideaStatus = true');
    await client.end();
    console.log("Idea list following -> " + res.rows);
    return res.rows;
}

const changeOrderService = async(id) => {
    console.log("Starting to update ordered status values");
    await client.connect();
    await client.queryArray("UPDATE lista SET ideastatus = false, orderstatus = true, deliveredstatus = false WHERE id = $1", id);        
    await client.end();
    console.log("Fields updated");    
}

const changeDeliveredService = async(id) => {
    console.log("Updating table delivered status value");
    await client.connect();
    await client.queryArray("UPDATE lista SET ideastatus = false, orderstatus = false, deliveredstatus = true WHERE id = ", id);        
    await client.end();
    console.log("Fields updated");    
}

const fetchOrders = async (id) => {
    console.log("itemServices, fetchOrders");
    await changeOrderService(id);
    await client.connect();
    console.log("connected");
    const res = await client.queryArray('SELECT * from lista WHERE orderstatus = true');
    await client.end();
    return res.rows;
}

const fetchDelivered = async (id) => {
    console.log("Hankittujen haku");
    await changeDeliveredService(id);
    await client.connect();
    console.log("connected");
    const res = await client.queryArray('SELECT * from lista WHERE deliveredStatus = true');
    await client.end();
    return res.rows;
}

const deleteAll = async() => {
    await client.connect();
    await client.queryArray('DELETE FROM lista');
    await client.end();
}

export {addIdea, fetchIdeas, fetchOrders, fetchDelivered, changeDeliveredService, changeOrderService, deleteAll};