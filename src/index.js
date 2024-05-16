document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector('input[type="submit"]') 
  const sortBtn = document.getElementById("sort")
  let currentUser = "" 

  const getUserInput = () => {
    let userInput = {}
    const listInputs = document.querySelectorAll('input[type="text"]')
    for (const item of listInputs){
      let key = item.id
      userInput = {
        ...userInput,
        [key]: item.value
      }
    }
    return userInput
  }

  const handleDelete = (event) => event.target.parentNode.remove()

  const handleUserCheck = (username) => {
    if (username.toLowerCase() !== currentUser.toLowerCase()){
      currentUser = username
      const tasks = document.getElementById("tasks")
      tasks.innerHTML = ""
      return currentUser
    } else {
      return currentUser
    }
  }
  
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const userInput = getUserInput()
    const loggedInUser = handleUserCheck(userInput.username)
    const userSection = document.getElementById("logged-in-user")
    userSection.textContent =`User: ${loggedInUser}`
    const priority = document.getElementById("priority").value
    const tasks = document.getElementById("tasks")
    const todo = document.createElement("li")
    const taskText = document.createElement("span")
    const deleteBtn = document.createElement("button")
    const taskAttributes = document.createElement("p")
    taskAttributes.textContent = `Duration: ${userInput.duration}, Due Date: ${userInput.dueDate}`
    
    deleteBtn.addEventListener("click", handleDelete)
    deleteBtn.textContent = 'X'
    taskText.textContent = `${userInput["new-task-description"]} `

    if (priority === "1")
      taskText.style.color = "red"
    else if (priority === "2")
      taskText.style.color = "orange"
    else 
      taskText.style.color = "green"

    todo.appendChild(taskText)
    todo.appendChild(deleteBtn)
    todo.appendChild(taskAttributes)
    tasks.appendChild(todo)
  })

  sortBtn.addEventListener("click", () => {
    const tasks = document.getElementById("tasks")
    const arrayOfTasks = Array.from(tasks.getElementsByTagName("li"))
    const redArray = []
    const greenArray = []
    const yellowArray = []

    arrayOfTasks.forEach((item) => {
      const spanColor = item.querySelector("span")

      if (spanColor.style.color === "red"){
        redArray.push(item)
      } else if (spanColor.style.color === "green"){
        greenArray.push(item)
      } else {
        yellowArray.push(item)
      }
    })

    const sortedTasks = redArray.map(item => item)
    yellowArray.map(item => sortedTasks.push(item))
    greenArray.map(item => sortedTasks.push(item))

    tasks.innerHtml = ""

    sortedTasks.forEach(item => tasks.appendChild(item))
  })
})
