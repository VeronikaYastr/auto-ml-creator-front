const addColumn = (column) => {
    let columns = JSON.parse(localStorage.getItem("additionalColumns"));
    if (columns === null) {
        columns = [];
    }
    columns.push(column);
    localStorage.setItem("additionalColumns", JSON.stringify(columns));
};

const addStage = (stage) => {
    let stages = JSON.parse(localStorage.getItem("stages"));
    if (stages === null || stages === undefined) {
        stages = [];
    }
    stages.push(stage);
    localStorage.setItem("stages", JSON.stringify(stages));
};

const removeStage = (id) => {
    let stages = JSON.parse(localStorage.getItem("stages"));
    if (stages !== null && stages !== undefined) {
        localStorage.setItem("stages", JSON.stringify(stages.filter(x => x.id !== id)));
    }
};

const removeFromAdditionalColumns = (column) => {
    let additionalColumns = JSON.parse(localStorage.getItem("additionalColumns"));
    if (additionalColumns !== null && additionalColumns !== undefined) {
        localStorage.setItem("additionalColumns", JSON.stringify(additionalColumns.filter(x => x === column)));
    }
};

const getColumns = () => {
    const c1 = JSON.parse(localStorage.getItem("selectedDataset")).columns;
    const c2 = JSON.parse(localStorage.getItem("additionalColumns"));
    return c1.concat(c2);
};

export const functions = {
    addStage,
    removeStage,
    addColumn,
    getColumns,
    removeFromAdditionalColumns
};