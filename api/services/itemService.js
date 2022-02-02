import {executeQuery} from "../database/database1.js";

const create = async (moto) => {
    console.log("create");
    const res = await executeQuery(
      `INSERT INTO motoService (moto) VALUES ($1)`,
    moto
    );

    return res.rows;
  };

const huolot = async () => {
    console.log("Huoltojen haku");    
    const res = await executeQuery('SELECT * from motoService ORDER BY maintdate ASC');    
    console.log("Huolot -> " + res.rows);
    return res.rows;
}

export {huolot, create};