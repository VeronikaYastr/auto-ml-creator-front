import {ApiClient} from './ApiClient';
import {strategies} from "../static/nullValuesStrategies";
import {outliersCalculatingStrategies, outliersHandlingStrategies} from "../static/outliersStrategies";

/** A wrapper class to construct, send and handle server queries. */
export class ApiService {
    constructor() {
        this.apiClient = new ApiClient();
    }

    login(email, password) {
        console.log("Sending request to users/login");
        return this.apiClient.post('users/login', {
            email,
            password
        })
    }

    getAllModelsForUser(userId) {
        console.log("Request all ml models for user");
        return this.apiClient.get('ml-models/' + userId);
    }

    getAllDatasetsForUser(userId) {
        console.log("Request all ml datasets for user");
        return this.apiClient.get('ml-datasets/' + userId);
    }

    getAllPipelinesForUser(userId) {
        console.log("Request all ml pipelines for user");
        return this.apiClient.get('pipelines/' + userId);
    }

    createDataset(userId, datasetId, name, description) {
        return this.apiClient.post('ml-datasets/' + userId, {
            "id": datasetId,
            name,
            description
        })
    }

    createPipeline(userId, datasetId, name, description) {
        return this.apiClient.post('pipelines/' + datasetId, {
            userId,
            name,
            description
        })
    }

    loadStages(datasetId, stages) {
        return this.apiClient.postWithoutBody('pipelines/' + datasetId + '?stages=' + stages)
    }

    uploadFile(file) {
        return this.apiClient.postFile('files/upload/', file);
    }

    nullValues(strategy, datasetId, cols, minNonNullValue, value) {
        let url = 'data/transformation/' + datasetId + '/missing-data';
        switch (strategy) {
            case strategies.DROP.ANY:
                url += '/drop?columns=' + cols + '&strategy=ANY';
                break;
            case strategies.DROP.ALL:
                url += '/drop?columns=' + cols + '&strategy=ALL';
                break;
            case strategies.DROP.MIN_NON_NULL:
                if (minNonNullValue != null) {
                    url += '/drop?columns=' + cols + '&minNonNull=' + minNonNullValue + '&strategy=MIN_NON_NULL';
                }
                break;
            case strategies.FILL.MEDIAN:
                url += '/fill?columns=' + cols + '&strategy=MEDIAN';
                break;
            case strategies.FILL.MEAN:
                url += '/fill?columns=' + cols + '&strategy=MEAN';
                break;
            case strategies.FILL.CUSTOM_VALUE:
                url += '/fill?columns=' + cols + '&fillValue=' + value + '&strategy=CUSTOM_VALUE';
                break;
            case strategies.NONE:
            default:
                console.log("Unexpected error.");
                url = "";
        }
        console.log(url);
        return this.apiClient.postWithoutBody(url);
    }

    outliers(datasetId, cols, handlingStrategy, calculatingStrategy) {
        let url = "data/transformation/" + datasetId + '/outliers';
        if (calculatingStrategy === outliersCalculatingStrategies.Z_SCORES) {
            url += '?calculatingStrategy=Z_SCORES';
        } else {
            url += '?calculatingStrategy=APPROX_QUANTILE';
        }

        switch (handlingStrategy) {
            case outliersHandlingStrategies.DROP:
                url += '&handlingStrategy=DROP';
                break;
            case outliersHandlingStrategies.REPLACE.MEAN:
                url += '&handlingStrategy=REPLACE_BY_MEAN';
                break;
            case outliersHandlingStrategies.REPLACE.MEDIAN:
                url += '&handlingStrategy=REPLACE_BY_MEDIAN';
                break;
            default:
                url += '&handlingStrategy=UNKNOWN';
                break;
        }

        console.log(url);
        return this.apiClient.postWithoutBody(url);
    }
}
