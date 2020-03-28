const titles = {
    missingValuesTitle: 'Real world data is usually missing values, which trip up a lot of machine learning algorithms. ' +
        'In this module you can choose from different techniques used to handle missing values problem.',
    dropAnyStrategy: 'Use this strategy to drop rows containing any null or NaN values in selected columns.',
    dropAllStrategy: 'Use this strategy to drop rows only if every selected column is null or NaN for that row.',
    minNonNullStrategy: 'Use this strategy to drop rows containing less than `minNonNull` non-null and non-NaN values.',
    fillWithMedianStrategy: 'Use this strategy to fill null or NaN values in selected columns with `median`.',
    fillWithMeanStrategy: 'Use this strategy to fill null or NaN values in selected columns with `mean`.',
    fillWithValueStrategy: 'Use this strategy to fill null or NaN values in selected columns with `value`.',
    outliersTitle: 'Outliers are extreme values that deviate from other observations on data. You can detect it with ZScores or IQR approach and then drop them or replace by mean or median value of column.',
    zScoresStrategy: 'The Z-score, or standard score, is a way of describing a data point in terms of its relationship to the mean and standard deviation of a group of points.',
    approxQuantileStrategy: 'Interquartile range (IQR) is a measure of statistical dispersion, being equal to the difference between 75th and 25th percentiles, or between upper and lower quartiles, IQR = Q3 −  Q1.',
};
export default titles;