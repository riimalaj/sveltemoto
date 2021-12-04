import { renderFile as rf } from '../../deps.js';
import * as ss from '../../services/supraService.js';

const getService = async ({ response }) => {
    response.body = await rf('../views/services.eta', {
        data: await ss.giveService(),
    });
};

const showMain = async ({ response }) => {
    response.body = await rf('../views/main.eta');
};

export { showMain, getService };
