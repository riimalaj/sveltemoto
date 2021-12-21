import {Client}  from "https://deno.land/x/postgres@v0.13.0/mod.ts";
import { executeQuery } from '../database/database.js';


export const client = new Client({
  hostname: "abul.db.elephantsql.com",
  database: "lelmphiv",
  user: "lelmphiv",
  password: "HC2rLb4pLhUVhu3GszaBb0GfPPIkIhKz",
  port: 5432,
});


export const addBasket = async (data) => {
    console.log('Syötetään collection tauluun -> ' + data);
    await client.connect();
    await client.queryArray('INSERT INTO collections (name) VALUES($1)', data);
    await client.end();
};

export const getKorit = async () => {
    console.log('Haetaan korit kannasta');
    
    await client.connect();
    const result = await client.queryArray('SELECT * FROM collections');
    await client.end();
    result.rows.forEach((row) => {
        console.log(row[1]);
      });
    return result.rows;
    
};
