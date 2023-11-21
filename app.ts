import { logAction, parseData } from "./actionTracker.controller.js";
import {  ActionLog, actions, mostPerformedAction} from "./actionTracker.model.js";
import { updateView, updateActionSelection} from "./actionTracker.view.js";

export let actionHistory: ActionLog[] = [];
const retrieveActionHistory = localStorage.getItem("actionHistory");
if (retrieveActionHistory) {
  actionHistory = JSON.parse(retrieveActionHistory);
}

const actionSelectionElement = document.querySelector(
  "#actionSelection"
) as HTMLElement;
updateActionSelection(actions, actionSelectionElement);

document.forms.namedItem("addActionForm")?.addEventListener("submit", (e) => {
  const formData = new FormData(e.target as HTMLFormElement);

  const actionObject: ActionLog = {
    name: parseData(formData.get("actionSelection"), "action"),
    startTime: parseData(formData.get("startTime"), "startTime"),
    endTime: parseData(formData.get("endTime"), "endTime"),
  };

  logAction(actionObject, actionHistory);
  updateView();
});

updateView();