import React from "react";
import {functions} from "./../regression/regressionFunctions";
import titles from "../../text";
import LogisticRegression from "../../../components/steps/models/LogisticRegression";

const classificationModels = [{
    "title": "Логистическая регрессия",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Логистическая регрессия",
        "contentText": "Настройка параметров для логистической регрессии.",
        "content": <LogisticRegression/>,
        "onSaveClick": functions.normalizerOnSave,
        "onCancelClick": functions.normalizerOnCancel
    }
}, {
    "title": "Дерево решений",
    "description": titles.normalizerDescription,
    "dialog": {
        "title": "Дерево решений",
        "contentText": "Настройка параметров для дерева решений.",
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

export default classificationModels;