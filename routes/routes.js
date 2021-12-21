import { Router } from '../deps.js';
import * as item from './controllers/itemController.js';
import * as collection from './controllers/targetController.js';

const router = new Router();



//router.post('/add', collection.addTarget);
//router.get('/getTargets', collection.getTarget);
router.get('/', item.showMain);
router.get('/ideas', item.getIdeas);
router.post('/ideas', item.addIdea);

router.get("/orders", item.getOrders);

router.get('/delivered', item.getDelivered());

export default router.routes();
