export const actions = [
    "Study",
    "Exercise",
    "Read a book",
    "Meditate",
    "Gaming",
];
export function mostPerformedAction(actionHistory) {
    let mostPerformed = "?";
    let count = 0;
    actionHistory.forEach((actionLog) => {
        if (countAction(actionHistory, actionLog.name) > count) {
            count = countAction(actionHistory, actionLog.name);
            mostPerformed = actionLog.name;
        }
    });
    return mostPerformed;
}
function countAction(actionHistory, action) {
    return actionHistory.filter((actionLog) => actionLog.name === action).length;
}
