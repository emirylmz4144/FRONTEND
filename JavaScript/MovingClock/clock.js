const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    // Saniyeler
    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Dakikalar
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Saatler
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90 + ((minutes / 60) * 30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(second);
}

setInterval(setDate, 1000);
