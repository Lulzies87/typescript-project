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

const actionSelectionElement = document.querySelector(
  "#actionSelection"
) as HTMLElement;
updateActionSelection(actions, actionSelectionElement);

const actionHistoryElement = document.querySelector(
  ".actionHistory"
) as HTMLElement;
if (actionHistoryElement) {
  showActionHistory(actionHistory, actionHistoryElement);
}

document.forms.namedItem("addActionForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const actionObject: ActionLog = {
    name: parseData(formData.get("actionSelection"), "action"),
    startTime: parseData(formData.get("startTime"), "startTime"),
    endTime: parseData(formData.get("endTime"), "endTime"),
  };

  logAction(actionObject, actionHistory);
  showActionHistory(actionHistory, actionHistoryElement);
});

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
  <p>Start-Time: ${formatTime(action.startTime)}</p>
  <p>End-Time: ${formatTime(action.endTime)}</p>
  `;
}

function updateActionSelection(
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

function parseData(input: any | null, key: string) {
  if (input == null) {
    throw new Error(`${key} can't be null!`);
  } else {
    return input;
  }
}

function logAction(actionLog: ActionLog, actionHistory: ActionLog[]) {
  actionHistory.push(actionLog);
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
