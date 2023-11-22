import { actionHistory, getDurationInMs } from "./actionTracker.model.js";
import { updateView } from "./actionTracker.view.js";
export function activateForm() {
    document.forms.namedItem("addActionForm")?.addEventListener("submit", (e) => {
        const formData = new FormData(e.target);
        const actionObject = {
            name: parseData(formData.get("actionSelection"), "action"),
            startTime: parseData(formData.get("startTime"), "startTime"),
            endTime: parseData(formData.get("endTime"), "endTime"),
        };
        actionObject.durationInMs = getDurationInMs(actionObject.endTime, actionObject.startTime);
        logAction(actionObject, actionHistory);
        updateView();
    });
}
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
