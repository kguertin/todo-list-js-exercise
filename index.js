// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskTitles.push(description);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// // Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}



function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,


    logstate: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all  the poopemoji out of the litter box.')
const task2 = newTask('D0 Laundry', ':(');
const tasks = [task1, task2];

console.log(tasks)


task1.logstate(); // Clean Cat Litter has not been completed
task1.markCompleted();
console.log(task1)
task1.logstate(); // Clean Cat Litter has been completed

