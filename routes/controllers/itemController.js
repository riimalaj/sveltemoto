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
    response.body = await renderFile('../views/start.eta', {
        ip: await getIP({ ipv6: true }),
    });
};


const addIdea = async ({ request, response }) => {
    try {
        console.log("Idean lisäys");
        const body = request.body();
        const formData = await body.value;
        const idea = formData.get("toive").trim();
        const esittaja = formData.get("esittaja").trim();
        var ideaStatus = Boolean(true);
        var orderStatus = Boolean(false);
        var deliveredStatus = Boolean(false);
        console.log('itemController -> ' + idea + ", " + esittaja + ",ideaStatus-> " + ideaStatus, " ,orderStatus->" + orderStatus + ", deliveredStatus->" + deliveredStatus);
        await itemServices.addIdea(idea, esittaja, ideaStatus, orderStatus, deliveredStatus);
        response.redirect('/ideas');
        const note = new Date() + " " + idea + " added.";
        log.push(note);

        console.log("notena -> " + note);

        loggaus(log);

    }
    catch (err) {
        const note = new Date() + "_error: " + err;
        log.push(note);
        loggaus();
    }
};

const getIdeas = async ({ response }) => {
    response.body = await renderFile("../views/ideas.eta", {
        ideas: await itemServices.fetchIdeas(),
    });
};

const getOrders = async ({ params, response }) => {
    console.log("itemController, getOrders -> params.id = " + params.id);
    response.body = await renderFile("../views/orders.eta", {
        ordered: await itemServices.fetchOrders(params.id),
    });
};

const getDelivered = async ({ params, response }) => {
    console.log("itemController, getDelivered -> params.id = " + params.id);
    response.body = await renderFile("../views/delivered.eta", {
        deliveries: await itemServices.fetchDelivered(params.id),
    });
};

const doDelete = async ({ response }) => {
    console.log("itemController, doDelete");
    response.body = await renderFile('../views/index.eta', {
        deleteResp: await itemServices.deleteAll(),
    });
}

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
    console.log("loggaus funktioata kutsuttu")
    ensureDir("./logs")
        .then(() => {

            let location = "./logs/appi_logs.log";

            for (let i of log) {
                console.log(i);
                Deno.writeTextFile(location, i + "\n\n", { "append": true });
            }

        });
    console.log("Logs hakemistossa on yksityiskohdat ideoiden lisäämistä.");
}




export { showMain, getIdeas, getOrders, getDelivered, addIdea, doDelete, showLogFile };



