import {ApiClient} from './ApiClient';
import {strategies} from "../static/nullValuesStrategies";

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

    uploadFile(file) {
        console.log("Upload file.");
        return this.apiClient.post('files/upload/', file);
    }

    dropValues(datasetId, cols, how, minNonNullValue) {
        let url = 'data/transformation//missing-data' + datasetId + '/drop?columns=' + cols;
        if (how != null) {
            url += '&how=' + how;
        }
        if (minNonNullValue != null) {
            url += '&minNonNull=' + minNonNullValue;
        }
        return this.apiClient.postWithoutBody(url);
    }

    nullValues(strategy, datasetId, cols, minNonNullValue, value) {
        let url = 'data/transformation/' + datasetId + '/missing-data';
        switch (strategy) {
            case strategies.DROP.ANY:
                url += '/drop?columns=' + cols + '&how=any';
                break;
            case strategies.DROP.ALL:
                url += '/drop?columns=' + cols + '&how=all';
                break;
            case strategies.DROP.MIN_NON_NULL:
                if (minNonNullValue != null) {
                    url += '&minNonNull=' + minNonNullValue;
                }
                break;
            case strategies.FILL.MEDIAN:
                url += '/fill?columns=' + cols + '&strategy=median';
                break;
            case strategies.FILL.MEAN:
                url += '/fill?columns=' + cols + '&strategy=mean';
                break;
            case strategies.FILL.CUSTOM_VALUE:
                url += '/fill?columns=' + cols + '&fillValue=' + value;
                break;
            case strategies.NONE:
            default:
                console.log("Unexpected error.");
                url = "";
        }
        console.log(url);
        return this.apiClient.postWithoutBody(url);
    }
}
