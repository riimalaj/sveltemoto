import { Context } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import * as service from "../../services/itemService.js";
import { ensureDir, ensureFile, ensureFileSync } from "https://deno.land/std/fs/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";
import { readline } from "https://deno.land/x/readline@v1.1.0/mod.ts";

var temp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
var tDate = temp.replace(" ", "_").replace(":", "");
console.log("Dataa tiedostoon logs/appi_logs_" + tDate + ".log");

var log = [];

const addHuolto = async({ request, response }) =>{
    console.log("addHuollossa ollaan");
    const body = request.body({ type: "json" });
    const value = await body.value;
    const huolto = value.lHuolto;
    await service.create(huolto);
    response.status = 200;
}

const haeHuolot = async ({ request, response }) => {
        response.body = await service.huolot();
};

const loggaus = async (log) => {
    console.log("loggaus funktioata kutsuttu");
    ensureDir("./logs")
        .then(() => {
            let location = "./logs/appi_logs.log";
            for (let i of log) {
                console.log(i);
                Deno.writeTextFile(location, i + "\n\n", { "append": true });
            }
        });
}

export { addHuolto, haeHuolot, loggaus };



