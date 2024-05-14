document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // User can type task into input field and click submit
  // User should then see the string provided appear in the DOm after submit
  btn = document.querySelector('input[type="submit"]') 

  const handleInput = () => {
    const input = document.getElementById("new-task-description")
    const userInput = input.value
    return userInput
  }

  //grab user submission into input field 
  btn.addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = handleInput()
    const tasks = document.getElementById("tasks")
    const todo = document.createElement("li")
    todo.textContent = userInput
    tasks.append(todo)
  });



});
