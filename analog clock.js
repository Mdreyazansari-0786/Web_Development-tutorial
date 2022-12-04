setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr = 30 * hr + min / 2; //converting current time
    min= 6 * min;
    sec = 6 * sec;
  
    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${min}deg)`;
    second.style.transform = `rotate(${sec}deg)`;
}, 1000);