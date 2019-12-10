/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let splitTime = time.split(":");
  let hour = splitTime[0];
  let min = splitTime[1];

  if (hour < 12)
    return "Good Morning";
  else if (hour < 17)
    return "Good Afternoon";
  else 
    return "Good Evening";
};

function displayMessage(input) {
  let me = document.getElementById("greeting")
  me.innerText = input
  return me
};


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
