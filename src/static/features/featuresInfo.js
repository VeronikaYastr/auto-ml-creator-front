import React from "react";
import titles from "../text";
import {featuresFunctions} from "./featuresFunctions";
import VectorAssembler from "../../components/steps/stages/features/VectorAssembler";

const featuresStages = [
    {
        "title": "VectorAssembler",
        "description": titles.vectorAssemblerDescription,
        "dialog": {
            "title": "VectorAssembler",
            "contentText": "Настройки для VectorAssembler.",
            "content": <VectorAssembler/>,
            "onSaveClick": featuresFunctions.vectorAssemblerOnSave,
            "onCancelClick": featuresFunctions.vectorAssemblerOnCancel
        }
    },
];

export default featuresStages;