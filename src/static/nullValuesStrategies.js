export const strategies = {
    DROP: {
        ALL: 0,
        ANY: 1,
        MIN_NON_NULL: 2
    },
    FILL: {
        MEDIAN: 3,
        MEAN: 4,
        CUSTOM_VALUE: 5
    },
    NONE: -1
};

const allValues = [
    strategies.DROP.ALL,
    strategies.DROP.ANY,
    strategies.DROP.MIN_NON_NULL,
    strategies.FILL.MEDIAN,
    strategies.FILL.MEAN,
    strategies.FILL.CUSTOM_VALUE,
    strategies.NONE
];

export const findIndex = (value) => {
    if (allValues.indexOf(value) > -1)
        return allValues.indexOf(value);
    return strategies.NONE;
};