const tasks = [
  // tasks, as declared in other file
  "Get haircut",
  "Repair bike",
  "Buy gym membership",
  "Email Student Union",
];

const addTask = (task) => {
  // function addTask, which takes a task as an argument
  tasks.push(task); // add task to tasks array
  console.log("Task: " + task + " has been added."); // log new task to console
  console.log("There are now: " + tasks.length + " items in the array."); // log number of tasks in array
};

addTask("Buy milk"); // call addTask function with argument "Buy milk"
