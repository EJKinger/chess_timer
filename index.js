(function(){
  var time1 = {time: 240, active: true};
  var time2 = {time: 240, active: false};
  var timer1 = document.getElementById('timerOne');
  var timer2 = document.getElementById('timerTwo');
  document.getElementById('timerOneButton').addEventListener("click", clickOne, false);
  document.getElementById('timerTwoButton').addEventListener("click", clickTwo, false);
  document.getElementById('reset').addEventListener("click", reset, false);

  function setTimer(){
    if (time1.active){
      timer1.textContent = --time1.time;
    } else if (time2.active){
      timer2.textContent = --time2.time;
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
    time1 = {time: 240, active: true};
    time2 = {time: 240, active: false};
    timer1.textContent = time1.time;
    timer2.textContent = time2.time;
  }

  setInterval(function(){
    setTimer();
  }, 1000);
})();