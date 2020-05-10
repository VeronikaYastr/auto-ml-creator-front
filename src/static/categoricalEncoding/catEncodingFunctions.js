import {functions} from "../stagesFunctions";

const stringIndexerOnSave = () => {
    const inputColumn = localStorage.getItem("strInd_inputColumn");
    const outputColumn = JSON.parse(localStorage.getItem("strInd_outputColumn"));
    const handleInvalid = localStorage.getItem("strInd_handleInvalid");
    const stringOrder = localStorage.getItem("strInd_stringOrder");
    functions.addStage({"id": 3, "type": "stringIndexer", inputColumn, outputColumn, handleInvalid, stringOrder});
    functions.addColumn(outputColumn);
    localStorage.removeItem("strInd_inputColumn");
    localStorage.removeItem("strInd_outputColumn");
    localStorage.removeItem("strInd_handleInvalid");
    localStorage.removeItem("strInd_stringOrder");
};

const stringIndexerOnCancel = () => {
    functions.removeFromAdditionalColumns(JSON.parse(localStorage.getItem("strInd_outputColumn")));
    localStorage.removeItem("strInd_inputColumn");
    localStorage.removeItem("strInd_outputColumn");
    localStorage.removeItem("strInd_handleInvalid");
    localStorage.removeItem("strInd_stringOrder");
    functions.removeStage(3);
};

const oneHotEncoderOnSave = () => {
    const inputColumn = localStorage.getItem("ohe_inputColumn");
    const outputColumn = localStorage.getItem("ohe_outputColumn");
    const handleInvalid = localStorage.getItem("ohe_handleInvalid");
    functions.addStage({"id": 4, "type": "oneHotEncoder", inputColumn, outputColumn, handleInvalid});
    functions.addColumn(outputColumn);
    localStorage.removeItem("ohe_inputColumn");
    localStorage.removeItem("ohe_outputColumn");
    localStorage.removeItem("ohe_handleInvalid");
};

const oneHotEncoderOnCancel = () => {
    functions.removeFromAdditionalColumns(JSON.parse(localStorage.getItem("ohe_outputColumn")));
    localStorage.removeItem("ohe_inputColumn");
    localStorage.removeItem("ohe_outputColumn");
    localStorage.removeItem("ohe_handleInvalid");
    functions.removeStage(4);
};

export const categoricalEncodingFunctions = {
    stringIndexerOnSave,
    stringIndexerOnCancel,
    oneHotEncoderOnSave,
    oneHotEncoderOnCancel
};