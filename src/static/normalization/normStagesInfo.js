import React from "react";
import Normalizer from "../../components/steps/stages/normalization/Normalizer";
import StandardScaler from "../../components/steps/stages/normalization/StandardScaler";
import {normalizationFunctions} from "./normStagesFunctions";
import titles from "../text";

const normalizationStages = [{
    "title": "Normalizer",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Normalizer",
        "contentText": "Настройки для Normalizer.",
        "content": <Normalizer/>,
        "onSaveClick": normalizationFunctions.normalizerOnSave,
        "onCancelClick": normalizationFunctions.normalizerOnCancel
    }
},
    {
        "title": "StandardScaler",
        "description": titles.stScalerDescription,
        "dialog": {
            "title": "Standard Scaler",
            "contentText": "Настройки для  Standard Scaler.",
            "content": <StandardScaler/>,
            "onSaveClick": normalizationFunctions.stScalerOnSave,
            "onCancelClick": normalizationFunctions.stScalerOnCancel
        }
    },
    {
        "title": "MaxAbsScaler",
        "description": titles.maxAbsScalerDescription,
        "dialog": {
            "title": "Max abs Scaler",
            "contentText": "Настройки для  MaxAbsScaler.",
            "content": <Normalizer/>,
            "onSaveClick": normalizationFunctions.normalizerOnSave,
            "onCancelClick": normalizationFunctions.normalizerOnCancel
        }
    },
    {
        "title": "MinMaxScaler",
        "description": titles.minMaxScalerDescription,
        "dialog": {
            "title": "Min max Scaler",
            "contentText": "Настройки для MinMaxScaler.",
            "content": <Normalizer/>,
            "onSaveClick": normalizationFunctions.normalizerOnSave,
            "onCancelClick": normalizationFunctions.normalizerOnCancel
        }
    }];

export default normalizationStages;