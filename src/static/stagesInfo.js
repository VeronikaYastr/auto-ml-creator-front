import React from "react";
import Normalizer from "../components/steps/stages/normalization/Normalizer";
import StandardScaler from "../components/steps/stages/normalization/StandardScaler";
import {functions} from "./stagesFunctions";
import titles from "./text";

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
        "title": "StandardScaler",
        "description": titles.stScalerDescription,
        "dialog": {
            "title": "Standard Scaler",
            "contentText": "Customize settings for Standard Scaler component.",
            "content": <StandardScaler/>,
            "onSaveClick": functions.stScalerOnSave,
            "onCancelClick": functions.stScalerOnCancel
        }
    },
    {
        "title": "MaxAbsScaler",
        "description": titles.maxAbsScalerDescription,
        "dialog": {
            "title": "Max abs Scaler",
            "contentText": "Customize settings for MaxAbsScaler component.",
            "content": <Normalizer/>,
            "onSaveClick": functions.normalizerOnSave,
            "onCancelClick": functions.normalizerOnCancel
        }
    },
    {
        "title": "MinMaxScaler",
        "description": titles.minMaxScalerDescription,
        "dialog": {
            "title": "Min max Scaler",
            "contentText": "Customize settings for MinMaxScaler component.",
            "content": <Normalizer/>,
            "onSaveClick": functions.normalizerOnSave,
            "onCancelClick": functions.normalizerOnCancel
        }
    }];

export default normalizationStages;