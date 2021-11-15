
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');
var seconds = 0;
var minutes = 0;
var cronometer = null;

function buttonAction(button) {
  switch (button) {
    case 'start':
      cronometer = setInterval(function() {
        seconds++;
        if (seconds < 10) {
          secondsDisplay.innerHTML = '0' + seconds;
        } else {
          secondsDisplay.innerHTML = seconds;
        }
        if (seconds > 60) {
          seconds = 0;
          minutes++;
          if (minutes < 10) {
            minutesDisplay.innerHTML = '0' + minutes + ':';
          } else {
            minutesDisplay.innerHTML = minutes + ':';
          }
        }
      }, 1000);
      break;
    
    case 'stop':
      clearInterval(cronometer);
      break;
    
    default:
      clearInterval(cronometer);
      seconds = 0;
      minutes = 0;
      secondsDisplay.innerHTML = '00';
      minutesDisplay.innerHTML = '00:';
      break;
  }
}