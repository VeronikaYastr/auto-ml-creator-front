import React from "react";
import titles from "../text";
import StringIndexer from "../../components/steps/stages/oneHotEncoding/StringIndexer";
import OneHotEncoder from "../../components/steps/stages/oneHotEncoding/OneHotEncoder";
import {categoricalEncodingFunctions} from "./catEncodingFunctions";

const categoricalEncodingStages = [
    {
        "title": "StringIndexer",
        "description": titles.stringIndexerDescription,
        "dialog": {
            "title": "StringIndexer",
            "contentText": "Настройки для StringIndexer.",
            "content": <StringIndexer/>,
            "onSaveClick": categoricalEncodingFunctions.stringIndexerOnSave,
            "onCancelClick": categoricalEncodingFunctions.stringIndexerOnCancel
        }
    },
    {
        "title": "OneHotEncoder",
        "description": titles.oneHotEncodingDescription,
        "dialog": {
            "title": "OneHotEncoder",
            "contentText": "Настройки для  OneHotEncoder.",
            "content": <OneHotEncoder/>,
            "onSaveClick": categoricalEncodingFunctions.oneHotEncoderOnSave,
            "onCancelClick": categoricalEncodingFunctions.oneHotEncoderOnCancel
        }
    },
    {
        "title": "QuantileDiscretizer",
        "description": titles.quantileDiscretizerDescription,
        "dialog": {
            "title": "QuantileDiscretizer",
            "contentText": "Настройки для  QuantileDiscretizer.",
            "content": <OneHotEncoder/>,
            "onSaveClick": categoricalEncodingFunctions.oneHotEncoderOnSave,
            "onCancelClick": categoricalEncodingFunctions.oneHotEncoderOnCancel
        }
    }
];

export default categoricalEncodingStages;