

const addIdea = async(idea) => {
    console.log = "lisaaIdea"
    return "Idea " + idea + "lisätty (kantaan)";
}

const getNewIdea = async () => {
    console.log("ideoiden haku");
    return "idealista";
}

export {addIdea, getNewIdea};