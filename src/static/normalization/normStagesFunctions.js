import {functions} from "../stagesFunctions";

const normalizerOnSave = () => {
    const inputColumn = localStorage.getItem("norm_inputColumn");
    const outputColumn = localStorage.getItem("norm_outputColumn");
    const norm = localStorage.getItem("norm_norm");
    functions.addStage({"id": 1, "type": "normalization", inputColumn, outputColumn, norm});
    functions.addColumn(outputColumn);
    localStorage.removeItem("norm_inputColumn");
    localStorage.removeItem("norm_outputColumn");
    localStorage.removeItem("norm_norm");
};

const normalizerOnCancel = () => {
    functions.removeFromAdditionalColumns(JSON.parse(localStorage.getItem("norm_outputColumn")));
    localStorage.removeItem("norm_inputColumn");
    localStorage.removeItem("norm_outputColumn");
    localStorage.removeItem("norm_norm");
    functions.removeStage(1);
};

const stScalerOnSave = () => {
    const inputColumn = localStorage.getItem("stSc_inputColumn");
    const outputColumn = localStorage.getItem("stSc_outputColumn");
    let withStd = localStorage.getItem("stSc_withStd");
    withStd = withStd === null ? false : withStd;
    let withMean = localStorage.getItem("stSc_withMean");
    withMean = withMean === null ? false : withMean;
    functions.addStage({"id": 2, "type": "standardScaler", inputColumn, outputColumn, withStd, withMean});
    functions.addColumn(outputColumn);
    localStorage.removeItem("stSc_inputColumn");
    localStorage.removeItem("stSc_outputColumn");
    localStorage.removeItem("stSc_withStd");
    localStorage.removeItem("stSc_withMean");
};

const stScalerOnCancel = () => {
    functions.removeFromAdditionalColumns(JSON.parse(localStorage.getItem("stSc_outputColumn")));
    localStorage.removeItem("stSc_inputColumn");
    localStorage.removeItem("stSc_outputColumn");
    localStorage.removeItem("stSc_withStd");
    localStorage.removeItem("stSc_withMean");
    functions.removeStage(2);
};

export const normalizationFunctions = {
    normalizerOnSave,
    normalizerOnCancel,
    stScalerOnCancel,
    stScalerOnSave
};