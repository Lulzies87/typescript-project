const actions = ["Study", "Exercise", "Read a book", "Meditate"];
let actionHistory = [];
const retrieveActionHistory = localStorage.getItem("actionHistory");
if (retrieveActionHistory) {
    actionHistory = JSON.parse(retrieveActionHistory);
}
const actionSelectionElement = document.querySelector("#actionSelection");
updateActionSelection(actions, actionSelectionElement);
const actionHistoryElement = document.querySelector(".actionHistory");
if (actionHistoryElement) {
    showActionHistory(actionHistory, actionHistoryElement);
}
document.forms.namedItem("addActionForm")?.addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    const actionObject = {
        name: parseData(formData.get("actionSelection"), "action"),
        startTime: parseData(formData.get("startTime"), "startTime"),
        endTime: parseData(formData.get("endTime"), "endTime"),
    };
    logAction(actionObject, actionHistory);
    showActionHistory(actionHistory, actionHistoryElement);
});
function showActionHistory(actionHistory, container) {
    if (actionHistory.length === 0) {
        container.innerHTML = `<p>no actions yet!</p>`;
    }
    else {
        container.innerHTML = `${actionHistory
            .map(renderActionHistory)
            .join("\n")}`;
    }
}
function renderActionHistory(action) {
    return `
  <p>Action: ${action.name}</p>
  <p>Start-Time: ${formatTime(action.startTime)}</p>
  <p>End-Time: ${formatTime(action.endTime)}</p>
  `;
}
function updateActionSelection(actionsArray, container) {
    container.innerHTML = `${actionsArray.map(renderActionSelection).join("\n")}`;
}
function renderActionSelection(action) {
    return `
    <option>${action}</option>
    `;
}
function parseData(input, key) {
    if (input == null) {
        throw new Error(`${key} can't be null!`);
    }
    else {
        return input;
    }
}
function logAction(actionLog, actionHistory) {
    actionHistory.push(actionLog);
    localStorage.setItem("actionHistory", JSON.stringify(actionHistory));
}
function formatTime(time) {
    return new Date(time).toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
