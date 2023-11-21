import { Action, ActionLog, actions, mostPerformedAction} from "./actionTracker.model.js";
import { actionHistory } from "./app.js";

export function updateView() {
  const actionHistoryElement = document.querySelector(".actionHistory") as HTMLElement;
  if (actionHistoryElement) {
    showActionHistory(actionHistory, actionHistoryElement);
  }

  renderStatistics();
}

function showActionHistory(
  actionHistory: ActionLog[],
  container: HTMLElement
) {
  if (actionHistory.length === 0) {
    container.innerHTML = `<p>no actions yet!</p>`;
  } else {
    container.innerHTML = `${actionHistory
      .map(renderActionHistory)
      .join("\n")}`;
  }
}

function renderActionHistory(action: ActionLog) {
  return `
    <p>Action: ${action.name}</p>
    <p>Start-Time: ${formatTime(action.startTime)}</p>
    <p>End-Time: ${formatTime(action.endTime)}</p>
    `;
}

export function updateActionSelection(
  actionsArray: typeof actions,
  container: HTMLElement
) {
  container.innerHTML = `${actionsArray.map(renderActionSelection).join("\n")}`;
}

function renderActionSelection(action: Action) {
  return `
      <option>${action}</option>
      `;
}

function formatTime(time: Date) {
  return new Date(time).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderStatistics() {
  document.getElementById(
    "mostPerformed"
  )!.innerHTML = `<p>${mostPerformedAction(actionHistory)}</p>`;
}
