import {client} from "../database/db.js";

//const databaseUrl = Deno.env.get("DATABASE_URL");


const huoltoKantaan = async(tyyppi, huolto, hetki, sijainti, huomiot) => {
    console.log('Syötetään huolto');
    await client.connect();
    await client.queryArray('INSERT INTO motoService (moto, maint, moment, location, notes) VALUES($1, $2, $3, $4, $5)', tyyppi, huolto, hetki, sijainti, huomiot);
    await client.end();
    await huolot();
}

const huolot = async () => {
    console.log("Huoltojen haku");
    await client.connect();
    const res = await client.queryArray('SELECT * from motoService ORDER BY created_at ASC');
    await client.end();
    console.log("Huolot -> " + res.rows);
    return res.rows;
}

export {huoltoKantaan, huolot};