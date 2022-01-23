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


const lisaaHuolto = async ({ request, response }) => {
    try {
        console.log("Huolon lisäys");
        const body = request.body();
        const formData = await body.value;
        const tyyppi = formData.get("mototyyppi").trim();
        const huolto = formData.get("huolto").trim();
        var hetki = formData.get("hetki");
        var sijainti = formData.get("sijainti");
        var huomiot = formData.get("huomiot");
        let huoltopvm = formData.get("hPVM");
        console.log("huoltopvm " + huoltopvm);
        await itemServices.huoltoKantaan(tyyppi, huolto, hetki, sijainti, huomiot, huoltopvm);
        response.redirect('/huolot');
        
        const note = new Date() + " huolto lisätty.";
        log.push(note);
        console.log("notena -> " + note);
        loggaus(note);
        
    }
    catch (err) {
        console.log("Error when trying to input data from controller");
        const note = new Date() + "_error: " + err;
        log.push(note);
        loggaus();
    }
};

const haeHuolot = async ({ response }) => {
    response.body = await renderFile("../views/huolot.eta", {
        huolot: await itemServices.huolot(),        
    });
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


const loggaus = async (note) => {
    console.log("loggaus funktioata kutsuttu")
    ensureDir("./logs")
        .then(() => {

            let location = "./logs/appi_logs.log";
            Deno.writeTextFile(location, note + "\n\n", { "append": true });
            /*
            for (let i of log) {
                console.log(i);
                Deno.writeTextFile(location, i + "\n\n", { "append": true });
            }
            */

        });    
}




export { showMain, haeHuolot, lisaaHuolto, showLogFile };



