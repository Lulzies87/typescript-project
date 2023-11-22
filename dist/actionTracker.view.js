import { getDurationInHours, mostPerformedAction } from "./actionTracker.model.js";
import { actionHistory } from "./app.js";
export function updateView() {
    const actionHistoryElement = document.querySelector(".actionHistory");
    if (actionHistoryElement) {
        showActionHistory(actionHistory, actionHistoryElement);
    }
    renderStatistics();
}
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
    <p>${getDurationInHours(action.endTime, action.startTime)} hr/s</p>
    <p>Start-Time: ${formatTime(action.startTime)}</p>
    <p>End-Time: ${formatTime(action.endTime)}</p>
    `;
}
export function updateActionSelection(actionsArray, container) {
    container.innerHTML = `${actionsArray.map(renderActionSelection).join("\n")}`;
}
function renderActionSelection(action) {
    return `
      <option>${action}</option>
      `;
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
function renderStatistics() {
    document.getElementById("mostPerformed").innerHTML = `<p>${mostPerformedAction(actionHistory)}</p>`;
}
