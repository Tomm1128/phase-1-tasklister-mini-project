document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // User can type task into input field and click submit
  // User should then see the string provided appear in the DOm after submit
  const submitBtn = document.querySelector('input[type="submit"]') 

  const handleInput = () => {
    const input = document.getElementById("new-task-description")
    const userInput = input.value
    return userInput
  }

  const handleDelete = () => {
    
  }

  //grab user submission into input field 
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = handleInput()
    const tasks = document.getElementById("tasks")
    const todo = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'X'
    todo.textContent = `${userInput} `
    todo.appendChild(deleteBtn)
    tasks.appendChild(todo)
    deleteBtn.addEventListener("click", handleDelete)
  })



})

