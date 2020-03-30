import titles from "./text";
import React from "react";
import Normalizer from "../components/steps/stages/normalization/Normalizer";
import {functions} from "./stagesFunctions";

const normalizationStages = [{
    "title": "Normalizer",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Normalizer",
        "contentText": "Customize settings for Normalizer component.",
        "content": <Normalizer/>,
        "onSaveClick": functions.normalizerOnSave,
        "onCancelClick": functions.normalizerOnCancel
    }
},
    {
        "title": "Standard Scaler",
        "description": titles.normalizerDescription,
        "dialog": {
            "title": "Standard Scaler",
            "contentText": "Customize settings for Standard Scaler component.",
            "content": <div>Hu</div>
        }
    },
    {
        "title": "Max abs Scaler",
        "description": titles.normalizerDescription,
        "dialog": {
            "title": "Max abs Scaler",
            "contentText": "Customize settings for MaxAbsScaler component.",
            "content": <div>Ho</div>
        }
    },
    {
        "title": "Min max Scaler",
        "description": titles.normalizerDescription,
        "dialog": {
            "title": "Min max Scaler",
            "contentText": "Customize settings for MinMaxScaler component.",
            "content": <div>Hey</div>
        }
    }];

export default normalizationStages;