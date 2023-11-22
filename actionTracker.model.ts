export const actions = [
  "Study",
  "Exercise",
  "Read a book",
  "Meditate",
  "Gaming",
] as const;
export type Action = (typeof actions)[number];
export interface ActionLog {
  name: Action;
  startTime: Date;
  endTime: Date;
  durationInMs?: number;
}

export let actionHistory: ActionLog[] = [];
const retrieveActionHistory = localStorage.getItem("actionHistory");
if (retrieveActionHistory) {
  actionHistory = JSON.parse(retrieveActionHistory);
}

export function mostPerformedAction(actionHistory: ActionLog[]) {
  let mostPerformed: string = "?";
  let count = 0;

  actionHistory.forEach((actionLog) => {
    if (countAction(actionHistory, actionLog.name) > count) {
      count = countAction(actionHistory, actionLog.name);
      mostPerformed = actionLog.name;
    }
  });

  return mostPerformed;
}

function countAction(actionHistory: ActionLog[], action: Action) {
  return actionHistory.filter((actionLog) => actionLog.name === action).length;
}

export function longestSessionDuration(actionHistory: ActionLog[]) {
  actionHistory.forEach((actionLog) => {});
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function getDurationInHours(date1: Date, date2: Date) {
  const durationMs = getDurationInMs(date1, date2);
  const seconds = Math.floor(durationMs / 1000) % 60;
  const minutes = Math.floor((durationMs / 1000 / 60) % 60);
  const hours = Math.floor((durationMs / 1000 / 60 / 60) % 24);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export function getDurationInMs(date1: Date, date2: Date) {
  date1 = new Date(date1);
  date2 = new Date(date2);

  return Math.abs(date1.getTime() - date2.getTime());
}
