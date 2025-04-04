elements.painkiller = {
    color: "#FFD700",
    behavior: behaviors.POWDER,
    category: "Medicine",
    state: "solid",
    tempHigh: 180,
    reactions: {
        "water": { elem1: "dissolved_painkiller", elem2: "water" },
    },
};

elements.dissolved_painkiller = {
    color: "#FFE135",
    behavior: behaviors.LIQUID,
    category: "Medicine",
    state: "liquid",
    tempHigh: 100,
};

elements.antibiotic = {
    color: "#32CD32",
    behavior: behaviors.POWDER,
    category: "Medicine",
    state: "solid",
    tempHigh: 200,
    reactions: {
        "bacteria": { elem1: null, elem2: "dead_bacteria" },
    },
};

elements.experimental_drug = {
    color: "#8A2BE2",
    behavior: behaviors.POWDER,
    category: "Medicine",
    state: "solid",
    tempHigh: 150,
    reactions: {
        "human": { elem1: "mutant_human", elem2: null },
    },
};

elements.mutant_human = {
    color: "#4B0082",
    behavior: behaviors.LIQUID,
    category: "Life",
    state: "liquid",
};
