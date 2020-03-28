export const outliersHandlingStrategies = {
    DROP: 0,
    REPLACE: {
        MEDIAN: 1,
        MEAN: 2
    },
    NONE: -1
};

export const outliersCalculatingStrategies = {
    Z_SCORES: 0,
    APPROX_QUANTILE: 1,
    NONE: -1
};

const allCalculatingStrategies = [
    outliersCalculatingStrategies.Z_SCORES,
    outliersCalculatingStrategies.APPROX_QUANTILE,
    outliersCalculatingStrategies.NONE
];

const allHandlingStrategies = [
    outliersHandlingStrategies.DROP,
    outliersHandlingStrategies.REPLACE.MEDIAN,
    outliersHandlingStrategies.REPLACE.MEAN,
    outliersHandlingStrategies.NONE
];

export const findIndexInHandlingStrategies = (value) => {
    if (allHandlingStrategies.indexOf(value) > -1)
        return allHandlingStrategies.indexOf(value);
    return outliersHandlingStrategies.NONE;
};

export const findIndexInCalculatingStrategies = (value) => {
    if (allCalculatingStrategies.indexOf(value) > -1)
        return allCalculatingStrategies.indexOf(value);
    return outliersCalculatingStrategies.NONE;
};