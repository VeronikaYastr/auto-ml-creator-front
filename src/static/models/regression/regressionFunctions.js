const normalizerOnSave = () => {
    const inputColumn = localStorage.getItem("inputColumn");
    const outputColumn = localStorage.getItem("outputColumn");
    const norm = localStorage.getItem("norm");
    addStage({"id": 1, "type": "normalization", inputColumn, outputColumn, norm});
    localStorage.removeItem("inputColumn");
    localStorage.removeItem("outputColumn");
    localStorage.removeItem("norm");
};

const normalizerOnCancel = () => {
    localStorage.removeItem("inputColumn");
    localStorage.removeItem("outputColumn");
    localStorage.removeItem("norm");
    removeStage(1);
};

const stScalerOnSave = () => {
    const inputColumn = localStorage.getItem("inputColumn");
    const outputColumn = localStorage.getItem("outputColumn");
    let withStd = localStorage.getItem("withStd");
    withStd = withStd === null ? false : withStd;
    let withMean = localStorage.getItem("withMean");
    withMean = withMean === null ? false : withMean;
    addStage({"id": 2, "type": "standardScaler", inputColumn, outputColumn, withStd, withMean});
    localStorage.removeItem("inputColumn");
    localStorage.removeItem("outputColumn");
    localStorage.removeItem("withStd");
    localStorage.removeItem("withMean");
};

const stScalerOnCancel = () => {
    localStorage.removeItem("inputColumn");
    localStorage.removeItem("outputColumn");
    localStorage.removeItem("withStd");
    localStorage.removeItem("withMean");
    removeStage(2);
};

export const functions = {
    normalizerOnSave,
    normalizerOnCancel,
    stScalerOnCancel,
    stScalerOnSave
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