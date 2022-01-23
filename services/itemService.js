import {client} from "../database/db.js";

//const databaseUrl = Deno.env.get("DATABASE_URL");


const huoltoKantaan = async(tyyppi, huolto, hetki, sijainti, huomiot, huoltopvm) => {
    console.log('Syötetään huolto, itemservice');
    console.log("tyyppi:", tyyppi);
    console.log("huolto:", huolto);
    console.log("hetki:", hetki);
    console.log("sijainti:", sijainti);
    console.log("huomiot:", huomiot);
    console.log("huoltopvm:", huoltopvm);
    await client.connect();
    await client.queryArray('INSERT INTO motoService (moto, maint, moment, location, notes, maintdate) VALUES($1, $2, $3, $4, $5, $6)', tyyppi, huolto, hetki, sijainti, huomiot, huoltopvm);
    await client.end();
    console.log('insert executed');
    await huolot();
}

const huolot = async () => {
    console.log("Huoltojen haku");
    await client.connect();
    const res = await client.queryArray('SELECT * from motoService ORDER BY maintdate ASC');
    await client.end();
    console.log("Huolot -> " + res.rows);
    return res.rows;
}

export {huoltoKantaan, huolot};