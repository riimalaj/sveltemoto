import { giveService } from '../services/supraService.js';
import { superoak } from '../deps.js';
import { app } from '../app.js';

Deno.test({
    name: 'Testing root',
    async fn() {
        const request = await superoak(app);
        await request.get('/services').expect(200);
    },
    sanitizeOps: false,
    sanitizeResource: false,
});

Deno.test({
    name: 'Testing giveService',
    async fn() {
        const ret = giveService();
        if (ret.includes('King')) {
            var vast = true;
            //assertEquals
        }
    },
    sanitizeOps: false,
    sanitizeResource: false,
});
