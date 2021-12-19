const giveService = () => {
    const ret = 'King Bah parturi Hyrylä (Tuusula), 20 euroa / leikkaus';
    console.log(ret);
    return ret;
};

const getResponse = async () => {
    const textResponse = await fetch('https://www.hs.fi/');
    var textData = await textResponse.text();
    return textData;
};

const updatePage = async() => {
//const fData = getResponse();
const fData = "ART is my thing";

if (fData.includes('ART')){
    console.log("1. " + fData);
    let newStr = fData.replace("ART", "Taide");
    console.log("2. " + newStr);

    const response = await fetch("https://happyskin.fi", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body:newStr
    });
}

}

export { giveService, getResponse, updatePage };
