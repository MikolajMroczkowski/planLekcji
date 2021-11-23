var lessonsHours = {
    1: ['08:55', '09:40'],
    2: ['09:50', '10:35'],
    3: ['10:50', '11:35'],
    4: ['11:45', '12:30'],
    5: ['13:00', '13:45'],
    6: ['14:00', '14:45'],
    7: ['14:55', '15:40'],
    8: ['15:45', '16:30'],
}
function init() {
    var dzienTygodnia = document.getElementById('dzienTygodnia');
    dzienTygodnia.addEventListener('change', function () {
        readDay(dzienTygodnia.selectedIndex);
    });
    readDay(0);
    clock();
    const d = new Date();
    let day = d.getDay()
    if(day == 0 ){
        day = 7;
    }
    if (day > 5){
        day = 1;
    }
    document.getElementById("dzienTygodnia").selectedIndex = day -1;
}

function clock() {
    var clockid = "czas";
    var clock = document.getElementById(clockid);
    var today = new Date();
    var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if(hours.length == 1){
        hours = "0"+hours
    }
    if(minutes.length == 1){
        minutes = "0"+minutes
    }
    if(seconds.length == 1){
        seconds = "0"+seconds
    }
    var time = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = date + " " + time;
    window.setTimeout("clock()", 10);
}

var lessonHour

function readDay(day) {

}