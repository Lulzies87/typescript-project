type Action = { name: string; startTime: Date; endTime: Date };
const actions = [
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
] as Action[];


const actionListElement = document.querySelector(".actionList") as HTMLElement;
console.log(actionListElement);
if (actionListElement) {
  showActionList(actions, actionListElement);
}

function showActionList(actions: Action[], container: HTMLElement) {
  container.innerHTML = `${actions.map(renderActionList).join("\n")}`;
}

function renderActionList(action: Action) {
  return `
  <p>Action: ${action.name}</p>
  <p>Start-Time: ${action.startTime.toLocaleString()}</p>
  <p>End-Time: ${action.endTime.toLocaleString()}</p>
  `;
}

