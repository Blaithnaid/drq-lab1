const tasks = [
  // tasks, as declared in other file
  "Get haircut",
  "Repair bike",
  "Buy gym membership",
  "Email Student Union",
];

const deleteTask = (task) => {
  // function deleteTask, which takes a task as an argument
  const index = tasks.indexOf(task); // find the index of the task in the tasks array
  if (index > -1) {
    // if the task is found
    tasks.splice(index, 1); // remove the task from the array
    console.log("Task: " + task + " has been removed."); // log the removed task to the console
    console.log("There are now: " + tasks.length + " items in the array."); // log the number of tasks in the array
  } else {
    // if the task is not found
    console.log("Task not found."); // log that the task was not found
  }
};

deleteTask("Repair bike"); // call deleteTask function with argument "Repair bike"
