import { Router } from '../deps.js';
import * as sc from './controllers/supraController.js';

const router = new Router();

router.get('/', sc.showMain);
router.get('/services', sc.getService);

export default router.routes();
