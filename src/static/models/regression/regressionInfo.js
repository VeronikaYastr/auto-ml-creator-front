import React from "react";
import {functions} from "./regressionFunctions";
import titles from "../../text";
import LogisticRegression from "../../../components/steps/models/LogisticRegression";

const regressionModels = [{
    "title": "Линейная регрессия",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Линейная регрессия",
        "contentText": "Настройка параметров для линейной регрессии.",
        "content": <LogisticRegression/>,
        "onSaveClick": functions.normalizerOnSave,
        "onCancelClick": functions.normalizerOnCancel
    }
}, {
    "title": "Случайный лес",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Случайный лес",
        "contentText": "Настройка параметров для случайного леса.",
        "content": <LogisticRegression/>,
        "onSaveClick": functions.normalizerOnSave,
        "onCancelClick": functions.normalizerOnCancel
    }
}];

export default regressionModels;