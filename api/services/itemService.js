import {executeQuery} from "../database/database.js";
//import { Client } from "https://deno.land/x/postgres@v0.14.3/mod.ts";

//const client = new Client();

const create = async (moto, huolto, paikka, notet, tehty) => {
    console.log("itemService, create. Parametrit:", moto + ", " + huolto + ", " + paikka + ", " + notet + ", " + tehty)
    //await client.connect();    
    const res = await executeQuery(
      `INSERT INTO huoltorekisteri (moto, huolto, paikka, notet, tehty) VALUES ($1, $2, $3, $4, $5)`,
    moto, huolto, paikka, notet, tehty
    );
    //await client.end();
    return res.rows;
  };

const huolot = async () => {
    console.log("Huoltojen haku");    
    //await client.connect();
    const res = await executeQuery('SELECT * from huoltorekisteri ORDER BY luotu ASC');    
    console.log(res);
    if ( res.rows === "" ){
      console.log("Ei huoltoja");
      //res.rows[0] = "empty table";
    }
    //await client.end();
    return res.rows;
}

const poistaRivi = async (tuhottavaRivi) => {
  const nroRows = await executeQuery("DELETE FROM huoltorekisteri WHERE id = ($1)", tuhottavaRivi);
  return nroRows;
}

const poistaKaikkiRecordit = async () => {
  const nroRows = await executeQuery("DELETE FROM huoltorekisteri");
  return nroRows;
}


export {huolot, create, poistaRivi, poistaKaikkiRecordit};