  function updateCounter() {
        
    const now = new Date();
    const arrival = new Date("2025-07-11T00:00:00");

    let years = arrival.getFullYear() - now.getFullYear();
    let months = arrival.getMonth() - now.getMonth();
    let days = arrival.getDate() - now.getDate();
    let hours = arrival.getHours() - now.getHours();
    let minutes = arrival.getMinutes() - now.getMinutes();
    let seconds = arrival.getSeconds() - now.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Go to previous month
        const prevMonth = new Date(arrival.getFullYear(), arrival.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }    

    document.getElementById('days').innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('mins').innerHTML = `${minutes}`;
    document.getElementById('secs').innerHTML = `${seconds}`;
}


document.addEventListener('DOMContentLoaded', function () {

    updateCounter();

    setInterval(updateCounter, 1000);
  });

