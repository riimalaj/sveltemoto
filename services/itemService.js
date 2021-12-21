

const addIdea = async(params) => {
    console.log('Syötetään collection tauluun -> ' + params.idea + ", " + params.esittaja);
    await client.connect();
    await client.queryArray('INSERT INTO lista (name) VALUES($1, $2)', params.idea, params.esittaja);
    await client.end();
}

const fetchAll = async () => {
    console.log("ideoiden haku");
    await client.connect();
    const res = await client.queryArray('SELECT * from lista');
    await client.end();
    return res.rows;
}

export {addIdea, fetchAll};