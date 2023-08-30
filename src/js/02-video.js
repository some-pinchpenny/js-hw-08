import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframePlayer = document.querySelector('#vimeo-player');
const player = new Player(iframePlayer);
const LS_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
  localStorage.setItem(LS_KEY, data.seconds);
}

player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);
