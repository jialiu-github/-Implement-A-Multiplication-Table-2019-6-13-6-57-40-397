function createMultiplicationTable(startNumber, endNumber){
    if(!numberValidator(startNumber, endNumber)) return null;
    const multiplicationList = createMultiplicationList(startNumber, endNumber);
    return formatToMultiplicationTable(multiplicationList);
}

function formatToMultiplicationTable(multiplicationList){
    let firstRow = multiplicationList[0];
    let multiplicationTable = formatRow(firstRow);

    for (i = 1; i < multiplicationList.length; i ++) {
        const rowList = multiplicationList[i];
        const row = formatRow(rowList);
        multiplicationTable += '\n' + row;
    }

    return multiplicationTable
}

function formatRow(rowList){
    let row = formatMultiplicationItem(rowList[0]);
    for (j = 1; j < rowList.length; j++) {
        const item = rowList[j];
        row += ` ${formatMultiplicationItem(item)}`;
    }
    return row;
}

function formatMultiplicationItem(multiplication){
    return `${multiplication.col}*${multiplication.row}=${multiplication.col*multiplication.row}`;
}

function createMultiplicationList(startNumber, endNumber) {
    const multiplicationList = [];
    for(row = startNumber; row <= endNumber; row++){
        const rowList = [];
        for(col = startNumber; col <= row; col++){
            rowList.push({row, col});
        }
        multiplicationList.push(rowList);
    }
    return multiplicationList;
}

function numberValidator(startNumber, endNumber){
    return startNumber > 0 &&
           endNumber < 1000 &&
           startNumber <= endNumber;
}

module.exports = createMultiplicationTable;