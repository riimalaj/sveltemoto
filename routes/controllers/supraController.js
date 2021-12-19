import { renderFile as rf } from '../../deps.js';
import * as ss from '../../services/supraService.js';

const getService = async () => {
    response.body = await rf('../views/services.eta', {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
        },
        data: ss.giveService(),
    });
};

const showMain = async ({ response }) => {
    response.body = await rf('../views/main.eta');
    hello: 'Welcome dude';
};

const getData = async ({ response }) => {
    //console.log(response.body);

    response.body = await rf('../views/web.eta', {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
        data: await ss.getResponse(),
    });
};

const pushData = async () => {
    await ss.updatePage();
    console.log('controller, pushData');
};

export { showMain, getService, getData, pushData };
