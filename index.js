(function(){
  var time1 = {time: 240, active: false};
  var time2 = {time: 240, active: false};
  var timer1 = document.getElementById('timerOne');
  var timer2 = document.getElementById('timerTwo');
  document.getElementById('timerOneButton').addEventListener("click", clickOne, false);
  document.getElementById('timerTwoButton').addEventListener("click", clickTwo, false);
  document.getElementById('reset').addEventListener("click", reset, false);
  document.getElementById('start').addEventListener("click", start, false);
  var startable = true;

  var interval = function(){
    return setInterval(function(){
      setTimer();
    }, 1000);
  };

  function setTimer(){
    if (time1.active){
      timer1.textContent = toMin(time1.time--);
    } else if (time2.active){
      timer2.textContent = toMin(time2.time--);
    }
  }

  function clickOne(){
    time1.active = false;
    time2.active = true;
  }

  function clickTwo(){
    time2.active = false;
    time1.active = true;
  }

  function reset(){
    time1 = {time: 240, active: false};
    time2 = {time: 240, active: false};
    timer1.textContent = toMin(time1.time);
    timer2.textContent = toMin(time2.time);
    startable = true;
    clearInterval(interval);
  }

  function start(){
    if (startable){
      time1.active = true;
      interval();
      startable = false;
    }
  }

  function toMin(seconds){
    var mins = Math.floor(seconds / 60);
    var secs = seconds - (mins * 60);
    if (secs === 0){
      secs = '00';
    } else if (secs < 10){
      secs = '0' + secs;
    }
    return mins + ':' + secs;
  }

})();
