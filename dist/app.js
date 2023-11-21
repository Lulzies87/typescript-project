import { logAction, parseData } from "./actionTracker.controller.js";
import { actions } from "./actionTracker.model.js";
import { showActionHistory, updateActionSelection } from "./actionTracker.view.js";
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
