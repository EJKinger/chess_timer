(function(){
  var timer1 = {time: 240, active: false, el: document.getElementById('timerOne')};
  var timer2 = {time: 240, active: false, el: document.getElementById('timerTwo')};
  document.getElementById('timerOneButton').addEventListener("click", clickOne, false);
  document.getElementById('timerTwoButton').addEventListener("click", clickTwo, false);
  document.getElementById('reset').addEventListener("click", reset, false);
  document.getElementById('start').addEventListener("click", start, false);
  var startable = true;
  var intervalID;

  var interval = function(){
    intervalID = setInterval(function(){
      setTimer();
    }, 1000);
  };

  function setTimer(){
    if (timer1.active){
      timer1.el.textContent = toMin(timer1.time--);
    } else if (timer2.active){
      timer2.el.textContent = toMin(timer2.time--);
    }
  }

  function clickOne(){
    timer1.active = false;
    timer2.active = true;
  }

  function clickTwo(){
    timer2.active = false;
    timer1.active = true;
  }

  function reset(){
    timer1.time = 240;
    timer1.active = false;
    timer2.time = 240;
    timer2.active = false;
    timer1.el.textContent = toMin(timer1.time);
    timer2.el.textContent = toMin(timer2.time);
    startable = true;
    clearInterval(intervalID);
  }

  function start(){
    if (startable){
      timer1.active = true;
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
