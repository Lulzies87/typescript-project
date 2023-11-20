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
];
const actionListElement = document.querySelector(".actionList");
console.log(actionListElement);
if (actionListElement) {
    showActionList(actions, actionListElement);
}
function showActionList(actions, container) {
    if (actions.length === 0) {
        container.innerHTML = `<p>no actions yet!</p>`;
    }
    else {
        container.innerHTML = `${actions.map(renderActionList).join("\n")}`;
    }
}
function renderActionList(action) {
    return `
  <p>Action: ${action.name}</p>
  <p>Start-Time: ${action.startTime.toLocaleString()}</p>
  <p>End-Time: ${action.endTime.toLocaleString()}</p>
  `;
}
