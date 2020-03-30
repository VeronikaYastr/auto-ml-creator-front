export const norms = {
    L1: 0,
    L2: 1,
    LInf: 2,
    NONE: -1
};

const allValues = [
    norms.L1,
    norms.L2,
    norms.LInf,
    norms.NONE
];

export const findIndex = (value) => {
    if (allValues.indexOf(value) > -1)
        return allValues[value];
    return norms.NONE;
};