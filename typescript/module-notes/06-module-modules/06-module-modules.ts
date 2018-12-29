import { PI, calculateCircumference } from './math/circle';
import { calculateRectangle } from './math/rectangle';

console.log(calculateRectangle(10,20));
console.log(calculateCircumference(5));

let triggerButton = document.querySelector("button.trigger");
triggerButton.addEventListener("mousedown", logEvent);
triggerButton.addEventListener("click", logEvent);

function logEvent(event) {
  var msg = "Event <strong>" + event.type + "</strong> at <em>" +
            event.clientX + ", " + event.clientY + "</em>";
  alert(msg);
}