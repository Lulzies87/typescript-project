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
