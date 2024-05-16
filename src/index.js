document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector('input[type="submit"]') 

  const getUserInput = () => {
    const input = document.getElementById("new-task-description")
    const userInput = input.value
    return userInput
  }

  const handleDelete = (event) => {
    event.target.parentNode.remove()
  }
  
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = getUserInput()
    const priority = document.getElementById("priority").value
    const tasks = document.getElementById("tasks")
    const todo = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.addEventListener("click", handleDelete)
    deleteBtn.textContent = 'X'
    todo.textContent = `${userInput} `
    todo.style.color = priority
    todo.appendChild(deleteBtn)
    tasks.appendChild(todo)
  })
})

