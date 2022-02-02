import { Router } from "../deps.js";
import * as item from "./apis/itemController.js";

debugger;

const router = new Router();

console.log("Code in router.js")
router.post("/", item.juuri);
router.get("/huolot", item.haeHuolot);
router.post("/lisaahuolto", item.addHuolto);

export default router.routes();
