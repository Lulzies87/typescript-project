export function parseData(input, key) {
    if (input == null) {
        throw new Error(`${key} can't be null!`);
    }
    else {
        return input;
    }
}
export function logAction(actionLog, actionHistory) {
    actionHistory.push(actionLog);
    localStorage.setItem("actionHistory", JSON.stringify(actionHistory));
}
