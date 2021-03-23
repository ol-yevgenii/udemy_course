'use strict';

const deadline = '2021-03-23 18:00:00';

function getRemainingTime(timeend) {

    const t = Date.parse(timeend) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds = Math.floor((t / 1000) % 60);
        
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'second': seconds
    };
     
}

function addZero(num) {
    if (num >= 0 && num <10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setClock(selector, timeend) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(timerUpdate, 1000);

    timerUpdate ();

    function timerUpdate () {
        const t = getRemainingTime(timeend);

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.second);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);
