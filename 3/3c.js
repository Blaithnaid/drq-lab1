const tasks = [
  // tasks, as declared in other file
  "Get haircut",
  "Repair bike",
  "Buy gym membership",
  "Email Student Union",
];

const listAllTasks = () => {
  // arrow function listAllTasks
  tasks.forEach((task, index) => {
    // for each task in tasks, with its index
    console.log(index + 1 + ". " + task); // log each task with its index, as in a numbered list
  });
};

listAllTasks(); // call our function
