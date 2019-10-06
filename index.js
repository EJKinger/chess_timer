(function(){

  //timers store data about the time passed and the DOM element
  var timer1 = {time: 240, active: false, el: document.getElementById('timerOne')};
  var timer2 = {time: 240, active: false, el: document.getElementById('timerTwo')};

  //adds event listeners to buttons
  document.getElementById('timerOneButton').addEventListener("click", clickOne, false);
  document.getElementById('timerTwoButton').addEventListener("click", clickTwo, false);
  document.getElementById('reset').addEventListener("click", reset, false);
  document.getElementById('start').addEventListener("click", start, false);

  //adds buttons, space bar starts, left and right arrows change
  document.onkeydown = function(evt){
    if (evt.keyCode === 32){
      evt.preventDefault();
      start();
    }
    if (evt.keyCode === 37){
      clickOne();
    }
    if (evt.keyCode === 39){
      clickTwo();
    }
  };

  //startable variable prevents multiple clicks of start button from starting separte intervals
  var startable = true;

  //stores the id of the interval
  var intervalID;

  //when change button one is clicked
  function clickOne(){
    timer1.active = false;
    timer2.active = true;
  }

  //when change button two is clicked
  function clickTwo(){
    timer2.active = false;
    timer1.active = true;
  }

  //alerts the winner and resets the timers when a timer runs out
  function endGame(num){
    alert('Player ' + num + ' wins!');
    reset();
  }

  //starts interval and stores intervalID
  function interval(){
    intervalID = setInterval(function(){
      setTimer();
    }, 1000);
  }

  //resets timers
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

  //sets timers on each interval
  function setTimer(){
    if (timer1.active){
      timer1.el.textContent = toMin(--timer1.time);
      if (timer1.time === 0){
        endGame(2);
      }
    } else if (timer2.active){
      timer2.el.textContent = toMin(--timer2.time);
      if (timer2.time === 0){
        endGame(1);
      }
    }
  }

  //starts game
  function start(){
    if (startable){
      timer1.active = true;
      interval();
      startable = false;
    }
  }

  //Changes seconds to min:sec format
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
