document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // User can type task into input field and click submit
  //User should then see the string provided appear in the DOm after submit

  const handleInput = () => {
    const input = document.getElementById("new-task-description")
    const userInput = input.value
    console.log(userInput)
  }

  //grab user submission into input field 
  addEventListener("click", (event) => {
    event.preventDefault()
    const userInput = handleInput()
  });

});
