import * as services from '../../services/collectionServices.js';
import { renderFile } from '../../deps.js';

const addTarget = async ({ request, response }) => {
    console.log('Korin lisäys');
    const body = request.body();
    const formData = await body.value;
    const t = formData.get('kori').trim();
    console.log(t);
    await services.addBasket(t);
    response.redirect('/targets/');
};

const getTarget = async ({ request, response }) => {
    response.body = await renderFile('../../views/collections.eta', {
        collections: await services.getTargets(),
    });
    console.log('Target controller -> ' + response.body);
};

export { addTarget, getTarget };
