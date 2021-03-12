function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };


  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry",  "😨")
const tasks = [task1, task2];


task1.logState(); //clean cat litter has not been completed
task1.markCompleted();
task1.logState(); //cat letter completed
