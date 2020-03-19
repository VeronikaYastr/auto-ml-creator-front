const titles = {
    missingValuesTitle: 'Real world data is usually missing values, which trip up a lot of machine learning algorithms. ' +
        'In this module you can choose from different techniques used to handle missing values problem.',
    dropAnyStrategy: 'Use this strategy to drop rows containing any null or NaN values in selected columns.',
    dropAllStrategy: 'Use this strategy to drop rows only if every selected column is null or NaN for that row.',
    minNonNullStrategy: 'Use this strategy to drop rows containing less than `minNonNulls` non-null and non-NaN values.',
    fillWithMedianStrategy: 'Use this strategy to fill null or NaN values in selected columns with `median`.',
    fillWithMeanStrategy: 'Use this strategy to fill null or NaN values in selected columns with `mean`.',
    fillWithValueStrategy: 'Use this strategy to fill null or NaN values in selected columns with `value`.',
};
export default titles;