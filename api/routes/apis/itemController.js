import { Context } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import * as itemServices from "../../services/itemService.js";
import { renderFile } from "../../deps.js";
import { ensureDir, ensureFile, ensureFileSync } from "https://deno.land/std/fs/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";
import { getIP } from "https://deno.land/x/get_ip/mod.ts";
import { readLines } from "https://deno.land/std/io/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { readline } from "https://deno.land/x/readline@v1.1.0/mod.ts";

var temp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
var tDate = temp.replace(" ", "_").replace(":", "");
console.log("Dataa tiedostoon logs/appi_logs_" + tDate + ".log");

var log = [];

const showMain = async ({ response }) => {
    console.log("showMain called")
    response.body = await renderFile('../views/start.eta');
}


const addHuolto = async({ request, response }) =>{
    console.log("addHuollossa ollaan");
    const body = request.body({ type: "json" });
    const value = await body.value;
    const huolto = value.lHuolto;
    await todoService.create(huolto);
    response.status = 200;
}

const lisaaHuolto = async ({ request, response }) => {
    try {
        console.log("Huolon lisäys");
        const body = request.body();
        const formData = await body.value;
        const tyyppi = formData.get("mototyyppi");
        const huolto = formData.get("huolto");
        const hetki = formData.get("hetki");
        const sijainti = formData.get("sijainti");
        const huomiot = formData.get("huomiot");
        const huoltopvm = formData.get("hPVM");

        let lisaysStr = new Date() + ": Huolto lisätty seuraavilla parametreillä: " + tyyppi + ", " + huolto + ", " + hetki + ", " + sijainti + ", " + huomiot + ", " + huoltopvm;
        log.push(lisaysStr);
        loggaus(log);

        if (tyyppi != "" && huolto != "" && hetki != "" &&
            sijainti != "" && huomiot != "" && huoltopvm != "") {
            await itemServices.huoltoKantaan(tyyppi, huolto, hetki, sijainti, huomiot, huoltopvm);
        }
        response.redirect('/huolot');
    }
    catch (err) {
        console.log("Controller error, ", err);
        const errorNote = new Date() + "_error: " + err;
        log.push(errorNote);
        loggaus(log);

    }
};


const haeHuolot = async ({ request, response }) => {
        response.body = await itemServices.huolot();
};

const showLogFile = async ({ response }) => {
    console.log("itemController, showLogFile")
    const data = await Deno.readTextFile("logs/appi_logs.log")
    console.log(data)
    response.body = await renderFile('../views/logReader.eta', {
        content: data,
        newLine: "\n",
    });
}

//https://deno.land/x/readline@v1.1.0
const showLogFileNotWorking = async ({ response }) => {
    console.log("showLogFile")
    const f = await Deno.open("logs/appi_logs.log");
    for await (const line of readline(f)) {
        response.body = await renderFile('../views/logReader.eta', {
            content: `${new TextDecoder().decode(line)}`,
        });
    }
    f.close();
}

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

export { showMain, haeHuolot, lisaaHuolto, showLogFile, loggaus, addHuolto };



