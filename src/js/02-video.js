import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

function updateTime() {
    if (localStorage.getItem(STORAGE_KEY)) {
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
    };
};

updateTime();

// *****************************************************
////////////////// Second version //////////////////////

// import Player from "@vimeo/player";
// import throttle from "lodash.throttle";

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay(data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
// };

// const currentTimeValue = localStorage.getItem('videoplayer-current-time') || 0;
// player.setCurrentTime(currentTimeValue);

