import * as services from '../../services/collectionServices.js';
import { renderFile } from '../../deps.js';

const addTarget = async ({ request, response }) => {
    console.log('Korin lisäys');
    const body = request.body();
    const formData = await body.value;
    const t = formData.get('kori').trim();
    console.log(t);
    await services.addBasket(t);    
};

const getTarget = async ({ response }) => {    
    response.body = await renderFile('../views/index.eta', {
        collections : await services.getKorit(),
    });
  
};

export { addTarget, getTarget };
