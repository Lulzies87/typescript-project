const actions = ["Study", "Exercise", "Read a book", "Meditate"];
const actionHistory = [
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
const actionHistoryElement = document.querySelector(".actionHistory");
console.log(actionHistoryElement);
if (actionHistoryElement) {
    showActionHistory(actionHistory, actionHistoryElement);
}
function showActionHistory(actionHistory, container) {
    if (actionHistory.length === 0) {
        container.innerHTML = `<p>no actions yet!</p>`;
    }
    else {
        container.innerHTML = `${actionHistory
            .map(renderActionHistory)
            .join("\n")}`;
    }
}
function renderActionHistory(action) {
    return `
  <p>Action: ${action.name}</p>
  <p>Start-Time: ${action.startTime.toLocaleString()}</p>
  <p>End-Time: ${action.endTime.toLocaleString()}</p>
  `;
}
