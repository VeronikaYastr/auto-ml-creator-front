const normalizerOnSave = () => {
    const inputColumn = localStorage.getItem("inputColumn");
    const outputColumn = localStorage.getItem("outputColumn");
    const norm = localStorage.getItem("norm");
    addStage({"id": 1, inputColumn, outputColumn, norm});
    localStorage.removeItem("inputColumn");
    localStorage.removeItem("outputColumn");
    localStorage.removeItem("norm");
};

const normalizerOnCancel = () => {
    removeStage(1);
};

export const functions = {
    normalizerOnSave,
    normalizerOnCancel
};

const addStage = (stage) => {
    let stages = JSON.parse(localStorage.getItem("stages"));
    if (stages === null || stages === undefined) {
        stages = [];
    }
    stages.push(stage);
    localStorage.setItem("stages", JSON.stringify(stages));
};

const removeStage = (id) => {
    let stages = JSON.parse(localStorage.getItem("stages"));
    if (stages !== null && stages !== undefined) {
        localStorage.setItem("stages", JSON.stringify(stages.filter(x => x.id !== id)));
    }
};