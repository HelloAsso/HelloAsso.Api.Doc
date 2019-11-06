function dynamicDate() {
    var date = new Date();
    var pad = '00';

    var year = date.getFullYear();
    var month = date.getMonth();
    var monthIso = (date.getMonth() + 1) + '';
    monthIso = pad.substring(0, pad.length - monthIso.length) + monthIso;
    var months = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    var day = date.getDate();
    if (day == 1) {
        day = day + 'er';
    }
    var dayIso = date.getDate() + '';
    dayIso = pad.substring(0, pad.length - dayIso.length) + dayIso;
    var hour = date.getHours() + '';
    hour = pad.substring(0, pad.length - hour.length) + hour;
    var minutes = date.getMinutes() + '';
    minutes = pad.substring(0, pad.length - minutes.length) + minutes;
    var seconds = date.getSeconds() + '';
    seconds = pad.substring(0, pad.length - seconds.length) + seconds;

    var fullDate = day + ' ' + months[month] + ' ' + year + ' à ' + hour + 'h' + minutes;
    document.querySelector('.full-date').innerHTML = fullDate;

    var apiDate = year + '-' + monthIso + '-' + dayIso + 'T' + hour + ':' + minutes + ':' + seconds;
    document.querySelector('.api-date').innerHTML = apiDate;
}

function initDate() {
    dynamicDate();
};

window.onload = initDate();
window.setInterval(function () {
    initDate();
}, 1000);