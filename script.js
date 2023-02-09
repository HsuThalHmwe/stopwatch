const container = document.getElementsByClassName("container");
const btncontainer = document.getElementsByClassName("btnContainer");

const stopwatchTag = document.getElementsByClassName("stopwatch")[0];
const startTag = document.getElementsByClassName("firstbutton")[0];
// const secTag = document.getElementsByClassName("secondbutton")[0];
const pauseTag = document.querySelector(".secondbutton");
const continueTag = document.getElementsByClassName("thirdbutton")[0];
const restartTag = document.getElementsByClassName("fourthbutton")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;

// const setTime = setInterval(() => {
//   console.log("This is testing");
// }); //built in function

// setInterval(setTime, 30000);

const setTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }
  //ternary operator
  // condition ? code : code ;
  let secondsChange = seconds < 10 ? "0" + seconds.toString() : seconds;
  let minutesChange = minutes < 10 ? "0" + minutes.toString() : minutes;
  let hoursChange = hours < 10 ? "0" + hours.toString() : hours;

  stopwatchTag.textContent =
    hoursChange + ":" + minutesChange + ":" + secondsChange;
};

let clearId;
startTag.addEventListener("click", () => {
  clearId = setInterval(setTime, 1000);
});

pauseTag.addEventListener("click", () => {
  clearInterval(clearId);
});
continueTag.addEventListener("click", () => {
  clearInterval(clearId);
  clearId = setInterval(setTime, 1000);
});
restartTag.addEventListener("click", () => {
  clearInterval(clearId);
  (seconds = 0), (minutes = 0), (hours = 0);
  clearId = setInterval(setTime, 1000);
});
