document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector('input[type="submit"]') 
  const sortBtn = document.getElementById("sort")

  const getUserInput = () => {
    const input = document.getElementById("new-task-description")
    const userInput = input.value
    return userInput
  }

  const handleDelete = (event) => event.target.parentNode.remove()

  
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

    if (priority === "1")
      todo.style.color = "red"
    else if (priority === "2")
      todo.style.color = "orange"
    else 
      todo.style.color = "green"

    todo.appendChild(deleteBtn)
    tasks.appendChild(todo)
  })

  sortBtn.addEventListener("click", () => {
    const tasks = document.getElementById("tasks")
    const arrayOfTasks = Array.from(tasks.getElementsByTagName("li"))
    const redArray = []
    const greenArray = []
    const yellowArray = []

    arrayOfTasks.forEach((item) => {
      if (item.style.color === "red"){
        redArray.push(item)
      } else if (item.style.color === "green"){
        greenArray.push(item)
      } else {
        yellowArray.push(item)
      }
    })

    const sortedTasks = redArray.map(item => item)
    yellowArray.map(item => sortedTasks.push(item))
    greenArray.map(item => sortedTasks.push(item))

    tasks.innerHtml = ""

    sortedTasks.forEach (item => tasks.appendChild(item))
  })

})

