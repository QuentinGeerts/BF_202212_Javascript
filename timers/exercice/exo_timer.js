displayHours();
// setInterval(displayHours, 1000)

displayDate();

function displayHours () {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let formattedHours = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    document.title = formattedHours;

    const divHours = document.getElementById('heure');
    divHours.innerText = formattedHours;

    if (hours == 0 && minutes === 0 && seconds == 0) {
        displayDate()
    }

    setTimeout(displayHours, 100);
}

function displayDate () {
    const now = new Date();

    const daysOfWeek = [
        "Dimanche", "Lundi", "Mardi",
        "Mercredi", "Jeudi", "Vendredi",
        "Samedi"
    ];

    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai",
        "Juin", "Juillet", "Aout", "Septembre", "Octobre",
        "Novembre", "Décembre"
    ];

    let day = daysOfWeek[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    const formattedDate = `${day}, le ${date} ${month} ${year}`;

    const divDate = document.getElementById('date');
    divDate.innerText = formattedDate;
}