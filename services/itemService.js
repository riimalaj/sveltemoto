import {Client}  from "https://deno.land/x/postgres@v0.13.0/mod.ts";

export const client = new Client({
    hostname: "abul.db.elephantsql.com",
    database: "lelmphiv",
    user: "lelmphiv",
    password: "HC2rLb4pLhUVhu3GszaBb0GfPPIkIhKz",
    port: 5432,
  });

const addIdea = async(idea, esittaja, ideaStatus, orderStatus, deliveredStatus) => {
    console.log('Syötetään lista tauluun -> ' +  idea + ", " + esittaja + ",ideaStatus-> " + ideaStatus, " ,orderStatus->" + orderStatus + ", deliveredStatus->" + deliveredStatus);
    await client.connect();
    await client.queryArray('INSERT INTO lista (toive, esittaja, ideaStatus, orderStatus, deliveredStatus) VALUES($1, $2, $3, $4, $5)', idea, esittaja, ideaStatus, orderStatus, deliveredStatus);
    await client.end();
    await fetchIdeas();
}


const fetchIdeas = async () => {
    console.log("ideoiden haku");
    await client.connect();
    const res = await client.queryArray('SELECT * from lista WHERE ideaStatus = true');
    await client.end();
    console.log("service retuning -> " + res.rows);
    return res.rows;
}

const changeOrderService = async() => {
    console.log("Switching boolean field values to indicate true for the orderedStatus");
    await client.connect();
    await client.queryArray("UPDATE ista SET ideaStatus = false, orderStatus = true, deliveredStatus = false");        
    await client.end();
    console.log("Boolean update done");    
}

const changeDeliveredService = async() => {
    console.log("Switching boolean field values to indicate true for the delivered ones");
    await client.connect();
    await client.queryArray("UPDATE ista SET ideaStatus = false, orderStatus = false, deliveredStatus = true");        
    await client.end();
    console.log("Boolean update done");    
}

const fetchOrders = async () => {
    console.log("Hankittujen haku");
    changeOrderService();
    await client.connect();
    const res = await client.queryArray('SELECT * from lista WHERE orderStatus = true');
    await client.end();
    console.log("service retuning -> " + res.rows);
    return res.rows;
}

const fetchDelivered = async () => {
    console.log("Hankittujen haku");
    changeDeliveredService();
    await client.connect();
    const res = await client.queryArray('SELECT * from lista WHERE deliveredStatus = true');
    await client.end();
    console.log("service retuning -> " + res.rows);
    return res.rows;
}


export {addIdea, fetchIdeas, fetchOrders, fetchDelivered, changeDeliveredService, changeOrderService};