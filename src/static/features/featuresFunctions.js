import {functions} from "../stagesFunctions";

const vectorAssemblerOnSave = () => {
    const inputColumns = JSON.parse(localStorage.getItem("vectAss_inputColumns"));
    const outputColumn = JSON.parse(localStorage.getItem("vectAss_outputColumn"));
    const handleInvalid = localStorage.getItem("vectAss_handleInvalid");
    functions.addStage({"id": 5, "type": "vectorAssembler", inputColumns, outputColumn, handleInvalid});
    functions.addColumn(outputColumn);
    localStorage.removeItem("vectAss_inputColumns");
    localStorage.removeItem("vectAss_outputColumn");
    localStorage.removeItem("vectAss_handleInvalid");
};

const vectorAssemblerOnCancel = () => {
    functions.removeFromAdditionalColumns(JSON.parse(localStorage.getItem("vectAss_outputColumn")));
    localStorage.removeItem("vectAss_inputColumns");
    localStorage.removeItem("vectAss_outputColumn");
    localStorage.removeItem("vectAss_handleInvalid");
    functions.removeStage(5);
};

export const featuresFunctions = {
    vectorAssemblerOnSave,
    vectorAssemblerOnCancel
};