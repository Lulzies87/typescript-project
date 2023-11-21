import { ActionLog } from "./actionTracker.model.js";

export function parseData(input: any | null, key: string) {
  if (input == null) {
    throw new Error(`${key} can't be null!`);
  } else {
    return input;
  }
}

export function logAction(actionLog: ActionLog, actionHistory: ActionLog[]) {
  actionHistory.push(actionLog);
  localStorage.setItem("actionHistory", JSON.stringify(actionHistory));
}
