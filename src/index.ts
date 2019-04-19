function textParser(textBlock: string) {
    const columnNames: string[] = [];
    const table: object[] = [];
    let columnName: string = '';
    let position = 0;
    for (let i = 0, len = textBlock.length; i < len; i++) {
        const cursor = textBlock.charAt(i);
        if (cursor === '\n') {
            columnName += cursor;
            columnNames.push(columnName.trim());
            columnName = '';
            position = i + 1;
            break;
        } else if (cursor === ',') {
            columnNames.push(columnName.trim());
            columnName = '';
        } else {
            columnName += cursor;
        }
    }
    let colId = 0;
    for (let k = position, len = textBlock.length; k < len; k++) {
        const cursor = textBlock.charAt(k);
        if (cursor === '\n') {
            columnName += cursor;
            columnNames.push(columnName.trim());
            columnName = '';
            break;
        } else if (cursor === ',') {
            columnNames.push(columnName.trim());
            columnName = '';
        } else {
            columnName += cursor;
        }
    }
    return table;
}


export const app = () => {
};