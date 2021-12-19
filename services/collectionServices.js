import { executeQuery } from '../database/database.js';

export const addBasket = async (data) => {
    console.log('Syötetään collection tauluun -> ' + data);
    await executeQuery('INSERT INTO collections (name) VALUES($1)', data);
};

export const getTargets = async () => {
    console.log('Haetaan korit kannasta');
    const res = await executeQuery('SELECT * FROM collections');
    if (res.error) {
        console.log('Datan hakemisessa ongelmia');
    } else if (res.rows === 0) {
        console.log('No rows dude...');
        return 'no rows dude';
    } else {
        console.log('Returning rows, if any');
        return res.rows;
    }
};
