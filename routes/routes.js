import { Router } from '../deps.js';
import * as sc from './controllers/supraController.js';
import * as item from './controllers/itemController.js';
import * as collection from './controllers/targetController.js';

const router = new Router();

/*
router.get('/', sc.showMain);
router.get('/services', sc.getService);
router.get('/response', sc.getData);
router.post('/push', sc.pushData);
router.post('/add', collection.addTarget);
router.get('/getTargets', collection.getTarget);
*/

router.post('/idea', item.addItem);

export default router.routes();
