const actions = ["Study", "Exercise", "Read a book", "Meditate"] as const;
type Action = (typeof actions)[number];
interface ActionLog {
  name: Action;
  startTime: Date;
  endTime: Date;
}
const actionHistory: ActionLog[] = [
  {
    name: "Study",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    name: "Exercise",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    name: "Read a book",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    name: "Meditate",
    startTime: new Date(),
    endTime: new Date(),
  },
];

const actionSelectionElement = document.querySelector("#actionSelection") as HTMLElement;
updateActionSelection(actions, actionSelectionElement);

const actionHistoryElement = document.querySelector(".actionHistory") as HTMLElement;
if (actionHistoryElement) {
  showActionHistory(actionHistory, actionHistoryElement);
}

function showActionHistory(actionHistory: ActionLog[], container: HTMLElement) {
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
  <p>Start-Time: ${action.startTime.toLocaleString()}</p>
  <p>End-Time: ${action.endTime.toLocaleString()}</p>
  `;
}

function updateActionSelection(actionsArray: Array, container: HTMLElement) {
    container.innerHTML = `${actionsArray.map(renderActionSelection).join("\n")}`
}

function renderActionSelection(action: Action) {
    return `
    <option>${action}</option>
    `
}